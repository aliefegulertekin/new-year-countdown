const cDate = new Date('Jan 1, 2022 00:00:00').getTime();


const newYear = () => {
  const now = new Date().getTime();
  const gap = cDate - now;
  
  timeCalculation(gap);

}


const timeCalculation = (gap) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;
  
  const secondValue = Math.floor(gap/1000 % 60);
  const minuteValue = Math.floor((gap % hour)/ min);
  const hourValue = Math.floor((gap % day )/hour);
  const dayValue = Math.floor((gap % week) / day);
  const weekValue = Math.floor((gap % month) / week);
  const monthValue = Math.floor((gap % year) / month);
  renderTimeToScreen(monthValue, weekValue, dayValue, hourValue, minuteValue, secondValue);
}

const renderTimeToScreen = (monthValue, weekValue, dayValue, hourValue, minuteValue, secondValue) => {
  document.getElementById('month').innerText = monthValue;
  document.getElementById('week').innerText = weekValue;
  document.getElementById('day').innerText = dayValue;
  document.getElementById('hour').innerText = hourValue;
  document.getElementById('minute').innerText = minuteValue;
  document.getElementById('second').innerText = secondValue;
}


setInterval(function() {
  newYear();
},1000);