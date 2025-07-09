import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// Helper to format time units
const renderTime = (dimension, time) => (
    <div className="flex flex-col items-center text-sm sm:text-base font-bold">
        <div className="text-xl clr-primary sm:text-2xl">{time}</div>
        <div className="clr-secondary">{dimension}</div>
    </div>
);

const getTimeParts = (remainingTime) => {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    return { days, hours, minutes };
};

const CountdownTimer = ({ marathonDate }) => {
    const startTime = Date.now() / 1000;
    const endTime = new Date(marathonDate).getTime() / 1000;
    const remainingTime = Math.max(endTime - startTime, 0);
    const [circleSize, setCircleSize] = useState(150);
    // Responsive sizing logic
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 640) {
                setCircleSize(90); // Mobile
            } else if (window.innerWidth < 1024) {
                setCircleSize(120); // Tablet
            } else {
                setCircleSize(150); // Desktop
            }
        };

        updateSize(); // initial run
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const { days, hours, minutes } = getTimeParts(remainingTime);

    return (
        <div className="flex gap-5 sm:gap-8 justify-center items-center">
            <CountdownCircleTimer
                isPlaying
                duration={remainingTime}
                colors={[["#EF509C", 1]]}
                size={circleSize}
                strokeWidth={10}
            >
                {() => renderTime("Days", days)}
            </CountdownCircleTimer>

            <CountdownCircleTimer
                isPlaying
                duration={remainingTime}
                colors={[["#0091BD", 1]]}
                size={circleSize}
                strokeWidth={10}
            >
                {() => renderTime("Hours", hours)}
            </CountdownCircleTimer>

            <CountdownCircleTimer
                isPlaying
                duration={remainingTime}
                colors={[["#0091BD", 1]]}
                size={circleSize}
                strokeWidth={10}
            >
                {() => renderTime("Minutes", minutes)}
            </CountdownCircleTimer>
        </div>
    );
};

export default CountdownTimer;
