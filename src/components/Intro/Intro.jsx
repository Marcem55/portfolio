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
            strings: ['JavaScript', 'HTML', 'CSS', 'React', 'Redux', 'NodeJS', 'Express', 'PostgreSQL', 'Sequelize']
        })
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/realMe2.png" alt="profile photo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Marcelo Malacalza</h1>
                    <h3>Dev Skills: <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon className='icon' />
                </a>
            </div>
        </div>
    )
}
