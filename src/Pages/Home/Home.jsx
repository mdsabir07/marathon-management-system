import { useLoaderData } from 'react-router';
import HeroSlider from './Shared/HeroSlider';
import MarathonCard from './Shared/MarathonCard';
import CountdownTimer from './Shared/CountdownTimer';
import UpcomingMarathons from './Shared/UpcomingMarathons';

const Home = () => {
    const marathons = useLoaderData();
    const marathonDate = "2025-08-15T09:00:00";
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

            <UpcomingMarathons />

            <section className="my-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold mb-5 sm:mb-8 clr-secondary text-center">Marathon Countdown</h2>
                <CountdownTimer marathonDate={marathonDate} />
            </section>
        </>
    );
};

export default Home;