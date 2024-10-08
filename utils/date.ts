export function getDateString(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate =
    date.getDate().toString().length === 2
      ? date.getDate()
      : `0${date.getDate()}`;

  return `${year}-${month}-${todayDate}`;
}
