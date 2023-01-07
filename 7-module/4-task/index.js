import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.render();
    this.setValue(value);
    this.addEventListener();
  
  }

  render() {
    this.elem = createElement(`
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
  