import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const LogInLayout = () => {
    return (
        <div>
           
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogInLayout;