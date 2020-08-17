import React from 'react';

import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';


function SectionSliderFooter() {
  return (
  <nav className="footer">
      <ul className="section-slider-menu menu">
        <li><a href="#" className="section-slider__item" >ivpas@icloud.com</a></li>
        <li><a href="#" className="section-slider__item" >+7(996) 379-10-80</a></li>
        <li><a href="#" className="section-slider__item" >EN</a></li>
      </ul>
  </nav>
  
  );
}

export default SectionSliderFooter;
