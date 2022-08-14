import {setBg} from './slider';

const greetingContainer = document.querySelector('.greeting-container');
const greeting = greetingContainer.querySelector('.greeting');
const name = greetingContainer.querySelector('.name');
name.placeholder = '[Enter name]';

// localStorage.clear()

name.value = !localStorage.getItem('name') ? name.value = '' : localStorage.getItem('name');
// const date = new Date();
// const hours = date.getHours();
// console.log(hours);

function getTimeOfDay(hour) {   
  if (hour >= 6 && hour < 12) {
   return 'morning';
  } else  if (hour >= 12 && hour < 18) {
    return 'afternoon'; 
  } else if (hour >= 18 && hour < 24 ) {
    return 'evening';
  } else {
    return 'night';
  } 
}
  
// const greetingText = `Good ${getTimeOfDay(hours)},`;
function showGreeting(date) {
  let hour = date.getHours();
  greeting.textContent = `Good ${getTimeOfDay(hour)},`;
  // setBg(hour);
}

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('load', getLocalStorage) 

export {showGreeting, getTimeOfDay} 