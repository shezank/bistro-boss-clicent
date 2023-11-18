import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shard/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import sopuImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../Hooks/UseMenu/UseMenu';
import MenuCatagory from '../../../Shard/MenuCatagory/MenuCatagory';
import SectionTitle from '../../../Shard/SectionTitle/SectionTitle';

const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover title={'Our Menu'} img={coverImg}></Cover>
            <SectionTitle
            subHeading={'---Do not miss---'}
            heading={"TODAY'S OFFER"}
            ></SectionTitle>
            
            
            <MenuCatagory title={'ofnpm rfered'} items={offered}></MenuCatagory>

            <Cover title={'dessert'} img={dessertImg}></Cover>
            <MenuCatagory title={'dessert'}  items={dessert}></MenuCatagory>


            <Cover title={'pizza'} img={pizzaImg}></Cover>
            <MenuCatagory title={'pizza'} items={pizza}></MenuCatagory>


            <Cover title={'salad'} img={saladImg}></Cover>
            <MenuCatagory title={'salad'} items={salad}></MenuCatagory>


            <Cover title={'soup'} img={sopuImg}></Cover>
            <MenuCatagory title={'soup'} items={soup}></MenuCatagory>

        </div>
    );
};

export default OurMenu;