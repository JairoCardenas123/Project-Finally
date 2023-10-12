import React from 'react';
import Nav from './componete/nav';
import Pagina from './componete/pagina';
import Create from './componete/create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/create" Component={Create} />
        </Routes>
        <div>
          <Pagina></Pagina>
        </div>
      </div>
    </Router>
  );
}

export default App;
