const name = "Bormon"
const repocount = 50
console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const gameName = new String('Bormon')
console.log(gameName[0])
console.log(__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));

console.log(gameName.indexOf('o'));


const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-5, 2)
console.log(anotherString)

const newStringOne = "   Bormon "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://bormon.com/bormon30% bidhan"
console.log(url.replace('%30', '-'))
