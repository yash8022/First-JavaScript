//dates

let myDate =new Date()
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("12-30-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate =new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

newDate.toLocalString('default',{
    weekday: 'long'
})