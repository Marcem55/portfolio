import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const form = useRef();

    const [message, setMessage] = useState(false)
    const [emailData, setEmailData] = useState({
        from_name: '',
        message: ''
    });
    const [error, setError] = useState(false);

    const validateEmail = (email) => {
        const validatedEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(validatedEmail === null) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const handleChange = (e) => {
        if(e.target.name === 'from_name') {
            validateEmail(e.target.value)
        }
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
    }
    // console.log(emailData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(error) {
            toast.error('Ingresa un email válido por favor', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
              return
        }
        emailjs.sendForm('gmail', 'form-contacto', form.current, 'user_ckzu7zphjbdzkocnKsW8Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        setMessage(true);
        setEmailData({
            from_name: '',
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
                    {error ? <span className='danger'>Ingresa un email válido.</span> : null}
                    <textarea placeholder='Mensaje' value={emailData.message} name='message' onChange={handleChange}></textarea>
                    <button type='submit'>Enviar</button>
                    {message && <span>Gracias por contactarte conmigo!</span>}
                </form>
            <ToastContainer/>
            </div>
        </div>
    )
}
