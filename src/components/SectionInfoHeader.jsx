import React from 'react';

import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';


function SectionInfoHeader() {
  return (
    
  <nav className="section-info-header">
    <ul className="section-info-menu menu">
      <li className="section-info__item" ><a href="#">ПОРТФОЛИО</a></li>
      <li className="section-info__item" ><a href="#">КОНТАКТЫ</a></li>
      <li className="section-info__item" ><a href="#">ОБО МНЕ</a></li>
    </ul>
  </nav>
  
  );
}

export default SectionInfoHeader;
