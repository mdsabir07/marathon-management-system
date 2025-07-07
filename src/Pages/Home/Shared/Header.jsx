import React from 'react';
import { Link, NavLink } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, signOutUser } = UseAuth();
    console.log(user);
    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                const user = res.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user?.email} SignOut successful!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error));
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li><NavLink to="marathons">Marathons</NavLink></li>
                <li><NavLink to="dashboard">Dashboard</NavLink></li>
                <li>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                    </div>
                </li>
            </>
        }
        {user ? <li><button onClick={handleSignOut} className='btn clr-primary-bg ml-0 lg:ml-4'>Logout</button></li> : <>
            <li><NavLink to="signin">Login</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li>
        </>}

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal hidden lg:flex px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;