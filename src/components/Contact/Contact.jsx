import React, { useState } from 'react';
import './Contact.scss';

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/handshake.png" alt="handshake" />
            </div>
            <div className="right">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Mensaje'></textarea>
                    <button type='submit'>Enviar</button>
                    {message && <span>Gracias por contactarte conmigo!</span>}
                </form>
            </div>
        </div>
    )
}
