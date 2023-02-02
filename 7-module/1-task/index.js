import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
<<<<<<< HEAD
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
  

  
=======

    this.render();
    this.addEventListeners();
    this.value = '';
  }

  render() {
    this.elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
        </button>
        <nav class="ribbon__inner"></nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
        </button>
      </div>
    `);

    for (let category of this.categories) {
      let categoryElem = createElement(`<a href="#" class="ribbon__item"></a>`);
      categoryElem.textContent = category.name; // insert as text, not as HTML!
      categoryElem.dataset.id = category.id;
      this.elem.querySelector('.ribbon__inner').append(categoryElem);
    }

    this.sub('item').classList.add('ribbon__item_active');
  }

  addEventListeners() {
    this.sub('arrow_left').onclick = (event) => this.onArrowLeftClick(event);
    this.sub('arrow_right').onclick = (event) => this.onArrowRightClick(event);

    this.elem.onclick = (event) => {
      let itemElem = event.target.closest('.ribbon__item');
      if (itemElem) {
        this.onItemClick(itemElem);
        event.preventDefault();
      }
    };

    this.sub('inner').onscroll = (event) => this.onScroll(event);
  }

  onArrowRightClick(event) {
    let offset = 350;
    this.sub('inner').scrollBy(offset, 0);
    this.updateArrows();
  }

  onArrowLeftClick(event) {
    let offset = 350;
    this.sub('inner').scrollBy(-offset, 0);
    this.updateArrows();
  }

  onItemClick(itemElem) {
    let oldActive = this.sub('item_active');
    if (oldActive) {
      oldActive.classList.remove('ribbon__item_active');
    }

    itemElem.classList.add('ribbon__item_active');

    this.value = itemElem.dataset.id;

    this.elem.dispatchEvent(
      new CustomEvent('ribbon-select', {
        detail: this.value,
        bubbles: true,
      })
    );
  }

  onScroll(event) {
    this.updateArrows();
  }

  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`);
  }

  scrollRight() {
    return this.sub('inner').scrollWidth - (this.sub('inner').scrollLeft + this.sub('inner').clientWidth);
  }

  scrollLeft() {
    return this.sub('inner').scrollLeft;
  }

  updateArrows() {
    if (this.scrollLeft() > 0) {
      this.sub('arrow_left').classList.add('ribbon__arrow_visible');
    } else {
      this.sub('arrow_left').classList.remove('ribbon__arrow_visible');
    }

    let scrollRight = this.scrollRight();
    scrollRight = scrollRight < 1 ? 0 : scrollRight; // Это нужно для ситуации, когда скролл произошел с погрешностью
    if (scrollRight > 0) {
      this.sub('arrow_right').classList.add('ribbon__arrow_visible');
    } else {
      this.sub('arrow_right').classList.remove('ribbon__arrow_visible');
    }
  }

>>>>>>> 03bfdb2b754a806b000f157feecd9256534e3237
}
