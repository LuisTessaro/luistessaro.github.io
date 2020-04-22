/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import './style.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState('')
    function displayMenu() {
        if (menuOpen === '')
            setMenuOpen('open')
        else
            setMenuOpen('')
    }


    return (
        <div className="navbar-sticky">
            <div className="navbar">
                <div className="container">
                    <h1>Luís Tessaro</h1>
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#portifolio">Portifolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="fas fa-bars" />
                </div>


            </div>
            <div className={"hamb-menu " + menuOpen}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#portifolio">Portifolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Header