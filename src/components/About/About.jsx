import React from 'react';
import './About.scss';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='aboutContainer'>
                <h1>Sobre mí</h1>
                <img src="assets/fotoCvSinBg.png" alt="mi foto" />
                <p>Soy de San Nicolás de los Arroyos, Buenos Aires y hace 2 años que la tecnología empezó a tener mayor importancia en mi vida. Comencé con un curso de Marketing Digital y Analítica Web en Neetwork Business School, seguido de uno referido al Desarrollo Web, el cual me inspiró a interiorizarme más en lo que es la programación. Así, entre cursos de Udemy y Youtube, encontré Henry, un bootcamp intensivo de 5 meses en donde me formé como Desarrollador Full Stack.</p>
            </div>
        </div>
    )
}
