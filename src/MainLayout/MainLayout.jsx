import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            This is Home
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;