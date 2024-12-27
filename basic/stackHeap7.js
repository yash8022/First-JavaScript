// Stack is used in all Primitive Type.
// Heap is used in all Non-Primitive Type.

let myYtname="Russian Professor"

let anotherName=myYtname //primitive
anotherName="Yash"

console.log(anotherName)
console.log(myYtname)

let userOne={
    email:"ypal71786@gmail.com",//non primitive
    upi:"user@ybl"
}
let userTwo =userOne
userTwo.email ="zoomapp8022@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)