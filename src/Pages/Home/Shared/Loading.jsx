import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse clr-primary-bg"></div>
            <div className="w-4 h-4 rounded-full animate-pulse clr-secondary-bg"></div>
            <div className="w-4 h-4 rounded-full animate-pulse clr-primary-bg"></div>
        </div>
    );
};

export default Loading;