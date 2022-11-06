import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();    
    this.initCarousel();
    this.onPlusClick();
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
        <div class="carousel__inner"></div>
    </div>
  `);

  let slides = this.slides.map(e => createElement (`
  <div class="carousel__slide" data-id="${e.id}">
    <img src="/assets/images/carousel/${e.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${e.price.toFixed(2)}</span>
          <div class="carousel__title">${e.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
  </div>
  `))

    this.elem.querySelector('.carousel__inner').append(...slides);
}


  initCarousel() {
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let toMove = this.elem.querySelector('.carousel__inner');
    let slides = this.elem.querySelectorAll('.carousel__slide');
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
  };  

    onPlusClick() {
      this.elem.onclick = (event) => {
        let plusButton = event.target.closest('.carousel__button');
        if (plusButton) {
          let id = event.target.closest('[data-id]').dataset.id;

          const productAdd = new CustomEvent('product-add', {
            bubbles: true,
            detail: id
          });

          this.elem.dispatchEvent(productAdd);
        }
        
      }
}

}