import { Link, useLocation } from 'react-router';
import img404 from '../../src/assets/404.jpg';

const Error404 = () => {
    const location = useLocation();
    return (
        <div className='max-w-[1280px] mx-auto px-6 lg:px-0 grid gap-4 py-14 sm:py-20 text-center justify-center'>
            <figure>
                <img src={img404} alt="404" className='rounded-xl w-full max-w-4xl' />
            </figure>
            <h1 className='text-error font-extrabold text-5xl'>Page Not found!</h1>
            <p className="text-xl md:text-2xl my-3">
                Opps! The page <code className='text-secondary font-bold'>{location.pathname}</code> you're looking for doesn't exist.
            </p>
            <Link to="/" className="px-8 py-3 btn text-lg font-semibold rounded btn-primary hover:btn-secondary">Go to Home</Link>
        </div>
    );
};

export default Error404;