import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineGlobal } from 'react-icons/ai';
import '../styles/Project.css';

const styles = {
    title: {
        fontSize: '1.3rem',
        fontWeight: 'bold'        
    },
};

function Projetc({ project }) {
    return (
        <div className='single-project'>
            <p style={styles.title}>{project.name}</p>
            <div className='container-effect'>
                <img src={project.image} alt='kitchen utensils' className='project-image' />
                <div className='overlay'>
                    <div><p className='description'>{project.description}</p></div>
                    <div className='depLink'><a href={project.urlDeployed} target='_blank' rel='noreferrer'><AiOutlineGlobal className='linkIcons' fill='var(--dark)' title='Deployed app' /></a></div>
                    <div className='gitLink'><a href={project.urlGit} target='_blank' rel='noreferrer'><AiOutlineGithub className='linkIcons' fill='var(--dark)' title='Git repo' /></a></div>                
                </div>
            </div>
        </div>
    );
}

export default Projetc;