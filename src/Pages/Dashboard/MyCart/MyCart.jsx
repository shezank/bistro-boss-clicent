import React from 'react';
import useCart from '../../../Hooks/useCart/useCart';
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSequre = useAxiosSecure();
    const handleDelete = id => {
        console.log(id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSequre.delete(`/carts/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                refetch();
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div className='my-20'>
            <div className='flex justify-evenly text-3xl '>
                <h1>Total orders: {cart.length}</h1>
                <p>total price: {totalPrice}</p>
                <button className='btn'>Pay</button>
            </div>
            <div className='m-10 '>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-slate-400 text-white font-bold'>
                                <th>
                                    <label>
                                        <p>#</p>
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) =>

                                    <tr>
                                        <th>
                                            <label>
                                                <p>{idx + 1}</p>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-600"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr className='bg-slate-400 text-white font-bold'>
                                <th>
                                    <label>
                                        <p>#</p>
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;