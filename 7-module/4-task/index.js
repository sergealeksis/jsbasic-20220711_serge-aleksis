<<<<<<< HEAD
import createElement from "../../assets/lib/create-element.js";
=======
import createElement from '../../assets/lib/create-element.js';
>>>>>>> 03bfdb2b754a806b000f157feecd9256534e3237

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
<<<<<<< HEAD
    this.render();
    this.setValue(value);
    this.addEventListener();
  
=======
    this.segments = steps - 1;
    this.render();

    this.addEventListeners();

    this.setValue(value);
>>>>>>> 03bfdb2b754a806b000f157feecd9256534e3237
  }

  render() {
    this.elem = createElement(`
<<<<<<< HEAD
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value"></span>
      </div>
      <div class="slider__progress" style="width: 50%;"></div>
      <div class="slider__steps">
      ${'<span></span>'.repeat(this.steps)}
      </div>
    </div>
  </div>
  `)

  let firstStep = this.elem.querySelector('.slider__steps span');
  firstStep.classList.add('slider__step-active');
  }
}
  setValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  addEventListeners() {
    this.sub('thumb').ondragstart = () => false;

    this.sub('thumb').onpointerdown = this.onPointerDown;

    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  onPointerDown = event => {
    event.preventDefault();

    this.elem.classList.add('slider_dragging');

    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  }

  onPointerMove = event => {
    event.preventDefault();

    let newLeft = this.calcLeftByEvent(event);

    this.sub('thumb').style.left = `${newLeft * 100}%`;
    this.sub('progress').style.width = `${newLeft * 100}%`;

    // Show the nearest value
    // First half of step is 1, et
    // |-------|-------|-------|-------|
    // | 1 /   2   /   3   /   4   / 5 |
    this.value = Math.round(this.segments * newLeft);
    this.sub('value').innerHTML = this.value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  };

  calcLeftByEvent(event) {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    if (newLeft < 0) { newLeft = 0; }
    if (newLeft > 1) { newLeft = 1; }

    return newLeft;
  }

  onPointerUp = () => {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);

    this.elem.classList.remove('slider_dragging');

    // stick to the final value
    this.sub('thumb').style.left = `${(this.value / this.segments) * 100}%`;
    this.sub('progress').style.width = `${(this.value / this.segments) * 100}%`;

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  };

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

>>>>>>> 03bfdb2b754a806b000f157feecd9256534e3237
}

  addEventListener() {
    this.elem.onclick = this.onClick;
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;
    thumb.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      document.addEventListener('pointermove', this.onDrag);
      document.addEventListener('pointerup', (event) => {
        event.preventDefault();
        document.removeEventListener('pointermove', this.onDrag)
        let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
        if (left < 0) {
          left = 0
        };
        if (left > 1) {
          left = 1
        };
        this.setValue(Math.round(left * (this.steps - 1)));
        this.elem.classList.remove('slider_dragging');
        
        this.elem.dispatchEvent(
          new CustomEvent('slider-change', {
            detail: this.value,
            bubbles: true
          })
        );
      });


    })
    
  }
  
  setValue(value) {
    let progress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderSteps = this.elem.querySelector('.slider__steps');
    this.value = value;
    let valuePercentage = (value / (this.steps - 1)) * 100;
    thumb.style.left = `${valuePercentage}%`;
    progress.style.width = thumb.style.left;
    sliderValue.innerHTML = value;
    let arr = Array.from(sliderSteps.children);
      arr.map(e => e.classList.remove('slider__step-active'));
      arr[this.value].classList.add('slider__step-active');
  }

  onClick = (event) => {
        let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
        this.setValue(Math.round(left * (this.steps - 1)));

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        })
      )   
  }

  
  onDrag = (event) => {
    event.preventDefault();
    if (event.target.closest('.slider')) {
    this.elem.classList.add('slider_dragging');
    let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    if (left < 0) {
      left = 0
    };
    if (left > 1) {
      left = 1
    }
    this.setValue(Math.round(left * (this.steps - 1)));
    let progress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.style.left = `${left * 100}%`;
    progress.style.width = thumb.style.left;

    }
  };

  
}
  