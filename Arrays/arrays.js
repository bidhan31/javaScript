// arrays 

const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["ggfghfh", "hbfhfhfh"]

//console.log(myArray[0])

const myArra2 = new Array(1, 2, 3, 4)
//console.log(myArra2[0])


//Arrays Methods.....................

myArray.push(6)
myArray.push(7)
myArray.pop()

myArray.unshift(9)                         // insert at first
myArray.shift()
//console.log(myArray)

//console.log(myArray.includes(9))
//console.log(myArray.indexOf(5))


const newArr = myArray.join()
//console.log(myArray)
//console.log(newArr)


// slice , splice.......

console.log("A", myArray)
const myn1 = myArray.slice(1, 4)
console.log(myn1)

console.log("B", myArray)
const myn2 = myArray.splice(1, 4)
console.log(myn2)

