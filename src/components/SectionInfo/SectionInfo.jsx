import React from 'react';
import Menu from './Menu'

import SectionInfoHeader from './SectionInfoHeader/SectionInfoHeader';
import Title from './Title/Title';
import SectionInfoFooter from './SectionInfoFooter/SectionInfoFooter';
import './SectionInfo.css';

function SectionInfo() {
  return (
    
<section className="section_info">
  <div className="wrapper">
     <Menu/>
     <SectionInfoHeader/>
     <Title/>
     <SectionInfoFooter/>
  </div>
</section>
  
  );
}

export default SectionInfo;
