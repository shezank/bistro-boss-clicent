import React from 'react';

const OrderCart = ({items}) => {

    const {name, image, price, recipe} = items;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-b-4 border-orange-300 text-orange-300 hover:text-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;