import { showDate } from './date';
import { showGreeting } from './greeting';
// import { setBg } from './slider';

const timeContainer = document.querySelector('.time');

function showTime() { 
  const date = new Date();
  const currentTime = date.toLocaleTimeString();        
  timeContainer.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate(date);
  showGreeting(date);
}
 

export {showTime};