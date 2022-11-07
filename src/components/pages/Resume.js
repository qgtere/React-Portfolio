import React, {useState} from 'react';
import Modal from '../Modal';
import '../../styles/Resume.css';

function Resume() {
    const [ openModal, setOpenModal ] = useState(false);
    return (
        <div className='resumeBackground'>
            <button className='openModalButton' onClick={() => {setOpenModal(true);}}>
                Check my Resume!                    
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
            <div className='profContainer'>
                <div className='divProficiencies'>
                    <h2 className='txtHeader'>Front and Back End Proficiencies</h2>

                    <div class="skills html">
                        <p>HTML</p>
                        <p>80%</p>
                    </div>

                    <div class="skills css">
                        <p>CSS</p>
                        <p>65%</p>
                    </div>

                    <div class="skills js">
                        <p>JavaScript</p>
                        <p>80%</p>
                    </div>

                    <div class="skills jquery">
                        <p>JQuery</p>
                        <p>70%</p>
                    </div>

                    <div class="skills responsive">
                        <p>Responsive Design</p>
                        <p>65%</p>
                    </div>

                    <div class="skills react">
                        <p>React</p>
                        <p>75%</p>
                    </div>

                    <div class="skills apis">
                        <p>APIs</p>
                        <p>70%</p>
                    </div>

                    <div class="skills node">
                        <p>NodeJS</p>
                        <p>80%</p>
                    </div>  

                    <div class="skills express">
                        <p>Express</p>
                        <p>80%</p>
                    </div>

                    <div class="skills mysql">
                        <p>MySQL</p>
                        <p>85%</p>
                    </div>

                    <div class="skills mongo">
                        <p>MongoDB</p>
                        <p>80%</p>
                    </div>

                    <div class="skills rest">
                        <p>REST</p>
                        <p>70%</p>
                    </div>

                    <div class="skills graphql">
                        <p>GraphQL</p>
                        <p>65%</p>
                    </div>                                      
                </div>
            </div>
        </div>
    );
}

export default Resume;
