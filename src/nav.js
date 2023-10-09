import React from 'react';
import logo from './KARIO_LOGO.png'
import { Link } from 'react-router-dom'; 
import './nav.css'; 

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="links">
        <a to="/" className="link">Link 1</a>
        <a to="/page2" className="link">Link 2</a>
        <a to="/page3" className="link">Link 3</a>
        <img className='logo'  src={logo} ></img>
        <a to="/page4" className="link">Link 4</a>
        <a to="/page5" className="link">Link 5</a>
      </div>
    </nav>
  );
};

export default Navigation;
