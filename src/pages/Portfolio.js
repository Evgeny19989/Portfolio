import React from 'react'
import  s from './Portfolio.module.css'
import img1 from '../image/image01N.png'
import img2 from '../image/image02N.png'
import {Link} from 'react-router-dom'



function Portfolio() {

  return (

  <div className={s.wrapper_portfolio}>
    <div className={s.portfolio}>
      <div className={s.portfolio_main}>
          <p className={s.portfolio_main_text}> <Link to="/"  className={s.portfolio_main_text}>ГЛАВНАЯ {'>'} </Link></p>
      </div>
      <div className={`${s.portfolio_work} ${s.portfolio_work__first}`}>
        <p className={s.portfolio_work_period }> ПОРТФОЛИО 2018 - 2020</p>
        <div className={`${s.portfolio_work_photo} ${s.portfolio_work_photo__first}`}>
            <img alt="img"  src={img1}  /> 
          <p className={s.portfolio_work_photo_name}>Схема Новосибирского метрополитена </p>
        </div>
      </div>
      <div className={s.portfolio_work__second}>
        <p className={s.portfolio_sort}>СОРТИРОВКА ПО ДАТЕ  </p>
        <div className={` ${s.portfolio_work_photo} ${s.portfolio_work_photo__second} `}>
            <img  alt="img"  src={img2}/> 
          <p className={s.portfolio_work_photo_name}>Лендинг-пейдж для ЖК “Moelleux Apartments”</p>
        </div>
          <nav className={s.footer }>
            <ul className={s.portfolio_menu }>
              <li className={s.portfolio_menu__item} >ivpas@icloud.com</li>
              <li className={`${s.portfolio_menu__item} ${s.portfolio_menu__item__phone}`} >+7(996) 379-10-80</li>
              <li className={`${s.portfolio_menu__item} ${s.portfolio_menu__item__en} `} >EN</li>
            </ul>
          </nav>
      </div>
  </div>
 </div>


  );
}

export default Portfolio;
