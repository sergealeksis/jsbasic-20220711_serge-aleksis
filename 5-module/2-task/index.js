function toggleText() {
const text = document.getElementById('text');
const bttn = document.querySelector('.toggle-text-button');
 
bttn.onclick = () => text.toggleAttribute("hidden");

}
