import React from 'react';
import OrderCart from '../OrderCart/OrderCart';

const OrderMenu = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
        {
          items.map(item => <OrderCart
          key={item._id}
          items={item}
          ></OrderCart>)  
        }
    </div>
    );
};

export default OrderMenu;