import React from 'react';


import SectionInfoHeader from './SectionInfoHeader/SectionInfoHeader';
import Title from './Title/Title';
import SectionInfoFooter from './SectionInfoFooter/SectionInfoFooter';
import './SectionInfo.css';

function SectionInfo() {
  return (
    
<section className="section-info">
  <div className="wrapper">
     <SectionInfoHeader/>
     <Title/>
     <SectionInfoFooter/>
  </div>
</section>
  
  );
}

export default SectionInfo;
