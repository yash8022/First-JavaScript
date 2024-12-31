const marvel_heros =["thor","walker","spiderman"]
const dc_heros=["superman","batman","cyberbog"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// array ka andra array agaya hai

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

//spread is main method used for concat of arrays

const all_new_heros =[...marvel_heros,...dc_heros ]
console.log(all_new_heros)

const another_array =[1,2,3,4,[5,6,7,8],[9,10,11]]

const real_anothor_array= another_array.flat(Infinity)
console.log(real_anothor_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

