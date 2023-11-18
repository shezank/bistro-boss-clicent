import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';
import useCart from '../../Hooks/useCart/useCart';

const OrderCart = ({ items }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] =  useCart()

    const { name, image, price, recipe, _id } = items;
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSequre = useAxiosSecure();

    const handleCart = (items) => {

        if (user && user.email) {
            // add to database product and email information 
            const cartItem = {
                cartId: _id,
                userEmail: user.email,
                name,
                image,
                price,
                recipe
            }
            axiosSequre.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        toast.success(`${name} add to your cart ` )
                    }
                    refetch();
                })
        }
        else {
            swal({
                title: "Are you sure?",
                text: "You Order Now This Items Then Login Your Account",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        navigate('/login', { state: { from: location } })
                    } else {
                        swal("You Can Try next Time!");
                    }
                });

        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleCart(items)} className="btn btn-outline border-b-4 border-orange-300 text-orange-300 hover:text-orange-500">Add To Cart</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default OrderCart;