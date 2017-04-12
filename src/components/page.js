import React from 'react';
import Footer from './footer';

const Page = ({ children }) => {
  return (
    <div>
  		{ children }
      <Footer />
    </div>
  )
}

export default Page;
