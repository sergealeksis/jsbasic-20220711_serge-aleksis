function camelize(str) {
return str.split('-')
.map((element, index) => index !== 0 ? element[0].toUpperCase() + element.slice(1) : element)
.join('')
}
