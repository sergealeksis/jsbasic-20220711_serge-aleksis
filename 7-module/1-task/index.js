import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
    </nav>
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

    let categories = this.categories.map(e => createElement(`
    <a href="#" class="ribbon__item" data-id="${e.id}">${e.name}</a>
    `))

    this.elem.querySelector('.ribbon__inner').append(...categories)
  }


addEventListeners() {
  let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
  let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
  let toMove = this.elem.querySelector('.ribbon__inner');

  arrowRight.onclick = (event) => this.arrowRightClick(event);
  arrowLeft.onclick = (event) => this.arrowLeftClick(event);
  toMove.onscroll = (event) => this.onScroll(event);
  this.elem.onclick = (event) => {
    let item = event.target.closest('.ribbon__item');

    if (!item) {
      return

      
    }
    event.preventDefault();
    let allItems = this.elem.querySelectorAll('.ribbon__item');
    for (let i of allItems) {
      i.classList.remove('ribbon__item_active')
    }
      item.classList.add('ribbon__item_active')

      const ribbonSelect = new CustomEvent('ribbon-select', {
        detail: item.dataset.id,
        bubbles: true
      })

      this.elem.dispatchEvent(ribbonSelect);
  }
  




}

arrowRightClick(event) {
  this.elem.querySelector('.ribbon__inner').scrollBy(350,0);
  this.arrowUpdate();
};    

arrowLeftClick(event) {
  this.elem.querySelector('.ribbon__inner').scrollBy(-350,0);
  this.arrowUpdate();
} 

onScroll(event) {
  this.arrowUpdate();
}

scrollLeft() {
  return this.elem.querySelector('.ribbon__inner').scrollLeft
}

scrollRight() {
  let toMove = this.elem.querySelector('.ribbon__inner');
  return toMove.scrollWidth - (toMove.scrollLeft + toMove.clientWidth)
}


arrowUpdate() {
  let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
  let arrowLeft = this.elem.querySelector('.ribbon__arrow_left'); 
  if (this.scrollLeft() > 0) {
    this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible')
  } else {
    this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible')
  } 
  
  let scrollRight = this.scrollRight();
  scrollRight = scrollRight < 1 ? 0 : scrollRight;
  if (scrollRight > 0) {
    this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible')
  } else {
    this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible')
  }
}
  

  
}
