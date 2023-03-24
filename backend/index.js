/*
console.log("Hello World!")

let a = 5
console.log(a)

const b = 8
console.log(b)

var c = 10
console.log(c)

if(a==5){
    console.log("Hi")
}else{
    console.log("Wo")
}


// Pure function
function addition(){
    let a=5
    let b=7
    return a+b
}
console.log(addition())


// Impure function
function addition(a,b){
    return a+b
}
console.log(addition(6,8))


// Callback function
// function addition(a,b, callback){
//     callback()
//     return a+b
// }
// console.log(addition(6,8,fun))


// Arrow function
const fun1 = () => {
    console.log('arrow')
}
fun1()
*/

// npm install express
// Express is a light weight Web Framework
// npm install nodemon
// npm nodemon index.js
/*
CRUD | HTTP Requests
C = Create | POST
R = Read | GET
U = Update | PUT
D = Delete | DELETE
*/

const express = require('express')

const app = express()

// Rout
app.get('/hello', (req, res)=>{
    res.send('Hello World - GET')
})

// Rout
app.post('/hello', (req,res) =>{
    res.send("Hello World - POST")
})

// Rout
app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000/")

})




