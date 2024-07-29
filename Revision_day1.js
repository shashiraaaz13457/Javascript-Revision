
//Let var and Const
const shashi = 15;
// shashi = 20;
// console.log(shashi);
{
    let raj;
    // let raj;
    // console.log(raj);
}

let Anika = 'Tanmay';
let Tanvi = 'Rahangdale';
// More than one output then
// console.table([Anika,Tanvi]);

let accountEmail = "shashiraj13457@gmail.com";
var accountPassword = "12345";
let accountState ;
// console.table([accountEmail,accountPassword,accountState]);

//Data Types
// let length = 7.888; // Number
// let Color = 'Blue'; //String
// let x = true; // Boolean
// if(x == true){
//     return false;
// }
//Concept of Javascript
let c = 123 + " shashi"; // Here the code will not throw error in Javascript. It'll take it as the string.
// console.log(c);
// console.log(typeof(c));
//Note:- When we adding a number and a string . Javascript will treat the number as a string.
let x = 16 + 5 + " shashi"; //Firstly add and then return as a string.
// console.log(x);
// console.log(typeof(x));
//Note:- Javascript evaluates expression from left to right. Different sequence can produce different results.

//Exponential Notation
let y= 123e5;
// console.log(y);

//Note:- Javascript number are always one type: double (64-bit floating point).
//BigInt - Used to Store very big number .
let xx = BigInt(14678998090123467423078); //Ending with n.
// console.log(xx);

//Javascript Arrays - Written with Square Brackets(Seperated by commas).
const car = ["Mercedes", "Suzuki" , "Volvo"];
// console.log(car);

//Javascript Objects - Objects are written with curly braces {}.
const Person = {
    firstName : "Shashi",
    lastName : "Raj",
    age : 60
};


//Conversion Operators
let score = "330abc";
// console.log(typeof score);

let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber); //NaN

//"33" => 33
// "33abc" => NaN (Type -> Number)
//true => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 => true; 0 => false; "" => false ; "somevalue" => true;

//******Operations*********
let str1 = "Hello"
let str2 = " Shashi"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(typeof ("1" + 2));
// console.log(1 + "2");//12
// console.log(typeof (1 + "2"));
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2");//32

//Comparison Operators

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);// Here null is converted to a number, treating it as 0.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// == and === works differently from >,<  .

// === checks value as well as datatypes
console.log("2" === 2);// false
console.log("2" == 2); //true

