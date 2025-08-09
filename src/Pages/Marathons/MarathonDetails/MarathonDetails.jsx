import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import CountdownTimer from "../../Home/Shared/CountdownTimer";


const MarathonDetails = () => {
    const marathon = useLoaderData();
    const { _id, marathon_img, title, startRegDate, endRegDate, marathonDate, runDistance, location, description } = marathon || {};

    // State to manage button disabled state
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    useEffect(() => {
        document.title = `${marathon.title} - Marathon Management System`;

        const setToMidnight = (date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        };

        if (startRegDate && endRegDate) {
            const startDate = setToMidnight(startRegDate);
            const endDate = setToMidnight(endRegDate);
            const currentDate = setToMidnight(new Date());

            setIsRegistrationOpen(currentDate >= startDate && currentDate <= endDate);
        }
    }, [marathon]);

    return (
        <div className="max-w-5xl px-6 py-10 sm:py-20 mx-auto space-y-12">
            <article className="space-y-8 mt-8">
                <div className="space-y-6">
                    <div className="flex items-center md:space-x-2">
                        <img src={marathon_img} alt={title} className="rounded-t-md" />
                    </div>
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col justify-between w-full md:flex-row text-lg">
                        <p className="">Marathon start date:<strong className="clr-secondary"> {marathonDate}</strong></p>
                        <p className="">Registration deadline:<strong className="clr-secondary"> {startRegDate} - {endRegDate}</strong></p>
                    </div>
                    <div className="flex flex-col justify-between w-full md:flex-row text-lg">
                        <p className="">Running distance:<strong className="clr-primary"> {runDistance}</strong></p>
                        <p className="">Location:<strong className="clr-primary"> {location}</strong></p>
                    </div>
                </div>
                <div className="">
                    <p>{description}</p>
                </div>

                {isRegistrationOpen ? (
                    <Link
                        to={`/marathon-registration/${_id}`}
                        className="relative px-8 py-4 flex justify-center items-center overflow-hidden font-semibold rounded clr-primary-bg"
                    >
                        Apply now
                    </Link>
                ) : (
                    <button
                        className="relative px-8 py-4 flex justify-center items-center overflow-hidden font-semibold rounded clr-primary-bg opacity-50 cursor-not-allowed"
                        disabled
                    >
                        Registration Closed
                    </button>
                )}

            </article>
            <section className="my-10">
                <h2 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-8 clr-secondary text-center">Marathon Countdown</h2>
                <CountdownTimer marathonDate={marathonDate} />
            </section>
        </div>
    );
};

export default MarathonDetails;