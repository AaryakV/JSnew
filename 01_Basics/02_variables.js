const accountID= 2398;
let accountEmail = "aaryakv@hotmail";
var accountType = "Savings"; 
/*
var is not preferred due to block scope and
function scope limitations 
*/
accountCity = "Lucknow"; //shouldn't be used
let accountState; //will show undefined
console.log(accountID);
console.table([accountEmail, accountType, accountCity, accountState]);