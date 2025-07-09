import { Link, useLocation } from 'react-router';
import img404 from '../../../assets/404.jpg';

const Error404 = () => {
    const location = useLocation();
    return (
        <div className='max-w-[1280px] mx-auto px-6 lg:px-0 grid gap-5 pt-8 pb-14 text-center justify-center'>
            <figure>
                <img src={img404} alt="404" className='rounded-xl w-full max-w-4xl' />
            </figure>
            <h1 className='text-red-500 font-extrabold text-5xl'>404 - Page Not found!</h1>
            <p className="text-xl md:text-2xl my-3">
                Opps! The page <code className='clrPrimary font-bold'>{location.pathname}</code> you're looking for doesn't exist.
            </p>
            <Link to="/" className="px-8 py-3 text-lg font-semibold rounded bg-clrPrimary hover:text-white">Go to Home</Link>
        </div>
    );
};

export default Error404;