import { Outlet, useMatches } from 'react-router';
import Header from '../Pages/Home/Shared/Header';
import Footer from '../Pages/Home/Shared/Footer';
import { useEffect } from 'react';

const RootLayouts = () => {
    const matchs = useMatches();
    useEffect(() => {
        const matchWithTitle = [...matchs].reverse().find(match => match.handle?.title);
        if (matchWithTitle) {
            document.title = matchWithTitle.handle.title;
        }
    }, [matchs])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayouts;