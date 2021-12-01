import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="shark-logo" src="/logo192.png" alt="Logo"></img>
                <span className="title">CheapShark</span>
            </div>
            <nav className="nav-bar"> 
                <ul className="menu">
                    <li><NavLink exact to='/'>Deals</NavLink></li>
                    <li><NavLink exact to='/games'>Games</NavLink></li>
                    <li><NavLink exact to='/stores'>Stores</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar;