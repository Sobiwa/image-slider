const pictures = document.querySelector('.pictures');
const slides = document.querySelectorAll('.pic');
const dotTracker = document.querySelector('.dot-tracker');

const slidesArray = [...slides];
const { length } = slidesArray;
const width = 80;
const lastSlide = `${(length - 1) * width * -1}vw`;

pictures.style.translate = 0;
const currentIndex = () => (pictures.style.translate.slice(0, -2) * -1) / width;

function changeDots() {
  const index = currentIndex();
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add('current-dot')
    } else {
      dot.classList.remove('current-dot');
    }
  })
}

function prevPic() {
  const index = currentIndex();
  if (index === 0) {
    pictures.style.translate = lastSlide;
  } else {
    const prevTranslate = `${(index - 1) * width * -1}vw`;
    pictures.style.translate = prevTranslate;
  }
  changeDots();
}

function nextPic() {
  const index = currentIndex();
  if (index === [...slides].length - 1) {
    pictures.style.translate = '0px';
  } else {
    const nextTranslate = `${(index + 1) * width * -1}vw`;
    pictures.style.translate = nextTranslate;
  }
  changeDots();
}

slides.forEach((slide) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    const translate = `${slidesArray.indexOf(slide) * -80}vw`;
    pictures.style.translate = translate;
    changeDots();
  });
  dotTracker.append(dot);
});

export { nextPic, prevPic, changeDots };
