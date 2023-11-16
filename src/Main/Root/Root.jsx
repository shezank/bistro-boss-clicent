import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Shard/Navbar/Navbar';
import Footer from '../../Shard/Footer/Footer';

const Root = () => {
    const location = useLocation();
    console.log(location);
    const isLocation = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {isLocation  || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLocation || <Footer></Footer>}
        </div>
    );
};

export default Root;