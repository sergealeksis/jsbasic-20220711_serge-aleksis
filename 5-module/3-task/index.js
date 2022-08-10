function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let toMove = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');
  let position = 0;
  arrowLeft.style.display = 'none';
  
  arrowRight.onclick = function() {
    if (position === toMove.offsetWidth * (slides.length - 2)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    };
    arrowLeft.style.display = '';

   return toMove.style.transform = `translateX(${-(position += toMove.offsetWidth)}px)`;
  };

  arrowLeft.onclick = function() {
    if (position === toMove.offsetWidth) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = ''
    };
      arrowRight.style.display = '';

    return toMove.style.transform = `translateX(${-(position -= toMove.offsetWidth)}px)`;
  };
}

  
