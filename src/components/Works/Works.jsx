import React, { useState } from 'react';
import { projects } from '../../data';
import './Works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === 'left' 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
        : setCurrentSlide(currentSlide < projects.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <div className='works' id='works'>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {projects.map(p => (
                    <div key={p.id} className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={p.icon} alt={p.title} />
                                    </div>
                                    <h2>{p.title}</h2>
                                    <p>{p.description}</p>
                                    <a href={p.link} target='_blank' rel='noreferrer noopener'>
                                        <span>Abrir proyecto</span>
                                    </a>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={p.img} alt={p.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img className='arrow left' src="assets/icons8-chevron-left-50.png" alt="left arrow" onClick={() => handleClick('left')}/>
            <img className='arrow right' src="assets/icons8-chevron-right-50.png" alt="right arrow" onClick={() => handleClick('right')}/>
        </div>
    )
}
