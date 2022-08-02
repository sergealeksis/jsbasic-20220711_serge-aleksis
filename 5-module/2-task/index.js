function toggleText() {
const text = document.getElementById('text');
const bttn = document.querySelector('.toggle-text-button');
 
bttn.onclick = function () {text.toggleAttribute("hidden")};

}
