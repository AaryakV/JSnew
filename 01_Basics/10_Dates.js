let myDate = new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toUTCString());// as per UTC time
//console.log(myDate.toLocaleDateString());
//let myNewDate = new Date(2025, 12, 59);
//console.log(myNewDate.toDateString());
//console.log(myNewDate.toLocaleString());
//console.log(myNewDate.toLocaleTimeString());
//console.log(myNewDate.toISOString());
//console.log(myNewDate.toJSON());//same as ISOString()
//console.log(myNewDate.toTimeString());
//console.log(myNewDate.toUTCString());
//console.log(myNewDate.toLocaleDateString());
//if we do (2025, 12, 13), the month circles back to January and so on
//similar concept for dates
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date("07-26-2025");
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

