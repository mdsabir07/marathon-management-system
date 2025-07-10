import React from 'react';

const NewsLetter = () => {
    return (
        <div className="p-6 py-12 my-8 sm:my-12 w-11/12 mx-auto border border-gray-600 rounded-md">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <h2 className="text-3xl sm:text-5xl tracking-tighter clr-secondary font-bold">🏃‍♂️ Streamline Your Marathon Events with Ease!
                    </h2>
                    <div className="mt-5 clr-primary font-semibold text-lg">
                        Introducing the Ultimate Marathon Management System
                    </div>
                </div>
                <button className='btn clr-primary-bg'>Get Started Now</button>
            </div>
        </div>
    );
};

export default NewsLetter;