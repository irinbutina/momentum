import { getTimeOfDay } from './greeting';
import {date} from './const';

const body = document.querySelector('body')
const sliderIcons = document.querySelector('.slider-icons');
const slidePrev = sliderIcons.querySelector('.slide-prev');
const slideNext = sliderIcons.querySelector('.slide-next');

const hours = date.getHours();
 

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let bgNum = String(getRandomNum(1, 20)).padStart(2, '0')
 

function getSlideNext() {
  bgNum =  (bgNum == '20') ? '01' : (+bgNum +1).toString().padStart(2, '0');
  setBg(hours);
} 

function getSlidePrev() { 
  bgNum =  (bgNum == '01') ? '20' : (bgNum- 1).toString().padStart(2, '0'); 
  setBg(hours);
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)

function setBg(hours) {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay(hours)}/${bgNum}.jpg`;
  img.addEventListener('load', () => {    
    body.style.backgroundImage = `url(${img.src})`
  }
  )
}  

setBg(hours)

export {setBg}