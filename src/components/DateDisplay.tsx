import React from 'react';
import { format } from 'date-fns';

import { DatePattern } from '../models';

type DateDisplayProps = {
    children: Date;
    className?: string;
    pattern: DatePattern;
};

export const DateDisplay: React.FC<DateDisplayProps> = ({ children, className, pattern }) => {
    return <span className={className}>{format(children, pattern)}</span>;
};

const ReactDateFns = { DateDisplay };

export default ReactDateFns;