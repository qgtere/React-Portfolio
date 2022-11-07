import React from 'react';
import resumeImg from '../images/resume.jpg';
import resume from '../assets/Resume.pdf';

function Modal({closeModal}) {
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="modalClose">                    
                    <button onClick={() => closeModal(false)} className='btnClose'> X </button>
                </div>
                <div className='modalDownload'>
                    <a href={resume} className='btnDownload' download>Download</a>
                </div>
                <div className="modalImage">                    
                    <img src={resumeImg} className='imgResume' alt='developer resume' />
                </div>
            </div>
        </div>
    );
}

export default Modal;