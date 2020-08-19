import React from 'react'
import  s from './Contact.module.css'
import {Link} from 'react-router-dom'



function Contact() {

  return (
  <div className={s.wrapper_grid}>
    <div className={s.wrapper_contact}>
      <div className={s.contact}>
        <div className={s.contact_main}>
         <div className={s.contact_main_text}> <Link to="/"  className={s.portfolio_main_text}>ГЛАВНАЯ </Link>{'>'}</div>
        </div>
        <div className={s.contact_info_first}>
          <div className={s.contact_info_firtst_title }>
              <div className={s.contact_info_text }>
                <div className={s.contact_info_text }>КОНТАКТЫ</div>
              </div>
          </div>
          <div className={s.contact_info_first_menu}>
              <div className={s.contact_info_first_menu__item}>
                  <p className={s.title}>ЛОКАЦИЯ</p>
                  <p className={s.title_sub}>Новосибирск</p>
              </div>
              <div className={s.contact_info_first_menu__item}>
                  <p className={s.title}>РАБОЧЕЕ ВРЕМЯ </p>
                  <p className={s.title_sub}>Каждый день</p>
              </div>
              <div className={s.contact_info_first_menu__item}>
                  <p className={s.title}>Контакты</p>
                  <p className={s.title_sub}>ivpas@icloud.com</p>
                  <p className={s.title_sub}>+7(996) 379-10-80</p>
              </div>
              <div className={s.contact_info_first_menu__item}>
                  <p className={s.title}>СОЦИАЛОЧКИ</p>
                  <p className={s.title_sub}>твиттер</p>
                  <p className={s.title_sub}>фейсбук</p>
                  <p className={s.title_sub}>телеграмм</p>
              </div>
          </div>
        </div>
        <div className={s.contact_info_second}>
            <p className={s.contact_info_second__text}>Хотите обсудить проект?<br/> Приглашаю вас на чашку <br/>кофе в любом месте в любое<br/> время дня. </p>
            <nav className={s.footer }>
              <ul className={s.contact_menu }>
                <li className={s.contact_menu__item} >ivpas@icloud.com</li>
                <li className={`${s.contact_menu__item} ${s.contact_menu__item__phone}`} >+7(996) 379-10-80</li>
                <li className={`${s.contact_menu__item} ${s.contact_menu__item__en} `} >EN</li>
              </ul>
            </nav>
        </div>
      </div>
  
    </div> 
  </div>
  );
}

export default Contact;
