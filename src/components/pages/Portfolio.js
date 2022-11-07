import React from 'react';
import Project from '../Project';
import '../../styles/Project.css';
import cookedImg from '../../images/cooked.jpg';
import reviewflixImg from '../../images/reviewFlix.jpg';
import weatherImg from '../../images/weather.jpg';
import noteTakerImg from '../../images/noteTaker.jpg';
import timedQuiz from '../../images/timedQuiz.jpg';
import workSchedulerImg from '../../images/scheduler.jpg';

function Portfolio() {

    const projects = [
        {
            name: 'Cooked',
            description: 'Social Platform to connect and share your passion for cooking.',
            image: cookedImg,
            urlDeployed: 'https://cooked.herokuapp.com/',
            urlGit: 'https://github.com/jcuetos97/COOKED'
        },
        {
            name: 'ReviewFlix',
            description: 'App for movie lovers who want to review and get info about movies.',
            image: reviewflixImg,
            urlDeployed: 'https://gavriellegarcia.github.io/First-Project-TDM/',
            urlGit: 'https://github.com/GavrielleGarcia/First-Project-TDM'
        },
        {
            name: 'Weather Forecast',
            description: 'Weather application using a third-party API.',
            image: weatherImg,
            urlDeployed: 'https://qgtere.github.io/Weather-Forecast/',
            urlGit: 'https://github.com/qgtere/Weather-Forecast'
        },{
            name: 'Note Taker',
            description: 'With this app you can write and save notes, review them and delete them.',
            image: noteTakerImg,
            urlDeployed: 'https://sleepy-badlands-24266.herokuapp.com/',
            urlGit: 'https://github.com/qgtere/Note-Taker'
        },
        {
            name: 'Timed Quiz',
            description: 'Timed coding quiz with multiple-choice questions.',
            image: timedQuiz,
            urlDeployed: 'https://qgtere.github.io/Challenge4-TimedQuiz/',
            urlGit: 'https://github.com/qgtere/Challenge4-TimedQuiz'
        },
        {
            name: 'Work Day Scheduler',
            description: 'This app presents hours from 9am to 5pm, allows to save/update events.',
            image: workSchedulerImg,
            urlDeployed: 'https://qgtere.github.io/Work-Day-Scheduler/',
            urlGit: 'https://github.com/qgtere/Work-Day-Scheduler'
        }
    ];
    
    return (  
        <div className='ulContainer'>
        <ul className='ul-project'>
            {projects.map((project) => (     
                <li key={project.name} className='li-project'>
                    <Project project={project} />
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Portfolio;