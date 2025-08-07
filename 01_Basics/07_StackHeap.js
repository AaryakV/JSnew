//Stacks(for Primitive) and Heaps(for Reference)
 let userName1 = "lebron3";
 let userName2 = userName1;
 userName2 = "StephCurry";
// console.log(userName1);
//console.log(userName2);
 
 //this goes on to show that a copy of userName1 was provided to userName2, not the original value

let userOne=
{
 uid: "jadoo234",
 pin: 1234
}
 let userTwo = userOne;
 userTwo.pin=7890;
 console.log(userOne);

 //Changed value in userOne shows that: Variables hold not a copy or the actual object, but a reference to the memory location(on the heap) where object is stored.