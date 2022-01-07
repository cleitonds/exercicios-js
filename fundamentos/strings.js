// string é um cadeia de delimitado por "", '' ou por crase. 

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
// console.log('Escola ' + escola + "!") outro exemplo de concatenação, como .log acima.
console.log(escola.replace (3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))
