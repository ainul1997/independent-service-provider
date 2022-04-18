import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div id='about'>
            <div className=' flex d-flex ' style={{ marginTop: '50px ' }}>
                <div className=' bg-primary mx-1 my-1 p-3 rounded-3 ' style={{ height: '300px', width: '100%' }}>
                    <FontAwesomeIcon icon={faCamera} size="6x" />
                    <h2>Latest Gadgets & Gear</h2>
                    <p>Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon.</p>
                </div>
                <div className=' bg-success mx-1 my-1 p-3 rounded-3' style={{ height: '300px', width: '100%' }}>
                    <FontAwesomeIcon icon={faPhotoFilm} size="6x" />
                    <h2>Smart Photo Packages</h2>
                    <p>Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon.</p>
                </div>
            </div>
            <div className=' bg-info mx-1 my-1 p-3 rounded-3'>
                <FontAwesomeIcon icon={faAward} size="6x" />
                <h2>Award Winning</h2>
                <p>Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon.</p>

            </div>
        </div >
    );
};

export default About;