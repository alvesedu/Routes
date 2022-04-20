import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function Header() {
  return (
    <div className="container">
      <div className="menu" >
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/empresa">Empresa</Link>
        <Link className="link" to="/sobre">Sobre</Link>
        <Link className="link" to="/contato">Contato</Link>       
      </div>
    </div>
  );
}

export default Header;