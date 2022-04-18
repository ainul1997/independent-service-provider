import React, { useEffect, useState } from 'react';
import Servise from '../Servise/Servise';



const Servises = () => {
    const [servises, setServises] = useState([]);

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServises(data);

            })
    }, []);
    return (
        <div id='servises' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Servises</h2>
            <div className="row">
                {
                    servises.map(product => <Servise
                        key={product.id}
                        product={product}
                    ></Servise>)
                }
            </div>
        </div>

    );
};

export default Servises;