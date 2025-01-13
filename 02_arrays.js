
const a = ["bormon", "Bidhan", "Chandro"]
const b = ["voxel", "Jonogon"]

const bc = a.concat(b)
console.log(bc)
//////

const mg = [...a, ...b]
console.log(mg)

const anotherArr = [1, 2, 3, [4, 6, 7], 8, 9, [10, 11, 12, [14, 45]]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr)



console.log(Array.isArray("Bormon"))
console.log(Array.from("Bormon"))


let score1 = 100
let score2 = 150
let score3 = 170        
console.log(Array.of(score1, score2, score3))

