// Edit these
var USER_NAME = 'willBear';
var NUM_ITEMS_TO_DISPLAY = 5;
var DATE_FORMAT_STRING = "mm/dd/yyyy, h:MM TT";

var GITHUB_URL = 'https://github.com/';

$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + USER_NAME + '/events?page=1&per_page=' + NUM_ITEMS_TO_DISPLAY,
        dataType: 'json',
        success: function (ans) {
            loadFeed(ans);
        }
    })
});

function loadFeed(feed) {
    var count = feed.length > NUM_ITEMS_TO_DISPLAY ? NUM_ITEMS_TO_DISPLAY : feed.length;

    for (var i = 0; i < count; i++) {
        var github_item = feed[i];

        var payload = github_item.payload;
        var repo = github_item.repo.name;

        var activity_avatar = getActivityAvatar(github_item.actor.avatar_url);
        var activity_info = getActivityInfo(repo, github_item.created_at);
        var activity_link = getActivityLink(github_item.type, payload, repo);

        var content = $('<div />').addClass('content');

        content.append(activity_info);
        content.append(activity_link);

        entry = new Array();
        entry.push(activity_avatar);
        entry.push(content);

        var div = $('<div />').addClass('entry').html(entry);
        $('.github').append(div);
    }
}

function getActivityInfo(repo, created_at) {
    var project_link = getProjectLink(repo);
    var date_div = getDateDiv(created_at);

    var info_container = $('<div />').addClass('infocontainer').append(project_link).append(date_div);

    return info_container;
}

function getActivityAvatar(url) {
    return $('<a href="' + GITHUB_URL + USER_NAME + '" />').addClass('user').css('backgroundImage', 'url(' + url + ')');
}

function getActivityLink(type, payload, repo) {
    var link;
    switch (type) {
    case "PublicEvent":
        link = getOpenedSourcedLink(repo);
        break;
    case "PushEvent":
        link = getCommitLink(payload, repo);
        break;
    case "IssuesEvent":
        link = getIssueLink(payload);
        break;
    case "WatchEvent":
        link = getWatchLink(repo);
        break;
    case "CreateEvent":
        link = getCreateLink(payload, repo);
        break;
    case "PullRequestEvent":
        link = getPullRequestLink(payload);
        break;
    case "DeleteEvent":
        link = getDeleteEventLink(payload, repo);
        break;
    default:
    }

    return link;
}

function getCommitLink(payload, repo) {
    return $('<a href="' + GITHUB_URL + repo + '/commit/' + payload.commits[0].sha + '" />').addClass('event').html("Commit: " + payload.commits[0].message);
}

function getOpenedSourcedLink(repo) {
    return $('<a href="' + GITHUB_URL + repo + '" />').addClass('event').html("Open sourced repository.");
}

function getIssueLink(payload) {
    return $('<a href="' + payload.issue.html_url + '" />').addClass('event').html(payload.action[0].toUpperCase() + payload.action.slice(1) + " Issue: " + payload.issue.title + " - " + payload.issue.body);
}

function getWatchLink(repo) {
    return $('<a href="' + GITHUB_URL + repo + '" />').addClass('event').html("Started watching the above project.");
}

function getCreateLink(payload, repo) {
    var link;
    if (payload.ref_type === "repository") {
        link = $('<a href="' + GITHUB_URL + repo + '" />').addClass('event').html("New " + payload.ref_type + ": " + payload.description);
    } else {
        link = $('<a href="' + GITHUB_URL + repo + '/tree/' + payload.ref + '" />').addClass('event').html("New " + payload.ref_type + ": " + payload.ref);
    }
    return link;
}

function getPullRequestLink(payload) {
    return $('<a href="' + payload.pull_request.html_url + '" />').addClass('event').html("Pull request: " + payload.action);
}

function getDeleteEventLink(payload, repo) {
    return $('<a href="' + GITHUB_URL + repo + '" />').addClass('event').html("Deleted " + payload.ref_type + ": " + payload.ref);
}


function getDateDiv(created_at) {
    var time = getFormattedTimeStamp(created_at);
    var date_div = $('<div />').addClass('date').html(time);

    return date_div;
}

function getProjectLink(repo) {
    return $('<a href="' + GITHUB_URL + repo + '" />').addClass('repo').html(repo);
}

function getFormattedTimeStamp(created_at) {
    var time = new Date(created_at);
    time = dateFormat(time, DATE_FORMAT_STRING);

    return time;
}
