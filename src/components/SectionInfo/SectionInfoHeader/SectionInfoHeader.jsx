import React from 'react';

import {

  Link
 
} from "react-router-dom";


function SectionInfoHeader() {
  return (

  <nav className="section-info-header">
    <ul className="section-info-menu menu">
      <li className="section-info__item" ><Link className="section-info__item"  to="/Portfolio">ПОРТФОЛИО</Link></li>
      <li className="section-info__item" ><Link className="section-info__item" to="/Contact">КОНТАКТЫ</Link></li>
      <li className="section-info__item" ><Link className="section-info__item" to="/About">ОБО МНЕ</Link></li>
    </ul>
  </nav>
  
  );
}

export default SectionInfoHeader;
