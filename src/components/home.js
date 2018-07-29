import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'font-awesome/css/font-awesome.css'
import Header from './header';
import Page from './page';
import Section from './section';
import ContactForm from './contact-form';

import logo from '../../public/img/leftandright.gif';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Page>

          <ScrollableAnchor id={'top'}>
            <Section styles='hero'>
              <div className='background-image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/lake.jpg)`}}></div>
              <div><Avatar src={`${process.env.PUBLIC_URL}/img/will.jpeg`} size={200} round={true} /></div>
              <h1>Will Xiong</h1>
              <h3>UBC Electrical Engineering Graduate</h3>
              <h3 style={{ maxWidth: 500 }}>I am experienced in Industrial Automation, Consulting, SQL, Business Intelligence and many others.</h3>
              <div style={{ marginBottom: '30px' }}>
                <a href='https://www.linkedin.com/in/wei-xiong/' className='btn-icon' target='_blank'><i className='fa fa-linkedin-square'></i></a>
                <a href='https://www.instagram.com/iftheresaweitheresawill/' className='btn-icon' target='_blank'><i className='fa fa-instagram'></i></a>
          			<a href='https://github.com/willBear' className='btn-icon' target='_blank'><i className='fa fa-github-square'></i></a>
              </div>
              <a href='#hire-me' className='btn'>Hire Me!</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'projects'}>
            <Section styles='our-work'>
              <h3 className='title'>Most Recent Project</h3>
              <h3 className='projectName'>UBC Alma Mater Society Wind Turbine </h3>
              <p>I recently took part in designing a wind power harvesting and visualisation system. This project is set to be built on the roof top of the Student Union Building (Nest) at The University of British Columbia, showcasing the feasibility of wind powered renewable energy to the student body.</p>
              <p><a href="https://youtu.be/v6UEGVcCdLI" target = "_blank"><img src = {logo} /></a></p>
              <a href='#top'>^ Back to Top</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'background'}>
            <Section styles='our-work'>
              <h3 className='title'>My Background</h3>
              <p>I am a recent electrical engineering graduate at the The University of British Columbia. I have extensive experience in industrial automation, consulting and business intelligence. I am also passionate about technology and self improvement.</p>
              <p>Over the course of my internships and university, I have designed and built numerous hardware and software projects and developed a good understanding of software design concepts. My most noted project is still being used in the 10th largest sawmill in North America, and its showcased on the companies website. I believe the combination of my skills in both design and programming will be a great asset for my future workplace. </p>

              <p>I also have experience with React, AutoCAD Electrical, Rockwell Studios, Photoshop, VHDL, Verilog, etc.</p>
              <p>I look forward to hearing more about your company. Thank you for your time.</p>
              <a href='#top'>^ Back to Top</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'resume'}>
            <Section styles='resume'>
              <h3 className='title'>My Resume</h3>
              <div className='resume'>
                <div className='experience'>

                  <h2>Employment</h2>

                  <section className='info-section'>
                    <h3>
                      <strong className='company'>Confirmed Automation Systems Inc</strong>
                      <em className='title'>Controls and Equipment Design Support</em>
                    </h3>
                    <h4>January 2016 - August 2016</h4>
                    <p>Tested and edited Beckhoff and Allen Bradley Programmable Logic Controllers (PLC) for the Vancouver shoring terminals and one of the largest mushroom manufacturers in the United States</p>
                    <p>Edited the house Human-Machine Interface (HMI) linked to Beckhoff PLC, and T-SQL database in structured code and SQL stored procedures.</p>
                    <p>Designed and built control panels using AutoCad Electrical according to industry standards</p>
                    <p>Automated data pulling and test processes with SQL stored procedures and task scheduler</p>
                    <p>Communicated with plant supervisors and machine operators to improve the end-user experience and edited existing PLC, HMI and SQL to their requests</p>
                  </section>

                  <section className='info-section'>
                    <h3>
                      <strong className='company'>Tolko Industries</strong>
                      <em className='title'>Control Systems Student</em>
                    </h3>
                    <h4>May 2015 - Dec 2015</h4>
                    <p>Designed HMI’s with Factory Talk View on various processes within the lumber mill, replacing the outdated HMIs at the workplace, increasing throughput of machines by 10% </p>
                    <p>Programmed, configured, and commissioned various accessories of Allen Bradley Suite PLC’s including but not limited to remote I/O, Analog I/O, Digital I/O, VFD and Photo Eyes</p>
                    <p>Automated various patterned tasks in ladder logic by communicating with both machine operators and management, saved start up time of interlocked machines by 40% </p>
                    <p>Coordinated with plant electricians and millwrights to perform maintenance on existing machines as well as commissioning of new equipment</p>
                  </section>

                  <h2>Projects</h2>

                </div>
              </div>
              <a href='#top'>^ Back to Top</a>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'hire-me'}>
            <Section styles='contact'>
          		<h3 className='title'>Lets work together!</h3>
          		<ContactForm />
              <p></p>
              <a href='#top'>^ Back to Top</a>
          	</Section>
          </ScrollableAnchor>
        </Page>
      </div>
    )
  }
}
