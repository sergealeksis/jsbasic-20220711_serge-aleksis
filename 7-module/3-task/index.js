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
=======
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
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

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

>>>>>>> 03bfdb2b754a806b000f157feecd9256534e3237
}

  addEventListener() {
    this.elem.onclick = this.onClick;
    this.elem.ondrag = this.onDrag;
    
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
    this.thumb.ondragstart = (event) => {
      event.preventDefault();
  }

  this.thumb.addEventListener('pointerdown', () => {
    let mainSlider = this.elem.querySelector('.slider');
    this.mainSlider.classList.add('slider_dragging')
    let onMove = (event) => {
      if (event.target.closest('.slider')) {
        this.thumb.style.left = `${this.valuePecentage}%`;
        this.progress.style.width = this.thumb.style.left;
      }
  }
   document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', () => {
      mainSlider.removeEventListener('pointermove', onMove);
      mainSlider.classList.remove('slider_dragging');

    }, {once: true});
  
});
  


  }
  

  
  
}