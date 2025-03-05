
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "bormon"
tinderUser.isloggedIn = false

console.log(tinderUser)

const regulerUser = {
    email : "bormon404@gmail.com",
    fullname: {
        userName : {
            firstname : "Bormon",
            lastname : "bidhan"
        }
    }
}
console.log(regulerUser)
console.log(regulerUser.fullname)
console.log(regulerUser.userName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {...obj1, ...obj2}
 const obj3 = Object.assign({}, obj1, obj2)
 console.log(obj3)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('isloggedIn'));


//....................object de-structure 

const course ={
    couresname: "Js in Bangla",
    price: "999",
    courseInstructor : "bormon"

}
const {courseInstructor : instructor} =course
console.log(instructor)


// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Efe",
//           "last": "Solmaz"
//         },
//         "location": {
//           "street": {
//             "number": 9459,
//             "name": "Filistin Cd"
//           },
//           "city": "Kahramanmaraş",
//           "state": "Edirne",
//           "country": "Turkey",
//           "postcode": 38207,
//           "coordinates": {
//             "latitude": "68.1407",
//             "longitude": "-59.9868"
//           },
//           "timezone": {
//             "offset": "-2:00",
//             "description": "Mid-Atlantic"
//           }
//         },
//         "email": "efe.solmaz@example.com",
//         "login": {
//           "uuid": "4b5f9945-bc48-4f5b-8a3e-b77d5f5ac685",
//           "username": "blueswan753",
//           "password": "niang",
//           "salt": "RWsG9xRV",
//           "md5": "42fd052fb5769623cb402d268276ab3a",
//           "sha1": "525a2b0c301dd5c7f44060758db3653d74c28e00",
//           "sha256": "05b6e5a86861c4b2ecf48fae1097d272b384a0d2623a1739b8b1869149baa816"
//         },
//         "dob": {
//           "date": "1970-11-25T21:30:25.999Z",
//           "age": 54
//         },
//         "registered": {
//           "date": "2011-09-09T12:10:38.637Z",
//           "age": 13
//         },
//         "phone": "(393)-674-5341",
//         "cell": "(402)-291-9593",
//         "id": {
//           "name": "",
//           "value": null
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/87.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
//         },
//         "nat": "TR"
//       }
//     ],
//     "info": {
//       "seed": "b71b5cbdfa2a29ab",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }