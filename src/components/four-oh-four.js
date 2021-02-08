import React from 'react';
import Page from './page';
import Section from './section';

const FourOhFour = () => {
  return (
    <Page>
      <Section styles='hero'>
        <div className='background-image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/river.jpg)`}}></div>
        <h1>Whoops!</h1>
        <h3>This page does not exist...</h3>
        <a href={`${process.env.PUBLIC_URL}/`} className='btn'>Home</a>
      </Section>
    </Page>
  )
}

export default FourOhFour;
