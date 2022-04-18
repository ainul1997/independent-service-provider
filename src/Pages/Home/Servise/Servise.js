import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Servise = ({ product }) => {
    const { id, name, time, price, number, Pro_1, Pro_2, Pro_3, Pro_4 } = product;

    const navigate = useNavigate();


    const handleClick = id => {
        navigate(`/checkout/${id}`)
    }

    return (
        <div style={{ backgroundColor: "gray" }} className='gird col m-2 text-center p-4 rounded rounded-3'>
            <p>{number}</p>
            <h2> {name}</h2>
            <h4 className='rounded-circle mt-3 pt-2' style={{ height: '50px', width: '50px', backgroundColor: "white", marginLeft: '100px' }}> {price}</h4>
            <p>{time}</p>
            <p>{Pro_1}</p>
            <p>{Pro_2}</p>
            <p>{Pro_3}</p>
            <p>{Pro_4}</p>
            <button as={Link} to="/checkout" onClick={() => handleClick(id)} className='btn btn-success'> Book Now</button>

        </div>
    );
};

export default Servise;