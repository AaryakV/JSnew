//Object types: 
//Type 1 : singleton(from constructors:Object.create)

//type 2: object literals

const mySym = Symbol("key1")
//console.log(typeof(mySym))

const JsUser = {
    name: "lord",
    "full name": "lord Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Moscow",
    email: "lord@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
console.log(JsUser["email"])
JsUser.email = "lord@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "lord@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 