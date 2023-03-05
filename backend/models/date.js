//This module returns the current date.
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const todayDate = () => {
  const dateObj = new Date();

  let day = dateObj.getUTCDate();
  let month = dateObj.getUTCMonth();
  let year = dateObj.getUTCFullYear();

  day = day.toString().length === 1 ? '0' + day.toString() : day;

  let currentDate = `${year} ${monthNames[month]} ${day}`;

  return currentDate;
}

module.exports = todayDate;