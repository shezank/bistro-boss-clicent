import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shard/Cover/Cover';
import shopImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/UseMenu/UseMenu';
import OrderMenu from '../../Shard/OrderMenu/OrderMenu';
import { useParams } from 'react-router-dom';


const OurShop = () => {

    const catagory = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {title} = useParams();
    const tabIndex = catagory.indexOf(title);
    console.log(tabIndex, catagory, title)
    const [menu] = useMenu();
    const [index, setIndex] = useState(tabIndex);

    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Our Shop</title>
            </Helmet>
            <Cover title={'Our Shop'} img={shopImg} ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SHOPS</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderMenu items={salad}></OrderMenu>
                </TabPanel>
                <TabPanel>
                    <OrderMenu items={pizza}></OrderMenu>
                </TabPanel>
                <TabPanel>
                    <OrderMenu items={soup}></OrderMenu>
                </TabPanel>
                <TabPanel>
                    <OrderMenu items={dessert}></OrderMenu>
                </TabPanel>
                <TabPanel>
                    <OrderMenu items={drinks}></OrderMenu>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;