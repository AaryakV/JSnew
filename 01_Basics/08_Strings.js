const naam = "aari";
const repoCount = 50;

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${naam} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('harley.com')

 //console.log(gameName[0]);
 //console.log(gameName.__proto__); // used to access the prototype of an obj, which is another obj where it inherits from


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

//const newString = gameName.substring(-4, 9); no use of a -ve key no.
//console.log(newString);

//const anotherString = gameName.slice(-8, 5)
//console.log(anotherString);

//const newStringOne = "   hitesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://chocolate.com/caramel%20nougat"

console.log(url.replace('%20', '-'))

console.log(url.includes('amel'));

console.log(gameName.split('.'));