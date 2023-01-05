
//returns the number of seconds since the input date
export default function secondsSinceDateFromToday(inputDate) {
  const currentDate = new Date();
  return subtractDates(currentDate, inputDate.value);
}

//subtracts two dates and returns the value in ms
function subtractDates(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let date1Seconds = date1.getTime();
  let date2Seconds = date2.getTime();
  return (date1Seconds - date2Seconds);
}
