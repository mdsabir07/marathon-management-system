import { Outlet } from 'react-router';
import Header from '../Pages/Home/Shared/Header';
import Footer from '../Pages/Home/Shared/Footer';

const RootLayouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayouts;