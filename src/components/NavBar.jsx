import "./NavBar.css";

import { Link, NavLink} from "react-router-dom"; 

import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav>
            {/* <Link to="/">Inicio</Link>
            <Link to="/about">Sobre</Link> */}

            <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}>Inicio</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    </div>
  )
}

export default NavBar