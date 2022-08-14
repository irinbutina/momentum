import "./css/style.css";
import { showTime } from "./js/time";
import {getWeather} from './js/weather';
import {getQuotes} from './js/quotes';
import {createPlayList} from './js/player';

// localStorage.clear()
// console.log(localStorage)

showTime(); 
// getWeather()
document.addEventListener('DOMContentLoaded', getWeather);
getQuotes();
createPlayList();