import React from 'react';
import logo from '../../assets/logo-1051953_960_720.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/" ><img className="logo" src={logo} alt="zoo logo" /></a>


        </div>
    )
}

export default Navbar;