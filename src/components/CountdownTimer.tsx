"use client";

import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
    targetDate: Date;
    className?: string;
    timeLeftText?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
    targetDate, className, timeLeftText,
}) => {
    const [timeLeft, setTimeLeft] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft(timeLeftText ?? 'Time’s up!');
                clearInterval(interval);
            } else {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, timeLeftText]);

    return <div className={className}>{timeLeft}</div>;
};