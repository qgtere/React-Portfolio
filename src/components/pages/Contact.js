import React, { useState } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'contact-name') {
            setName(inputValue);
        } else if (inputName === 'contact-email') {
            setEmail(inputValue);
        } else if (inputName === 'contact-message') {
            setMessage(inputValue);
        }
    };

    const handleFocus = (e) => {
        const { target } = e;

        if (target.name === 'contact-email') {
            if (!target.value) {
                target.style.background = 'var(--shadow)';
                target.placeholder = 'psst psst...';
                setErrorMessage('Email is required');
            } else if ( !validateEmail(email) ) {
                target.style.background = 'var(--shadow)';
                target.placeholder = '';
                setErrorMessage('Email is not valid');
            } else {
                target.style.background = 'white';
                target.placeholder = '';
                setErrorMessage('');
            }
        } else {
            if (!target.value) {
                target.style.background = 'var(--shadow)';
                target.placeholder = 'psst psst...';
                setErrorMessage(`${target.name === `contact-name` ? `Name` : `Message` } is required`);
            } else {
                target.style.background = 'white';
                target.placeholder = '';
                setErrorMessage('');
            }    
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || (!email || !validateEmail(email)) || (!message)) {
            setErrorMessage('Please, check your inputs!');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    };

    return (       
        <div className='contact-container'>
            <div className='myInfo'>
            <details>
                <summary>My info</summary>
                <p>Email: qg.tere@gmail.com</p>
                <p>Phone: 624 100 1395</p>
            </details>
            </div>
            
            <form id='contact-form' className='contact-form'>
                <div className='divNameEmail'>
                    <div className='divLblInput'>
                        <label htmlFor='contact-name'>Name:</label>
                        <input name='contact-name' type='text' onChange={handleChange} onBlur={handleFocus} value={name} className='formInput' placeholder='Your name' />
                    </div>

                    <div className='divLblInput'>
                        <label htmlFor='contact-email'>Email address:</label>
                        <input name='contact-email' type='email' onChange={handleChange} onBlur={handleFocus} value={email} className='formInput' placeholder='Your email' />
                    </div>
                </div>

                <div className='divLblInput'>
                    <label htmlFor='contact-message'>Message:</label>
                    <textarea name='contact-message' onChange={handleChange} onBlur={handleFocus} value={message} className='formInput formArea' placeholder='Your message' />
                </div>

                <div className='divButton'>
                    <button type='button' onClick={handleFormSubmit} className='btnSubmit'>Submit</button>
                </div>
            </form>

            {errorMessage && (
                <div>
                    <p className='errorMsg'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;