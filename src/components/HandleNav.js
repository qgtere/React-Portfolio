import React, { useState } from 'react';
import '../styles/Content.css';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function HandleNav() {

    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    return (
        <>
            <Navigation currentPage={currentPage} handlePageChange={(page) => setCurrentPage(page)} />
            <div className='content-container'>
                {renderPage()}
            </div>
        </>
    );
}

export default HandleNav;