import React, {Component} from 'react';
import CarouselBox from './Sliders/CarouselBox'
import SectionSliderFooter from './SectionSliderFooter/SectionSliderFooter'

import './SectionSlider.css';


export default class SectionSlider  extends Component{
  render(){
    return(
    <section className="section-slider">
      <CarouselBox/>
      <SectionSliderFooter/>
    </section>
    );
  }
}
