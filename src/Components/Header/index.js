/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './style.scss'

const SideButton = ({ setAndClose, i, href, children }) => {
    return (
        <a className="hover:bg-main font-bold p-2 w-full text-center cursor-pointer hover:text-white border-bottom" onClick={() => setAndClose(i)} href={href}>
            {children}
        </a>
    )
}

const Header = () => {
    const [menuOpen, setMenuOpen] = useState('')
    const [active, setActive] = useState(0)

    const setAndClose = (i) => {
        setMenuOpen('')
        i && setActive(i)
    }

    return (
        <div className="sticky top-0" style={{ zIndex: 1000 }}>
            <div className="navbar">
                <div className="container flex content-center items-center justify-between p-4">
                    <h1 className="text-white font-bold text-2xl">Luís Tessaro</h1>
                    <ul className="flex items-center justify-center hidden lg:flex">
                        <li><a className={`mr-4 ${active === 0 ? "active" : ""}`} onClick={() => setActive(0)} href="#">Home</a></li>
                        <li><a className={`mr-4 ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)} href="#about">About</a></li>
                        <li><a className={`mr-4 ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)} href="#portfolio">Portfolio</a></li>
                        <li><a className={`${active === 3 ? "active" : ""}`} onClick={() => setActive(3)} href="#contact">Contact</a></li>
                    </ul>
                    <i onClick={() => setMenuOpen(' open')} className="fas fa-bars text-white block cursor-pointer" />
                </div>
            </div>

            <div className={"clicable-bg" + menuOpen} onClick={() => setMenuOpen('')} />
            <div className={"hamb-menu fixed top-0 right-0 bg-white shadow-xs h-screen" + menuOpen} style={{ zIndex: 2000 }}>
                <ul className="flex flex-col justify-center items-center">
                    <SideButton setAndClose={setAndClose} ><i className="fas fa-times" /></SideButton>
                    <SideButton setAndClose={setAndClose} i={0} href="#">Home</SideButton>
                    <SideButton setAndClose={setAndClose} i={1} href="#about">About</SideButton>
                    <SideButton setAndClose={setAndClose} i={2} href="#portfolio">Portfolio</SideButton>
                    <SideButton setAndClose={setAndClose} i={3} href="#contact">Contact</SideButton>
                </ul>
            </div>
        </div>

    )
}

export default Header