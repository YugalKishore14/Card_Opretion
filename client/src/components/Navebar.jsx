import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navebar.css';

const Navebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to='/' onClick={closeMenu}>yugal Kishore</NavLink>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav className={isMenuOpen ? 'active' : ''}>
                        <ul>
                            <li><NavLink to='/' onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to='/aboutpage' onClick={closeMenu}>About</NavLink></li>
                            <li><NavLink to='/servicepage' onClick={closeMenu}>Service</NavLink></li>
                            <li><NavLink to='/contactpage' onClick={closeMenu}>Contact</NavLink></li>
                            <li><NavLink to='/registerpage' onClick={closeMenu}>Register</NavLink></li>
                            <li><NavLink to='/loginpage' onClick={closeMenu}>Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navebar;
