const name="Yash Pal Singh"
const repoCount=1
// console.log(name+ repoCount+" Value");
// console.log(name+ repoCount+" Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('gta-vice-city')
console.log(gameName);
console.log(gameName[4]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('vice'));
const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-11,11)
console.log(anotherString);

const newStringOne="   yash  pal singh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://yashpalsingh.com/yash%20pal"

console.log(url.replace('%20','-'));

console.log(url.includes('yash'))

console.log(gameName.split('-'))