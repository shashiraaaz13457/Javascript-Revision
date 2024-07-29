//Primitive 
// 7types : String, Number , Boolean, null , undefined, Symbol and BigInt

//Symbol (uniqueness)
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id === anotherId);

//Referenced (Non-Primitive)
// Arrays , Object , Functions.
const myFunction = function() {
    console.log("Hello World");
}

//Stack (Primitive) ,  Heap (Non-Primitive)

//Here myYoutubename ka copy bna and woh anothername me gya and woh phir reassign hua as raj. (Primitive type)
let myYoutubename = "Shashi Raj"
let anotherName = myYoutubename
anotherName = "Raj"

// console.log(myYoutubename); //Shashi Raj
// console.log(anotherName); // Raj

//Non-primitive(Object)
let user = {
    email : "shashiraj@gmail.com",
    upi : "shashi@sbi"
}
let anotherUser = user;

anotherUser.email = "shashi@gmail.com"

// console.log(user.email); //shashi@gmail.com
// console.log(anotherUser.email); //shashi@gmail.com

//Strings

const name = "shashi"
const repoCount = 50
//String Interpolation (widely used in backend development)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Numbers
const score = 400;
// console.log(score);

const balance = new Number(100); // Here you are defining that it is Number explicitly using new keyword with Number.
// console.log(balance);

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

//Maths(Built-in library)
// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(-4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));

// console.log(Math.random()); // Generate a random value between 0 and 1.
// console.log(Math.random()*10); // b/w 0 and 10.
// console.log((Math.random() * 10) + 1); //b/w 1 and 11.
// console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1))+min);

//Dates(Object) in javascript
let myDate = new Date();
// console.log(myDate); //Something which is not readable
// console.log(myDate.toString()); // We can see proper day month date year time timezone and soon.
// console.log(myDate.toDateString()); // Day month date and year
// console.log(myDate.toLocaleString()); // Date/Month/Year , Time am/pm

// console.log(typeof myDate);


// let myCreateDate = new Date(2023,0,23); // year , month - 0 (jan) and date
// let myCreateDate = new Date(2023,0,23,5,3); //year,month,date,hour,minute
let myCreateDate = new Date("2023-01-14"); // yy/mm/dd
// console.log(myCreateDate.toLocaleString());

//TimeStamp - We use it to design Quiz (which gives the fastest answer)

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // To convert it in seconds.

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()+1); //Month starting from 0.
console.log(newDate.getDay()); //Sunday - 0

//You can also customize it according to your need.
newDate.toLocaleString('default',{
    weekday : "long",
    
})