// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);      //named iife 

})();
//chai()

// ..........()()

( (name) => {
    console.log(`BD Connected two ${name}`)             //arrow function

} )('Bormon')

