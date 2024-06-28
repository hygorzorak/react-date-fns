import { parse } from 'date-fns';

import { DatePattern } from '../models';

export const isValidDate = (dateString: string, pattern: DatePattern = 'dd/MM/yyyy'): boolean => {
    const parsedDate = parse(dateString, pattern, new Date());
    return !isNaN(parsedDate.getTime());
};