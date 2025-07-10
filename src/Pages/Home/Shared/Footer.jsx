import { Link, NavLink } from 'react-router';

const Footer = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="marathons">Marathons</NavLink>
        <NavLink to="signin">Login</NavLink>
        <NavLink to="register">Register</NavLink>
    </>
    return (
        <footer className="bg-base-200 text-base-content py-10">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5 md:gap-8 justify-between">
                <aside>
                    <Link to="/" className="flex items-center font-bold mb-4">
                        <span className='clr-secondary text-3xl'>M</span>
                        <span className='clr-primary'>MARATHON</span>
                        <span className='clr-secondary text-3xl'>S</span>
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