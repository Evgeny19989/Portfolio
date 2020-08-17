import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import img1 from '../../../image/image01.png'
import img2 from '../../../image/image02.jpg'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'


export default class CarouselBox extends Component{
  render(){
    return(
    <Carousel>
      <Carousel.Item>
        <div className="img1">
          <div className="wrapper-slider-item">
            <img className="d-block w-100" alt="img"  src={img1}/>
          </div>
        </div>  
      </Carousel.Item> 
      <Carousel.Item>
        <div className="img2" >
         <div className="wrapper-slider-item">
           <img className="d-block w-100" alt="img"  src={img2}/>
           </div>
        </div>
     
      </Carousel.Item>
      <Carousel.Item>
        <div className="img3">
          <div className="wrapper-slider-item">
            <img className="d-block w-100" alt="img" src={img1}/>
            </div>
        </div> 
      </Carousel.Item>
    </Carousel>
    );
  }
}