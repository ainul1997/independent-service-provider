import React from 'react';

const Servise = ({ product }) => {
    const { id, name, time, price, number } = product;

    return (
        <div>
            <h2> {name}</h2>
        </div>
    );
};

export default Servise;