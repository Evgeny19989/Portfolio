import React from 'react';

import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';
import Slider from './Slider'
import SectionSliderFooter from './SectionSliderFooter'

function SectionSlider() {
  return (
    
<section className="section-slider">
  <Slider/>
  <SectionSliderFooter/>
</section>
  
  );
}

export default SectionSlider;
