import React from 'react';
import { FaBookOpen, FaCartArrowDown, FaHome, FaIceCream, FaList, FaRProject, FaStreetView, FaUser, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart/useCart';
import useAdmin from '../../Hooks/useAdmin/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className='w-72 min-h-screen bg-orange-500'>
                <h1 className='text-center text-2xl text-white'>Bistro Boss Dashboard</h1>
                <ul className='menu space-y-5'>
                    {isAdmin ? <>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/adminhome'> <FaHome></FaHome> Admin Home </NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/allusers'> <FaUser></FaUser> All Users</NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/additems'> <FaIceCream></FaIceCream> Add Items</NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/manageitems'> <FaList></FaList> Manage Items</NavLink></li>
                        <hr />
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/ourshop/salad'> <FaList></FaList> Menu</NavLink></li>
                    </> :
                        <>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/mycart'> <FaCartArrowDown></FaCartArrowDown> My Cart {cart.length} </NavLink></li>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/addreview'> <FaStreetView></FaStreetView> Add Review</NavLink></li>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/mybooking'> <FaBookOpen></FaBookOpen> My Booking</NavLink></li>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/paymentsHistory'> <FaWallet></FaWallet> Payments History</NavLink></li>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/reservation'> <FaRProject></FaRProject> Reservation</NavLink></li>
                            <hr />
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                            <li className='bg-slate-100 text-xl font-bold'><NavLink to='/ourshop/salad'> <FaList></FaList> Menu</NavLink></li>
                        </>
                    }

                </ul>
            </div>
            <div className=' flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;