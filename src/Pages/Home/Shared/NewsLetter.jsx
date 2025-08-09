import React from 'react';

const NewsLetter = () => {
    return (
        <div className="p-6 py-12 my-8 sm:my-12 border border-gray-600 rounded-md">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className='text-center sm:text-left mb-5 sm:mb-0'>
                    <h2 className="text-3xl sm:text-5xl tracking-tighter text-secondary font-bold">🏃‍♂️ Streamline Your Marathon Events with Ease!
                    </h2>
                    <div className="mt-3 sm:mt-5 text-primary font-semibold text-lg">
                        Introducing the Ultimate Marathon Management System
                    </div>
                </div>
                <button className='btn bg-primary'>Get Started Now</button>
            </div>
        </div>
    );
};

export default NewsLetter;