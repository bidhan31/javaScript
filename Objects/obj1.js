
const JsUser = {
    name: "Bormon",
    age: 24,
    Email: "bormon404@gmail.com",
    isoLoggedIn : false,
    lastdayLogin : ["monday", "friday"]

}

console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Js")

}

JsUser.greetingtwo = function(){
    console.log(`hello js, ${this.name}`)
}

console.log(JsUser.greetingtwo())
console.log(JsUser.greeting())

