import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.elem.addEventListener('click', (event) => this.onClick(event));

  }

  render() {
    this.elem = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
        <div class="modal__body">  
        </div>
      </div>
    </div> 
    `)
  };

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    this.closeByEscape = (event) => this.onKeyDown(event)
    document.addEventListener('keydown', this.closeByEscape);
  };

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.closeByEscape);
  };

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
  let nodeContent = this.elem.querySelector('.modal__body');
  nodeContent.innerHTML = '';
  nodeContent.append(node);
  }

  onClick(event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }

  }

  onKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }

  }


}