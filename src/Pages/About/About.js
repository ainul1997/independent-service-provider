import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
// import { faAward } from '@fortawesome/free-solid-svg-icons';
import pic from '../../images/20210124_151429[2].jpg'

const About = () => {
    return (
        <div className='d-flex justify-content-center align-items-center  px-5 text-center '>
            <div style={{ width: "800px", height: "800px" }} className='  bg-light mt-5 rounded rounded-4'>
                <img style={{ width: "150px", height: "150px", borderRadius: " 300px", marginTop: "20px" }} src={pic} alt="" />
                <h2 className='mt-5'> MD. AINUL ISLAM</h2>
                <p>I am still vaccinated, overcoming all adversity, for this I thank Allah Almighty. Come to this course with many dreams. But in a few days all the adversity, obstacles, adversity fell on me. I know I'm far behind. But never give up.
                    No one learns anything from mother's womb. I don't know how much success I can achieve. My dream is to become a developer and get a job or freelancing. I will take care of my world. .........</p>
            </div>
        </div>
    );
};

export default About;














{/* <div id='about'>
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
        </div > */}