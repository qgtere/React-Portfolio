import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <a href='https://github.com/qgtere' target='_blank' rel='noreferrer'><AiOutlineGithub className='footerIcons' fill='black' /></a>
            <a href='https://www.linkedin.com/in/teresita-quintero-378248217/' target='_blank' rel='noreferrer'><AiFillLinkedin className='footerIcons' fill='black' /></a>
            <a href='https://twitter.com/qg_tere' target='_blank' rel='noreferrer'><AiOutlineTwitter className='footerIcons' fill='black' /></a>
        </div>
    );
}

export default Footer;