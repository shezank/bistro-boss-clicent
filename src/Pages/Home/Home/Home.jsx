import React from 'react';
import Bannar from '../Bannar/Bannar';
import Catagory from '../Catagory/Catagory';
import HomeMenu from '../../HomeMenu/HomeMenu';
import BestProduct from '../BestProduct/BestProduct';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss: Home</title>
                
            </Helmet>
            <Bannar />
            <Catagory></Catagory>
            <HomeMenu></HomeMenu>
            <BestProduct></BestProduct>
            <Review></Review>
        </div>
    );
};

export default Home;