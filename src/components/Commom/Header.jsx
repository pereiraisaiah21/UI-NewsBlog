import React, { useState } from 'react'

import { PiMagnifyingGlassLight } from "react-icons/pi";

const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const headerCategories = [
        {
            name: "Inicio",
            url: "#"
        },
        {
            name: "Eletrônica",
            url: "#"
        },
        {
            name: "Energia",
            url: "#"
        },
        {
            name: "Espaço",
            url: "#"
        },
        {
            name: "Informática",
            url: "#"
        },
        {
            name: "Materiais",
            url: "#"
        },
        {
            name: "Mecânica",
            url: "#"
        },
    ]

    return (
        <header className="Header">
            <div className="container">
                <div className="Header__content">
                    <div className="Header__top">
                        <div className="Header__logo">
                            Inovação tecnológica
                        </div>
                        <nav className="Header__nav">
                            <ul className="Header__nav-list">
                                <li className="Header__nav-item"><a href="/">Home</a></li>
                                <li className="Header__nav-item"><a href="/produtos">Produtos</a></li>
                                <li className="Header__nav-item"><a href="/carrinho">Carrinho</a></li>
                                <li className="Header__nav-item"><a href="/contato">Contato</a></li>
                            </ul>
                        </nav>
                        <div className="Header__search">
                            <input type="text" className="Header__search-input" placeholder="Buscar" />
                            <button className="Header__search-button">
                                <PiMagnifyingGlassLight />
                            </button>
                        </div>
                        <div className="Header__community">
                            <button className="Header__community-button">Junte-se à Comunidade</button>
                        </div>
                        <div className="Header__menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            ☰
                        </div>
                    </div>
                    <div className="Header__bottom">
                        <ul className="Header__categories">
                            {
                                headerCategories.map((item, index) => (
                                    <li key={index} className="Header__category">
                                        <a href={item.url}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="Header__content">
                </div>
            </div>
        </header>
    )
}

export default Header