import React from 'react';
import '../../styles/AboutMe.css';
import pictureDev from '../../images/devPhoto.jpeg';

import { motion } from "framer-motion";

const styles = {
    name: {
        color: 'var(--up)'        
    },
    size: {
        fontSize: '1.3rem'       
    },
    phrase: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '1.2rem'
    },
    centered: {
        textAlign: 'center'
    },
    description: {
        fontSize: '1rem',
        fontWeight: 'lighter'
    }
};

function AboutMe() {

    return (
        <div className='about-container'>
            
            <motion.h1
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    ease: [0.4, 0.6, 0.8, 1],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            >            
            <div className='picture-container'>
                <img src={pictureDev} className='picture' alt='developer' />
            </div>
            </motion.h1>
            
            <motion.h1
                animate={{ x: [ 50, 150, 50 ], opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    ease: [0.4, 0.6, 1, 1.3],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            >   
            <div className='about-text'>
                <p style={styles.centered}><span style={styles.size}>Hello I'm <span style={styles.name}>Tere Quintero</span></span></p>
                <p style={styles.description}>a computer systems engineer passionate about
                    application development to make our day-to-day life easier.</p>
                <p style={styles.phrase}>Always ready to collaborate and code.</p>
            </div>
            </motion.h1>
            
        </div>
    );
}

export default AboutMe;

