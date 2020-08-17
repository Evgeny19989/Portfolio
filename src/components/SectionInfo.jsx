import React from 'react';

import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';
import SectionInfoHeader from './SectionInfoHeader';
import Title from './Title';
import SectionInfoFooter from './SectionInfoFooter';


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
