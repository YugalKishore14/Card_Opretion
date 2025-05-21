import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navebar.css'

const Navebar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to='/'>yugal Kishore</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/aboutpage'>About</NavLink></li>
                            <li><NavLink to='/servicepage'>Service</NavLink></li>
                            <li><NavLink to='/contactpage'>Contact</NavLink></li>
                            <li><NavLink to='/registerpage'>Register</NavLink></li>
                            <li><NavLink to='/loginpage'>Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navebar
