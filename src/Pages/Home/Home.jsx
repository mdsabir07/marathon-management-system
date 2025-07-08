import { useLoaderData } from 'react-router';
import HeroSlider from './Shared/HeroSlider';
import MarathonCard from './Shared/MarathonCard';

const Home = () => {
    const marathons = useLoaderData();
    return (
        <>
            <HeroSlider />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    marathons.map(marathon => (
                        <MarathonCard key={marathon._id} marathon={marathon} />
                    ))
                }
            </div>
        </>
    );
};

export default Home;