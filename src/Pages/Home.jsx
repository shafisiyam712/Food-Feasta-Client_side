import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
            <Outlet></Outlet>
             
        </div>
    );
};

export default Home;