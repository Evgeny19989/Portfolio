import React, { Component } from 'react'
import s from  './About.module.css'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
     <div className={s.wrapper}>
       <div className={s.about}>
         <div className={s.about_home}>
           <div className={s.about_main_text}> <Link to="/"  className={s.about_main_text}>ГЛАВНАЯ  {'>'}</Link></div>
         </div>
         <div className={s.about_content}>
          <span className={s.about_category}>ОБО МНЕ</span>
          <div className={s.wrapper_text}>
              <p>Моя страсть - искусство.<br/> Искусство заставлять посетителей вашего сайта <br/>  покупать ваш товар или      пользоваться вашими <br/>  услугами.</p>
              <p> Но пока что я только начинаю своё путешествие в <br/>  мир коммерческих заказов, в связи с чем у меня к <br/>     вам   предложение: Вы заказываете у меня сайт, я его<br/>  делаю дёшево и круто.<br/>  Вам - хороший сайт, МНЕ -    хорошая  работа в <br/> портфолио. </p>
              <p>Интересно? Свяжитесь со мной любым удобным <br/> способом для уточнения деталей заказа.</p>
            </div>
         </div>
         <div className={s.about_footer}>
            <nav className={s.about_footer_nav}>
              <ul className={s.menu }>
                <li className={s.about_menu__item} >ivpas@icloud.com</li>
                <li className={`${s.about_menu__item} ${s.about_menu__item__phone}`} >+7(996) 379-10-80</li>
                <li className={`${s.about_menu__item} ${s.about_menu__item__en} `} >EN</li>
              </ul>
            </nav>
         </div>
       </div>
     </div>
    )
  }
}
