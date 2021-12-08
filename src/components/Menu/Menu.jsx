import React from 'react';
import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Inicio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Proyectos</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonios</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </div>
    )
}
