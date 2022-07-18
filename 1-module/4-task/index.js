function checkSpam(str) {
let lowText = str.toLowerCase();
if (lowText.includes('1xbet') || lowText.includes('xxx')) {
  return true
} else {
  return false
}
}
