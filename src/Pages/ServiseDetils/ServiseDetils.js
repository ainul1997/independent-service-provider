import React from 'react';
import { useParams } from 'react-router-dom';

const ServiseDetils = () => {
    const { serviseId } = useParams();
    return (

        <div>
            <h2> Theis is serviseDetils{serviseId}</h2>
        </div>
    );
};

export default ServiseDetils;