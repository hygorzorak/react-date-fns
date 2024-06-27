import React from 'react';
import { format } from 'date-fns';

export const DateFormatter: React.FC<{ date: Date }> = ({ date }) => {
    return <div>{format(date, 'yyyy-MM-dd')}</div>;
};

export default DateFormatter;