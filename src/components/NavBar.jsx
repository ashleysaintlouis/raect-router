import "./NavBar.css";

import { Link } from "react-router-dom"; 

import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre</Link>
       </nav>
    </div>
  )
}

export default NavBar