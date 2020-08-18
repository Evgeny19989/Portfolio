import React from 'react';
import './App.css';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import SectionSlider from '../components/SectionSlider/SectionSlider';








function Home(props) {

  return (
    <div className="Home">
      <SectionInfo/>
      <SectionSlider/>
    </div>
 
  
  );
}

export default Home;
