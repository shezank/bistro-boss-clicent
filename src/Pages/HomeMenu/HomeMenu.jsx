import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shard/SectionTitle/SectionTitle';
import Menus from '../../Shard/Menus/Menus';
import useMenu from '../../Hooks/UseMenu/UseMenu';

const HomeMenu = () => {

    const [menu] = useMenu();
    console.log(menu);
    const populerMenu = menu.filter(item => item.category === 'popular');

    // const [menuItems, setMenuItems] = useState()
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const populerMenu = data.filter( item => item.category == 'popular');
    //         setMenuItems(populerMenu);
    //     })
    // },[])

    return (
        <section>
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-20 my-10 max-w-5xl mx-auto'>
                {
                   populerMenu?.map(menu => <Menus key={menu._id} iteam={menu} ></Menus>)
                }
            </div>
        </section>
    );
};

export default HomeMenu;