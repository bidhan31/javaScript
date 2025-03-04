
let a = 300                           // global scope

if(true){
    let a = 40         
    const b = 60                      // block scope -> carly braket
    var c = 79
    //console.log("inner:", a)
}

//console.log(a)

function one(){
    const username = "bormon"

    function two(){
        const website = "youtube"
        console.log(username)

    }
    //console.log(website)

    two()
}
one()

if(true){
    const username = "bormon"
   
    if(username === "bormon"){
        const website = "google"
        console.log(username + website)
    }
    //console.log(website)


}


// ..................interesting.............


console.log(addone(4))
function addone(num){
    return num + 1

   
}


const addtwo = function(num){
    return num + 3
}
console.log(addtwo(6))
