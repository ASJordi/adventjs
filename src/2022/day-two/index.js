export function countHours(year, holidays){
  let hours = 0;
  holidays.forEach(holiday => {
    const date = new Date(`${holiday}/${year}`);
    if (date.getDate() !== 31){
      if(date.getDay() !== 0 && date.getDay() !== 6)
        hours += 2;
    }
  });
  return hours;
}
