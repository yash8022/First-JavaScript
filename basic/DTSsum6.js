//Data  types of two types only 
//Permitive--
//7 types: String,Number,Boolean,null,undefined,BigInt,Symbol.

 const score = 100
 const scoreValue=100.3

 const isLoddedIn= false
 const outsideTemp=null;
 let userEmail=undefined;

 const id=Symbol('123')
 const anotherId=Symbol('123') 

 console.log(id===anotherId);

 const bigNumber=232253538483532324425n
//js is dynamically Typed language assigned at the time of
//compilation or code exection



//Reference(Non Pimitive)--
//3 types: Array,Objects,Functions.

const heroos=["yash","ash","Khushi"]

let myobj={
   name:"Yash",
   age: 20,
}

const myFunction = function(){
    console.log("Hello Wold");
}

console.log(typeof myFunction);

console.log("yash")

console.log("Singh")