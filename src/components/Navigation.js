import React from 'react';
import '../styles/Navigation.css';
import {AiOutlineMenu}  from 'react-icons/ai';
import {IoCloseSharp}  from 'react-icons/ai';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='nav-container'>
            <ul className='ulNavigate' data-animation="bonus">
                <li className='liNavigate'>
                    <a 
                        href='#AboutMe'
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'activePage' : 'noActivePage'}
                    >
                        About Me
                    </a>
                </li>
                <li className='liNavigate'>
                    <a 
                        href='#Portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'activePage' : 'noActivePage'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className='liNavigate'>
                    <a 
                        href='#Contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'activePage' : 'noActivePage'}
                    >
                        Contact
                    </a>
                </li>
                <li className='liNavigate'>
                    <a 
                        href='#Resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'activePage' : 'noActivePage'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;