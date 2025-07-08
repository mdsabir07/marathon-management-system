import { Link, useLoaderData } from "react-router";


const MarathonDetails = () => {
    const marathon = useLoaderData();
    console.log(marathon);
    const { _id, marathon_img, title, startRegDate, endRegDate, marathonDate, runDistance, location, description, email } = marathon || {};
    return (
        <div className="max-w-5xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
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

                <Link to={`/JobApply/${_id}`} className="relative px-8 py-4 flex justify-center items-center overflow-hidden font-semibold rounded clr-primary-bg">Apply now
                </Link>
            </article>
        </div>
    );
};

export default MarathonDetails;