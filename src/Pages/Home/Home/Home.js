import React from 'react';
import About from '../../About/About';
import Bannar from '../Bannar/Bannar';
import Portfolio from '../Portfolio/Portfolio';
import Servises from '../Servises/Servises';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
            <About></About>
            <Servises></Servises>
            <Portfolio></Portfolio>

        </>
    );
};

export default Home;