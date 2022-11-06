import createElement from '../../assets/lib/create-element.js';
<<<<<<< HEAD
=======
import escapeHtml from '../../assets/lib/escape-html.js';
>>>>>>> 15ead4ad117b5b96b7a71138857c3a25d7b4b5f6

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
<<<<<<< HEAD
    this.elem.addEventListener('click', this.onClick);
  }

  render() {
  this.elem = createElement(`
  <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
  </div>
   `);
};

onClick = () => { 
  const clickEvent = new CustomEvent ("product-add", {
    detail: this.product.id,
    bubbles: true
  });

  this.elem.dispatchEvent(clickEvent);
}
=======
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`<div class="card">
      <div class="card__top">
        <img
          src="/assets/images/products/${this.product.image}"
          class="card__image"
          alt="product"
        />
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(this.product.name)}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>`);
  }

  addEventListeners() {
    this.elem.onclick = (event) => this.onClick(event);
  }

  onClick(event) {
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    }));
  }
>>>>>>> 15ead4ad117b5b96b7a71138857c3a25d7b4b5f6
}
