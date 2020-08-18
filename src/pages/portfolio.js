import React, { Component } from 'react'
import './Portfolio.css'
import Footer from '../components/SectionSlider/SectionSliderFooter/Footer'
import img1 from '../image/image01N.png'
import img2 from '../image/image02N.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper-portfolio">
      <div className="portfolio">
        <div className="portfolio-main">
    <p className="portfolio-main-text"> ГЛАВНАЯ {'>'}</p>
        </div>
        <div className="portfolio-work portfolio-work--first">
          <p className="portfolio-work-period "> ПОРТФОЛИО 2018 - 2020</p>
          <div className="portfolio-work-photo portfolio-work-photo--first ">
              <img alt="img"  src={img1}  /> 
            <p className="portfolio-work-photo-name">Схема Новосибирского метрополитена </p>
          </div>
        </div>
        <div className="portfolio-work portfolio-work--second">
          <p className="portfolio-sort">СОРТИРОВКА ПО ДАТЕ  </p>
          <div className="portfolio-work-photo portfolio-work-photo--second  ">
              <img  alt="img"  src={img2}/> 
            <p className="portfolio-work-photo-name">Лендинг-пейдж для ЖК “Moelleux Apartments”</p>
          </div>
          <Footer/>
        </div>
    </div>
  </div> 
    )
  }
}
