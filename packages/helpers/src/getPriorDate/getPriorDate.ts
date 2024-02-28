/**
 * Get the prior date time
 * @param daysInThePast - The number of days to go back
 * @param startDate - The date to go back from
 */
const getPriorDate = (
  daysInThePast: number,
  startDate: Date = new Date(Date.now()),
): Date => new Date(startDate.getTime() - daysInThePast * 24 * 60 * 60 * 1000);

export default getPriorDate;
