import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../Hooks/useCart/useCart';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart();
    console.log(cart)
    const navLinks = <>
        <NavLink to={'/'}><li><button>Home</button></li></NavLink>
        <NavLink to={'/ourmenu'}><li><button>Our Menu</button></li></NavLink>
        <NavLink to={'/ourshop/salad'}><li><button>Our Shop</button></li></NavLink>
        <NavLink to={'/buynow'}><li><button>Buy Now</button></li></NavLink>
        <NavLink to={'/Dashboard/mycart'}><li><button>
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
        </button></li></NavLink>
        {user ? <NavLink to={'/'}><li><button onClick={() => logout()}>Logout</button></li></NavLink> :
            <NavLink to={'/login'}><li><button>Login</button></li></NavLink>
        }
    </>
    return (
        <div className="navbar fixed z-10 opacity-40 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;