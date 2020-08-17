import React from 'react';

import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';


function SectionInfoFooter() {
  return (
    
  <div className="section-info-footer">
      <ul className="section-info-menu menu">
        <li className="section-info__item" ><a href="#">телеграм</a></li>
        <li className="section-info__item" ><a href="#">твиттер</a></li>
        <li className="section-info__item" ><a href="#">фейсбук</a></li>
      </ul>
  </div>
  
  );
}

export default SectionInfoFooter;
