"use client";

import React, { useState } from 'react';
import { format } from 'date-fns';

type DateSelectProps = {
    className?: string;
    pattern: string;
    onDateChange?: (date: Date) => void;
    showSelectedDate?: boolean;
};

export const DateSelect: React.FC<DateSelectProps> = ({
    className, pattern, onDateChange, showSelectedDate,
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(event.target.value);
        setSelectedDate(date);
        onDateChange?.(date);
    };

    return (
        <div className={className}>
            <input
                type="date"
                onChange={handleDateChange}
                className="border border-gray-300 rounded p-2 mb-4"
            />
            {showSelectedDate && selectedDate && (
                <p className="text-lg text-gray-700 mt-2">
                    Selected Date: {format(selectedDate, pattern)}
                </p>
            )}
        </div>
    );
};
