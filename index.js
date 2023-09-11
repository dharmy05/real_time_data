const currentDayOfTheWeek = document.querySelector(".currentDayOfTheWeek");
const currrentUTCTime = document.querySelector(".currrentUTCTime");


const utcTime = () => {
  const currentDay = Date.now();

  currrentUTCTime.textContent = currentDay;
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  const dayOfTheWeek = day.getDay();
  currentDayOfTheWeek.textContent = weeks[dayOfTheWeek];
};
setInterval(utcTime, 1000);
