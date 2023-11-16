import React from 'react';
import { Link } from 'react-router-dom';

const MenuCatagory = ({ items, title }) => {

    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20 my-10 max-w-5xl mx-auto'>
                {
                    items.map(item => <>
                        <div className='flex'>
                            <img className='w-28' style={{ borderRadius: '0px 200px 200px 200px ' }} src={item.image} alt="" />
                            <div className='ml-2'>
                                <h1 className='text-2xl'>{item.name}----------</h1>
                                <p>{item.recipe}</p>
                            </div>
                            <p className='text-yellow-500'>{item.price}</p>
                        </div>
                    </>)
                }

            </div>
            <div className='flex justify-center items-center my-5'>
               <Link to={`/ourshop/${title}`}>
               <button className='btn btn-outline border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </>
    );
};

export default MenuCatagory;