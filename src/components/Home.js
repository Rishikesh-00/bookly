import React, { useEffect } from 'react';
import Navbar from '../Navigation/Navbar';
import "../css/main.css";
import SectionOne from '../HomeComponents.js/SectionOne';
import SectionTwo from '../HomeComponents.js/SectionTwo';
import SectionThree from '../HomeComponents.js/SectionThree';
import SectionFour from '../HomeComponents.js/SectionFour';
import SectionFive from '../HomeComponents.js/SectionFive';
import Footer from '../HomeComponents.js/Footer';
import Add from '../HomeComponents.js/Advertisment';
import { useDispatch } from 'react-redux';
import { FetchProductAsync } from '../Features/Product/ProductSlice';

export default function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("working");
    dispatch(FetchProductAsync())
    dispatch(FetchProductAsync({ sort: {}, pagination: {} }));

  }, [dispatch]);
  
  // console.log("Home component rendered.");

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
  );
}
