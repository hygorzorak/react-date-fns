"use client";

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { DatePattern } from '../models';

export const useFormattedDateRange = (
    startDate: Date, endDate: Date, pattern: DatePattern = 'dd/MM/yyyy',
) => {
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');

    useEffect(() => {
        setStart(format(startDate, pattern));
    }, [startDate, pattern]);

    useEffect(() => {
        setEnd(format(endDate, pattern));
    }, [endDate, pattern]);

    return { start, end };
};