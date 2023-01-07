import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.render();
    this.addEventListeners();
    this.setValue(value);
  }
    
makeSpans() {
    let spans = [];
    for (let i=0; i<this.steps; i++) {
    spans[i] = `<span></span>`;
}
    return spans.join('')
}

 render() {
  this.elem = createElement(`
  <div class="container" style="padding: 50px;">
  <div class="slider">
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>
    <div class="slider__steps">
    ${this.makeSpans()}
    </div>
  </div>
</div>
`)

let firstStep = this.elem.querySelector('.slider__steps span');
firstStep.classList.add('slider__step-active');
}

 /*addEventListeners() {
 let mainSlider = this.elem.querySelector('.slider');
 let thumb = this.elem.querySelector('.slider__thumb');
 let sliderValue = this.elem.querySelector('.slider__value');
 let sliderSteps = this.elem.querySelector('.slider__steps');
 let progress = this.elem.querySelector('.slider__progress');

 thumb.ondragstart = (event) => {
  event.preventDefault();
 }*/

 
 /*thumb.addEventListener('pointerdown', () => {
    let onMove = (event) => {
      if (event.target.closest('.slider')) {
        let move = event.clientX - thumb.offsetWidth / 2;
        let pos = (move - mainSlider.getBoundingClientRect().left)/
        mainSlider.offsetWidth * 100;
        //let pos2 = Math.round(pos / mainSlider.offsetWidth * (this.steps - 1));
        //let posPercent = pos2 / (this.steps - 1) * 100;
        thumb.style.left = `${pos}%`;
      }
  }
   document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', () => {
      if (thumb.style.left < '12.5%') {
        thumb.style.left = '0%'
      } else if (thumb.style.left >= '12,5%' && thumb.style.left <= '25%') {
        thumb.style.left = '25%'
      } 
      
      mainSlider.removeEventListener('pointermove', onMove);
    }, {once: true});
  
});
*/

onClick = (event) => {
  let mainSlider = this.elem.querySelector('.slider');

    if (event.target.closest('.slider')) {
      let left = (event.clientX - mainSlider.getBoundingClientRect().left) / mainSlider.offsetWidth;
      this.setValue(Math.round(left * (this.steps - 1)));
      /*let leftPercentage = (leftSteps / (this.steps - 1)) * 100;
      thumb.style.left = `${leftPercentage}%`;
      sliderValue.textContent = leftSteps;
      let arr = Array.from(sliderSteps.children);
      arr.map(e => e.classList.remove('slider__step-active'));
      arr[leftSteps].classList.add('slider__step-active');
      progress.style.width = thumb.style.left;*/

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        })
      );
      }
};


setValue(value) {
let progress = this.elem.querySelector('.slider__progress');
let thumb = this.elem.querySelector('.slider__thumb');
let sliderValue = this.elem.querySelector('.slider__value');
let sliderSteps = this.elem.querySelector('.slider__steps');
this.value = value;
let valuePercentage= (value / (this.steps - 1)) * 100;
thumb.style.left = `${valuePercentage}%`;
progress.style.width = thumb.style.left;
sliderValue.innerHTML = value;
let arr = Array.from(sliderSteps.children);
      arr.map(e => e.classList.remove('slider__step-active'));
      arr[this.value].classList.add('slider__step-active');

};

addEventListeners() {
  this.elem.onclick = this.onClick
};
      

 };