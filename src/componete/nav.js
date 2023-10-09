import React from 'react';
import logo from '../componete/KARIO_LOGO.png'
import bug from '../Img/bug.png'
import reload from '../Img/relaod.png'
import trash from '../Img/trash.png'
import ayuda from '../Img/ayuda.png'
import agregar from '../Img/agregar.png'
import settings from '../Img/settings.png'
import campanita from '../Img/campanita.png'
import Foto from '../Img/Pedro.jpeg'
import './nav.css'; 

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="links">

        <div className='logos' >
        <img className='logoss' src={agregar} ></img>
          <a to="/" className="link">Añadir</a>
        </div>

        <div className='logos' >
          <img className='logoss' src={reload} ></img>
          <a to="/page2" className="link">Refrescar</a>
        </div>

        <div className='logos' >
          <img className='logoss' src={trash} ></img>
          <a to="/page3" className="link">Eliminar</a>
        </div>

        <div className='logos' >
        <img className='logo'  src={logo} ></img>
        </div>
 
        <div className='logos'>
          <img className='logoss' src={bug} ></img>
          <a to="/page4" className="link">Reportar</a>
        </div>

        <div className='logos' >
        <img className='logoss' src={ayuda} ></img>
          <a to="/page5" className="link">Ayuda</a>
        </div>

        <div className='settingsContenedor' >
        <img className='settings' src={settings} ></img>
        <img className='settingss' src={campanita} ></img>
        <img className='logoFoto' src={Foto} ></img>
      </div>

      </div>
    </nav>
  );
};

export default Navigation;
