import { Link, NavLink } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const Footer = () => {
    const { user } = UseAuth();
    const links = <>
        <NavLink to="/" className="hover:text-secondary">Home</NavLink>
        <NavLink to="marathons" className="hover:text-secondary">Marathons</NavLink>
        {
            !user && <>
                <NavLink to="signin" className="hover:text-secondary">Login</NavLink>
                <NavLink to="register" className="hover:text-secondary">Register</NavLink>
            </>
        }
    </>
    return (
        <footer className="py-10">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5 md:gap-8 justify-between">
                <aside>
                    <Link to="/" className="flex items-center font-bold mb-4">
                        <span className='text-secondary text-3xl'>M</span>
                        <span className='text-primary'>MARATHON</span>
                        <span className='text-secondary text-3xl'>S</span>
                    </Link>
                    <p>
                        Marathon Management System
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick links</h6>
                    <div className="flex flex-col gap-3 mt-5">
                        {links}
                    </div>
                </nav>
            </div>
            <aside className='w-11/12 mx-auto text-center pt-6 md:pt-8 mt-5 sm:mt-8 border-t-1 border-gray-600'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Marathon Management System</p>
            </aside>
        </footer>
    );
};

export default Footer;