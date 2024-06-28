import { parse } from 'date-fns';

import { DatePattern } from '../models';

export const parseDate = (dateString: string, pattern: DatePattern = 'dd/MM/yyyy'): Date => {
    return parse(dateString, pattern, new Date());
};