import React from 'react';
import { format } from 'date-fns';

type DatePattern =
    | "MMM"
    | "MMMM"
    | "yyyy-MM-dd"
    | "MM/dd/yyyy"
    | "dd-MM-yyyy"
    | "dd/MM/yyyy"
    | "yyyy/MM/dd"
    | "dd MMMM yyyy"
    | "EEEE, MMMM do, yyyy"
    | "MM-dd-yyyy"
    | "yyyy-MM-dd'T'HH:mm:ss"
    | "yyyy-MM-dd HH:mm:ss"
    | "HH:mm"
    | "HH:mm:ss"
    | "hh:mm:ss a"
    | "EEE"
    | "EEEE"
    | "MMM d, yyyy"
    | "MMMM do, yyyy"
    | "dd MMM yyyy"
    | "d MMM yyyy"
    | "dd MMM"
    | "d MMM"
    | "MMMM yyyy"
    | "MMM yyyy"
    | "EEE, MMM d, ''yy"
    | "h:mm a"
    | "h:mm:ss a"
    | "h:mm:ss a zzz"
    | "h:mm a zzz"
    | "EEEE, MMMM do, yyyy, h:mm a"
    // eslint-disable-next-line @typescript-eslint/ban-types
    | (string & {});

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