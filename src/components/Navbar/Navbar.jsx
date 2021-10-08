import React from 'react';
import './Navbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'navbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>genius.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+54 9 3364198864</span>
                        <Mail className='icon'/>
                        <span>MalacalzaMarcelo@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
