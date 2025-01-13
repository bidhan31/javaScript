
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "bormon"
tinderUser.isloggedIn = false

//console.log(tinderUser)

const regulerUser = {
    email : "bormon404@gmail.com",
    fullname: {
        userName : {
            firstname : "Bormon",
            lastname : "bidhan"
        }
    }
}
//console.log(regulerUser)
//console.log(regulerUser.fullname)
//console.log(regulerUser.userName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {...obj1, ...obj2}
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


