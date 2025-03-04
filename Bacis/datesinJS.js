// Dates

let mydate = new Date
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)


let mycreatedDate = new Date(2025, 0, 11)
console.log(mycreatedDate.toDateString())
console.log(mycreatedDate.toLocaleString())


let mytTimeStamp = Date.now()
console.log(mytTimeStamp)                                  // mili-second
console.log(mycreatedDate.getTime())                             //

console.log(Math.floor(Date.now()/1000))                      //second


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
  

})
