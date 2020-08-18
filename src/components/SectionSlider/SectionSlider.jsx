import React, {Component} from 'react';
import CarouselBox from './Sliders/CarouselBox'
import Footer from './SectionSliderFooter/Footer'

import './SectionSlider.css';


export default class SectionSlider  extends Component{
  render(){
    return(
    <section className="section-slider">
      <CarouselBox/>
      <Footer/>
    </section>
    );
  }
}
