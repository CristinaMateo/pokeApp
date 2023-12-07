import React from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul className="nav-bar">
            <li><Link className={'link'} to='/'>Home</Link></li>
            <li><Link className={'link'} to='/search'>Search</Link></li>
        </ul >
    </nav >
)
};

export default Nav;