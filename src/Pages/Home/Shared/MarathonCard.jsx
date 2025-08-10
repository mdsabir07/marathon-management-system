import { Link } from 'react-router';

const MarathonCard = ({ marathon }) => {
    const { _id, marathon_img, title, location, description } = marathon || {};
    return (
        <div className="rounded-md shadow-md">
            <img src={marathon_img} alt="" className="object-cover object-center w-full h-[215px] sm:h-[260px] rounded-t-md dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-4 sm:p-6 space-y-5 sm:space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl sm:text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="text-secondary font-semibold">📍{location}</p>
                    <p className="">
                        {description}
                    </p>
                </div>
                <Link to={`/marathon/${_id}`}><button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-primary hover:btn-secondary cursor-pointer">See Details</button></Link>
            </div>
        </div>
    );
};

export default MarathonCard;