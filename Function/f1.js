
/*function add(a, b){
    //console.log(a + b)

}
 add(5, 7)*/


 function add(a, b){
    //let result = a + b
   // return result
   return a + b 
}
 const result = add(5, 8)
//console.log("result",result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter your username")
        return
    } 
    return `${username} just logged in`
}
//console.log(loginUserMessage("bormon"))
//console.log(loginUserMessage())

function calculateCartprice(...num1){
    return num1
}
//console.log(calculateCartprice(200, 400, 600, 900))

const user = {
    username : "borrmon",
    price : 777
}
function handelObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
//handelObject(user)
handelObject({
    username: "bidhen",
    price: 889
})

const myNewArray = [299, 777, 888, 900]
function returnsecondValue(getArray){
    return getArray[3]

}
console.log(returnsecondValue(myNewArray))