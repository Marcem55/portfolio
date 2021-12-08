import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped'


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Full Stack Developer']
        })
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className="right">
                <div className="wrapper">
                    <h2>Hola! Mi nombre es</h2>
                    <h1>Marcelo Malacalza</h1>
                    <h3>Soy: <span ref={textRef}></span></h3>
                </div>
                <a href="#testimonials">
                    <KeyboardArrowDownIcon className='icon' />
                </a>
            </div>
            <div className="left">
                <div className="imgContainer"></div>
            </div>
        </div>
    )
}
