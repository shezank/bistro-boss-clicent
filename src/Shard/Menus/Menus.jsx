import React from 'react';

const Menus = ({iteam}) => {
    const {name,recipe,image,price} = iteam;
    return (
        <div className='flex'>
            <img className='w-28' style={{borderRadius: '0px 200px 200px 200px '}} src={image} alt="" />
            <div className='ml-2'>
            <h1 className='text-2xl'>{name}----------</h1>
            <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default Menus;