const score = 400

const balance = new Number(100)
//console.log(balance)

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 120.94887
//console.log(otherNumber.toPrecision(3))

const hundreds = 1000000000000
//console.log(hundreds.toLocaleString())


//************maths****************** 

console.log(Math);

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))

console.log(Math.min(4,6,4,9,7,2))
console.log(Math.max(4,5,8,9,3,6,33))
console.log(Math.random())

const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1) )+ min)