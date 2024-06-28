"use client";

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

export const useRelativeTime = (date: Date) => {
    const [relativeTime, setRelativeTime] = useState<string>('');

    useEffect(() => {
        setRelativeTime(formatDistanceToNow(date, { addSuffix: true }));
    }, [date]);

    return relativeTime;
};