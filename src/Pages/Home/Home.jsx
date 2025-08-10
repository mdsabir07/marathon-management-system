import HeroSlider from './Shared/HeroSlider';
import CountdownTimer from './Shared/CountdownTimer';
import UpcomingMarathons from './Shared/UpcomingMarathons';
import NewsLetter from './Shared/NewsLetter';
import MarathonSection from './Shared/MarathonSection';
import MarathonSections from './Shared/MarathonSections';

const Home = () => {
    const marathonDate = "2025-10-15T09:00:00";
    return (
        <>
            <div className="w-11/12 mx-auto">
                <HeroSlider />
                <MarathonSections>
                    {({ trending, featured, recent, loading }) => (
                        <>
                            {loading ? (
                                <p className="text-center text-lg font-medium py-10">Loading marathons...</p>
                            ) : (
                                <>
                                    <MarathonSection title="Trending Marathons" data={trending} />
                                    <MarathonSection title="Featured Marathons" data={featured} />
                                    <MarathonSection title="Recent Marathons" data={recent} />
                                </>
                            )}
                        </>
                    )}
                </MarathonSections>

                <UpcomingMarathons />

                <div className="my-10">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-8 text-secondary text-center">Marathon Countdown</h2>
                    <CountdownTimer marathonDate={marathonDate} />
                </div>
                <NewsLetter />
            </div>

        </>
    );
};

export default Home;