import playList from './playList';

const player = document.querySelector('.player');
const playPrevBtn = player.querySelector('.play-prev');
const playNextBtn = player.querySelector('.play-next');
const play = player.querySelector('.play');
const playListContainer = player.querySelector('.play-list');


const audio = new Audio();

function createPlayListMarkup() { 
  playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title; 
    playListContainer.append(li);
  })   
}

let isPlay = false;
let playNum = 0;

function toggleBtn() {
  play.classList.toggle('pause');
} 

function removeClassActive() {
  document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
}

function playAudio() {
  
  console.log(`isPlay ` + isPlay)
  if(!isPlay) {
    console.log(isPlay)
    isPlay = true; 
    audio.src = playList[playNum].src; 
    audio.play();
    toggleBtn();
    document.querySelectorAll('.play-item')[playNum].classList.add('item-active');
  } else {
    console.log(isPlay)
   isPlay = false; 
   toggleBtn();
   audio.pause();
  } 
}

function onClickPrev() { 
  removeClassActive();
  if (playNum <= 0) {
    playNum = playList.length - 1;
  } else {
      playNum--;
  }
  if (isPlay === true) {
    playAudio();
    console.log('в if')
  }
  playAudio();  
  console.log('за if')
}
  
function onClickNext() {
  removeClassActive(); 
  if (playNum >= playList.length - 1) {
    playNum = 0;
  } else {
      playNum++;
  } 
  if (isPlay) {
    playAudio();
  }
  playAudio();

}

play.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', onClickNext);
playPrevBtn.addEventListener('click', onClickPrev);
 
function createPlayList() {
  createPlayListMarkup();   
}


export {createPlayList}