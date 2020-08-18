import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';



function App(props) {

  return (
    <Router>
      <div className="App">
        <Route path="/"  exact component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
      </div>
    </Router>
  
  );
}

export default App;
