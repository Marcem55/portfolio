import React from 'react';
import './About.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='aboutContainer'>
                <h1>Sobre mí</h1>
                <img src="assets/fotoCvSinBg.png" alt="mi foto" />
                <p>Soy de San Nicolás de los Arroyos, Buenos Aires y hace 2 años que la tecnología empezó a tener mayor importancia en mi vida. Comencé con un curso de Marketing Digital y Analítica Web en Neetwork Business School, seguido de otro referido al Desarrollo Web, el cual me inspiró a interiorizarme más en lo que es la programación. Así, entre cursos de Udemy y Youtube, encontré Henry, un bootcamp intensivo de 5 meses en donde me formé como Desarrollador Full Stack.</p>
                <div className='iconsContainer'>
                    <a href="https://www.linkedin.com/in/marcelo-malacalza/" target='_blank' rel='noreferrer'>
                        <LinkedInIcon className='icon linkedin' />
                    </a>
                    <a href="https://github.com/Marcem55" target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon' />
                    </a>
                    <a href="assets/CV_MarceloMalacalza.pdf" download target='_blank' rel='noreferrer'>
                        <ContactPageIcon className='icon' />
                    </a>
				</div>
            </div>
        </div>
    )
}
