import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef();

    const [message, setMessage] = useState(false)
    const [emailData, setEmailData] = useState({
        from_name: '',
        message: ''
    });

    const handleChange = (e) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
    }
    console.log(emailData);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'form-contacto', form.current, 'user_ckzu7zphjbdzkocnKsW8Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        setMessage(true);
        setEmailData({
            email: '',
            message: ''
        })
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/handshake.png" alt="handshake" />
            </div>
            <div className="right">
                <h2>Contacto</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' value={emailData.email} name='from_name' onChange={handleChange} />
                    <textarea placeholder='Mensaje' value={emailData.message} name='message' onChange={handleChange}></textarea>
                    <button type='submit'>Enviar</button>
                    {message && <span>Gracias por contactarte conmigo!</span>}
                </form>
            </div>
        </div>
    )
}
