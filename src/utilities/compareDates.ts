export const compareDates = (firstDate: Date, secondDate: Date): number => {
    if (firstDate < secondDate) return -1;
    if (firstDate > secondDate) return 1;
    return 0;
};