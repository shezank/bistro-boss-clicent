import React from 'react';
import Bannar from '../Bannar/Bannar';
import Catagory from '../Catagory/Catagory';
import HomeMenu from '../../HomeMenu/HomeMenu';
import BestProduct from '../BestProduct/BestProduct';
import Review from '../Review/Review';


const Home = () => {

    return (
        <div>
            <Bannar/>
            <Catagory></Catagory>
            <HomeMenu></HomeMenu>
            <BestProduct></BestProduct>
            <Review></Review>
        </div>
    );
};

export default Home;