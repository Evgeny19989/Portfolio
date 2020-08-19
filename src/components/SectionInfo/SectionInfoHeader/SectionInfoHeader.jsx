import React from 'react';

import {

  Link
 
} from "react-router-dom";


function SectionInfoHeader() {
  return (

  <nav className="section_info_header">
    <ul className="section_info_menu menu">
      <li className="section_info__item" ><Link className="section_info__item"  to="/Portfolio">ПОРТФОЛИО</Link></li>
      <li className="section_info__item" ><Link className="section_info__item" to="/Contact">КОНТАКТЫ</Link></li>
      <li className="section_info__item" ><Link className="section_info__item" to="/About">ОБО МНЕ</Link></li>
    </ul>
  </nav>
  
  );
}

export default SectionInfoHeader;
