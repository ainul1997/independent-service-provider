import React from 'react';
import backgroundpicman from '../../../images/backgroundpicman.jpg'



const Bannar = () => {

    return (

        <div className=''>

            <div className=' ' style={{
                width: '100%',
                height: '500px',
                backgroundSize: '100%',
                backgroundImage: `url(${backgroundpicman})`,
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='  w-50 h-50 mx-4 p-5 grid col '>
                    <h2 className=' text-white mt-5' style={{ marginTop: '20px' }}> Hello, I'm</h2>
                    <h1 className=' text-white'>Peter Parker</h1>
                    <h4 className=' text-white'>A Photographer from New York</h4>
                </div>
            </div>

        </div>

    );
};

export default Bannar;