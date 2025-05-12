import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Donation from '../Components/Donation';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
            <Outlet></Outlet>
            <Donation></Donation>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
             
        </div>
    );
};

export default Home;