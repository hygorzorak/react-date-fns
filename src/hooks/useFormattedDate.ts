"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { DatePattern } from '../models';

export const useFormattedDate = (date: Date, pattern: DatePattern = 'dd/MM/yyyy') => {
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
        setFormattedDate(format(date, pattern));
    }, [date, pattern]);

    return formattedDate;
};