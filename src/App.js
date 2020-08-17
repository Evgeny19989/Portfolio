import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route ,  Link} from 'react-router-dom';


import SectionSlider from './components/SectionSlider';
import SectionInfo from './components/SectionInfo';


function App() {
  return (
    <div className="App">
      <SectionInfo/>
      <SectionSlider/>
    </div>

  
  );
}

export default App;
