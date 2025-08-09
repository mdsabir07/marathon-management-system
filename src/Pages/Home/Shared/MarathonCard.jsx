import React from 'react';
import { Link } from 'react-router';

const MarathonCard = ({ marathon }) => {
    const { _id, marathon_img, title, location, startRegDate, endRegDate } = marathon || {};
    return (
        <div className="rounded-md shadow-md">
            <img src={marathon_img} alt="" className="object-cover object-center w-full h-[215px] sm:h-[260px] rounded-t-md dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="">Location:<strong className='text-secondary'> {location}</strong></p>
                    <p className="">
                        Registration Dates:
                        <strong className='text-primary'> {startRegDate}</strong> - <strong className='text-primary'>{endRegDate}</strong>
                    </p>
                </div>
                <Link to={`/marathon/${_id}`}><button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary hover:bg-secondary cursor-pointer">See Details</button></Link>
            </div>
        </div>
    );
};

export default MarathonCard;