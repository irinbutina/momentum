// import {date} from './const';

const dateContainer = document.querySelector('.date');
// const date = new Date(); 
const options = {
  weekday: 'long', 
  month: 'long',
  day: 'numeric' 
};

const locales = {
  en: 'en-US',
  ru: 'ru-RU'
}

function getcurrentDate(date, locales, option) {
  return date.toLocaleDateString(locales, option);
}

function showDate(date) {
  dateContainer.textContent = getcurrentDate(date, locales.en, options);
}

export {showDate}