import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'font-awesome/css/font-awesome.css'
import Page from './page';
import Section from './section';
import ContactForm from './contact-form';

export default class Home extends Component {
  render() {
    return (
      <Page>
        <header>
          <h2></h2>
          <nav>
            <li><a href='#background'>Background</a></li>
            <li><a href='#resume'>Resume</a></li>
          </nav>
        </header>
        <Section styles='hero'>
          <div className='background-image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/river.jpg)`}}></div>
          <div><Avatar src={`${process.env.PUBLIC_URL}/img/jason.jpg`} size={200} round={true} /></div>
          <h1>Jason Cochran</h1>
          <h3>18 Year Veteran Web/Mobile Apps Developer</h3>
          <div style={{ marginBottom: '30px' }}>
            <a href='https://twitter.com/app_jitsu' className='btn-icon' target='_blank'><i className='fa fa-twitter-square'></i></a>
      			<a href='https://github.com/appjitsu' className='btn-icon' target='_blank'><i className='fa fa-github-square'></i></a>
          </div>
          <a href='#hire-me' className='btn'>Hire Me!</a>
        </Section>

        <ScrollableAnchor id={'background'}>
          <Section styles='our-work'>
            <h3 className='title'>My Background</h3>
            <p>I am a front-end or full-stack web and mobile app developer with 18 total years of experience. I am also a family man and devoted husband of 17 years, small business owner and blue belt in Brazilian JiuJitsu.</p>
            <p>I am very detail oriented. You can easily contact me at any hour of the day. I work very, very hard. I know how to deliver on time and on budget. I have business savvy. I work well with remote teams.</p>
            <p>Over my 18 year career I have built quite a few web apps including an online air/car/hotel travel system, a real estate MLS app, assisted with a large oil/gas ERP system for a software company, was the lead developer on another large ERP for an oil/gas services company, helped build a college testing platform, and recently I was the lead developer on a complex lead tracking CRM/ERP, etc.</p>
            <p>I am currently working on two React-Native mobile apps for different clients. The first app is an oil/gas safety auditing tool. Photos taken within the app are uploaded to Amazon S3. The second app is a social crowdfunded donations app for charities.</p>
            <p>I also have experience with normal react, redux, meteor, firebase, node, php, rails, backbone, c# .net, etc. I look forward to learning more about your project.</p>
            <p>I look forward to hearing more about your project. Thank you for your time.</p>
          </Section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'resume'}>
          <Section styles='resume'>
            <h3 className='title'>My Resume</h3>
            <div className='resume'>
              <div className='experience'>
                <h2>Experience</h2>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>Self-Employed</strong>
                    <em className='title'>Freelance Web & Mobile App Developer</em>
                  </h3>
                  <h4>February 2015 - Present</h4>
                  <p>I develop custom web and mobile solutions for my clients needs. Technologies include ES6, Meteor, React, React-Native, Redux, Firebase, MongoDB, Node, Express, etc.</p>
                </section>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>Key Energy Services</strong>
                    <em className='title'>Web & Mobile App Developer</em>
                  </h3>
                  <h4>May 2012 - April 2015</h4>
                  <p>Developed large scale ERP management solutions for web and mobile using Ruby/Rails, ES6, Node, Meteor, Backbone.js and Cordova.</p>
                </section>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>Warren Equipment Company</strong>
                    <em className='title'>Web Developer</em>
                  </h3>
                  <h4>February 2011 - February 2012</h4>
                  <p>Internal website development for Warren Equipment and other corporate properties.</p>
                </section>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>Enertia Software</strong>
                    <em className='title'>Web Developer</em>
                  </h3>
                  <h4>November 2007 - February 2011</h4>
                  <p>ASP.NET (VB.NET) and SQL Server web developer for an oil and gas ERP software company.</p>
                </section>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>Self-Employed</strong>
                    <em className='title'>Web Application Developer & Consultant</em>
                  </h3>
                  <h4>January 2000 - November 2007</h4>
                  <p>Self-Employed web application developer/consultant. Designed and developed custom websites and web applications for my clients.</p>
                </section>

                <section className='info-section'>
                  <h3>
                    <strong className='company'>OneTravel.com</strong>
                    <em className='title'>Web Developer</em>
                  </h3>
                  <h4>January 1999 - January 2000</h4>
                  <p>Developed online Air/Car/Hotel booking website and management tools using ColdFusion and SQL Server.</p>
                </section>

              </div>
            </div>
          </Section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'hire-me'}>
          <Section styles='contact'>
        		<h3 className='title'>Let's work together!</h3>
        		<ContactForm />
        	</Section>
        </ScrollableAnchor>
      </Page>
    )
  }
}
