
export default function secondsSinceDateFromToday(userDate) {
  const currentDate = new Date();
  return subtractDates(currentDate, userDate);
}

export default function subtractDates(date1, date2) {
  let date1Seconds = date1.getTime();
  let date2Seconds = date2.getTime();
  return date1Seconds - date2Seconds;
}
