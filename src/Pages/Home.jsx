import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
            <Outlet></Outlet>
            <Blogs></Blogs>
             
        </div>
    );
};

export default Home;