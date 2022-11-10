import { changeDots, nextPic, prevPic } from './slider';

const left = document.querySelector('.left');
const right = document.querySelector('.right');


function init() {
left.addEventListener('click', () => {
  prevPic();
})
right.addEventListener('click', () => {
  nextPic();
})
changeDots();
};

setInterval(nextPic, 5000);

export default init;