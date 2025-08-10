import { Link, NavLink } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

const Header = () => {
    const { user, signOutUser } = UseAuth();
    console.log(user);
    const [isSticky, setIsSticky] = useState(false);
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
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Home</NavLink></li>
        <li><NavLink to="marathons" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Marathons</NavLink></li>
        {
            user && <>
                <li>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user?.photoURL || "https://i.ibb.co/2nFqQ2x/default-avatar.png"}
                                    alt={user?.displayName}
                                    title={user?.displayName}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-gray-200 text-black rounded-box w-50 right-0">
                            <li><NavLink to="dashboard" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Dashboard</NavLink></li>
                            <li><NavLink to="/dashboard/add-marathons" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Add marathon</NavLink></li>
                            <li><NavLink to="/dashboard/my-marathons-list" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>My marathon list</NavLink></li>
                            <li><NavLink to="/dashboard/my-apply-list" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>My apply list</NavLink></li>
                        </ul>
                    </div>
                </li>
            </>
        }
        {user ? <li><button onClick={handleSignOut} className='btn btn-primary hover:btn-secondary ml-0 lg:ml-4'>Logout</button></li> : <>
            <li><NavLink to="signin" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Login</NavLink></li>
            <li><NavLink to="register" className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}>Register</NavLink></li>
        </>}
    </>
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div className={`navbar fixed top-0 w-full z-50 transition-all shadow-sm duration-300 sm:gap-8 
        ${isSticky
                ? 'backdrop-blur shadow-md -translate-y-1'
                : 'translate-y-0'
            }`}>
            <div className="w-11/12 mx-auto">
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
                    <Link to="/" className="flex items-center font-bold">
                        <span className='text-secondary text-3xl'>M</span>
                        <span className='text-primary'>MARATHON</span>
                        <span className='text-secondary text-3xl'>S</span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal items-center hidden lg:flex px-1">
                        {links}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Header;