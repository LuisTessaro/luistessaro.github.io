/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import './style.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState('')
    const [active, setActive] = useState(0)

    return (
        <div className="sticky top-0" style={{ zIndex: 1000 }}>
            <div className="navbar">
                <div className="container flex content-center items-center justify-between p-4">
                    <h1 className="text-white font-bold text-2xl">Luís Tessaro</h1>
                    <ul className="flex items-center justify-center hidden lg:flex">
                        <li className={`mr-4 text-white ${active === 0 ? "active" : ""}`} onClick={() => setActive(0)}><a href="#">Home</a></li>
                        <li className={`mr-4 text-white ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}><a href="#about">About</a></li>
                        <li className={`mr-4 text-white ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}><a href="#portifolio">Portifolio</a></li>
                        <li className={`text-white ${active === 3 ? "active" : ""}`} onClick={() => setActive(3)}><a href="#contact">Contact</a></li>
                    </ul>
                    <i onClick={() => setMenuOpen(' open')} className="fas fa-bars text-white block cursor-pointer" />
                </div>
            </div>

            <div className={"clicable-bg" + menuOpen} onClick={() => setMenuOpen('')} />
            <div className={"hamb-menu fixed top-0 right-0 bg-white shadow-xs h-screen" + menuOpen} style={{ zIndex: 2000 }}>
                <ul className="flex flex-col justify-center items-center">
                    <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom" onClick={() => setMenuOpen('')} ><i className="fas fa-times" /></a>

                    <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom"
                        onClick={() => {
                            setMenuOpen('')
                            setActive(0)
                        }}
                        href="#">Home</a>

                    <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom"
                        onClick={() => {
                            setMenuOpen('')
                            setActive(1)
                        }}
                        href="#about">About</a>

                    <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom"
                        onClick={() => {
                            setMenuOpen('')
                            setActive(2)
                        }}
                        href="#portifolio">
                        Portifolio</a>

                    <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom"
                        onClick={() => {
                            setMenuOpen('')
                            setActive(3)
                        }}
                        href="#contact">Contact</a>
                </ul>
            </div>
        </div>

    )
}

export default Header