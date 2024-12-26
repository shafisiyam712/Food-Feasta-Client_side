import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Donation from '../Components/Donation';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
            <Outlet></Outlet>
            <Donation></Donation>
            <Blogs></Blogs>
             
        </div>
    );
};

export default Home;