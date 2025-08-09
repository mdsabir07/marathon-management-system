import hero1 from '../../../assets/hero1.jpg';
import hero2 from '../../../assets/hero2.jpg';
import hero3 from '../../../assets/hero3.jpg';
import hero4 from '../../../assets/hero4.jpg';

const HeroSlider = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="container flex flex-col justify-center gap-8 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:text-left flex-1">
                        <h1 className="text-3xl font-bold leading-none sm:text-6xl">Event Registration and Participant Management
                        </h1>
                        <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">Efficiently handle participant registrations with real-time updates. The system allows participants to register, modify details, and track their progress throughout the marathon.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded clr-primary-bg">Read more</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <img src={hero1} alt="" className="w-full max-h-[438px] object-cover rounded-md" />
                    </div>
                </div>
                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="container flex flex-col justify-center gap-8 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:text-left flex-1">
                        <h1 className="text-3xl font-bold leading-none sm:text-6xl">Race Day Logistics and Tracking
                        </h1>
                        <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">Manage race-day activities seamlessly, including route mapping, timing systems, and live tracking of runners. Keep spectators and organizers informed with real-time updates on runners' locations and progress.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded clr-primary-bg">Read more</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <img src={hero2} alt="" className="w-full max-h-[438px] object-cover rounded-md" />
                    </div>
                </div>
                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="container flex flex-col justify-center gap-8 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:text-left flex-1">
                        <h1 className="text-3xl font-bold leading-none sm:text-6xl">Volunteer and Staff Coordination
                        </h1>
                        <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">Coordinate volunteer assignments, staff roles, and shift schedules for a smooth event operation. The system ensures optimal support for participants and spectators throughout the race.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded clr-primary-bg">Read more</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <img src={hero3} alt="" className="w-full max-h-[438px] object-cover rounded-md" />
                    </div>
                </div>
                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="container flex flex-col justify-center gap-8 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:text-left flex-1">
                        <h1 className="text-3xl font-bold leading-none sm:text-6xl">Results and Analytics Dashboard
                        </h1>
                        <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">Post-race, the system compiles detailed results, times, and rankings for each participant. Access analytics for performance reviews, participant demographics, and overall event success.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded clr-primary-bg">Read more</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <img src={hero4} alt="" className="w-full max-h-[438px] object-cover rounded-md" />
                    </div>
                </div>
                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;