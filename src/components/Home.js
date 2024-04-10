import React from 'react';
import Navbar from '../Navigation/Navbar';
import "../css/main.css";
import SectionOne from '../HomeComponents.js/SectionOne';
import SectionTwo from '../HomeComponents.js/SectionTwo';
import SectionThree from '../HomeComponents.js/SectionThree';
import SectionFour from '../HomeComponents.js/SectionFour';
import SectionFive from '../HomeComponents.js/SectionFive';
import Footer from '../HomeComponents.js/Footer';
import Add from '../HomeComponents.js/Advertisment';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <SectionOne/>
      <Add/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  )
}
