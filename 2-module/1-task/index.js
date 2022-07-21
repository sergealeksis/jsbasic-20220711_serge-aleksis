function sumSalary(obj) {
let sum = 0;
for (let key in obj) {
  if (typeof obj[key] == 'number' && Number.isFinite(obj[key])) {
    sum += obj[key];
  }
}
return sum
}
