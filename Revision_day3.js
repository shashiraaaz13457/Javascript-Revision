// Array
const myArr = [0,1,2,"shashi",true] //Need not to be 0f same datatype.
// Array is resizable

// console.log(myArr[3]); // To access element
// Array-copy operations create shallow copies.

//Shallow v/s deep copy
//Shallow copy of an object is a copy whose properties share the same reference point.(original wale array me change hoga)

//Deep copy of an object is a copy whose properties do not share the same references point.

//Array Methods

// myArr.push(60)
// console.log(myArr);
// myArr.pop() // Last element is deleted.
// console.log(myArr);

// myArr.unshift(9); // Add element in the first of array.
myArr.shift() //Remove the element from the first in array.
// console.log(myArr);

// console.log(myArr.includes(9)); //Finding whether the array contain 9 or not.

// console.log(myArr.indexOf(9)); // Finding the index of 9 , if not present returning -1.

const newArr = myArr.join() //join converts array into a string seperated by commas.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);//String

//Slice and Splice
// const myArr1 = [1,2,3,4,5]
// const myn1 = myArr1.slice(1,3) // donot include last index i.e 3
// console.log(myArr1);
// console.log(myn1); 
// console.log(myArr1); //Slice donot change the original array

// const myn2 = myArr1.splice(1,3)
// console.log(myn2); //Include the last index 
// console.log(myArr1); //Original array gets changed.

const marvel_heros = ["IronMan", "Spiderman","Hulk"]
const dc_heros = ["Batman","Superman","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //Treating the whole array as a single element.
// console.log(marvel_heros[3][1]); //Superman
//Not a good syntax.

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);//Here it's printing the marvel_heros only not the dc_heros 

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //Now it's merging the two array and return a new array without modifying the existing array.
// console.log(marvel_heros);

//Spread Operator (better to use spread operator than concat (you can use both same thing is done by both))
const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(1); //Solve only till one depth.
// console.log(real_another_array);

const real_another_array1 = another_array.flat(Infinity); //Solve all and return in one single array.
console.log(real_another_array1);

//Data scrapping use
console.log(Array.isArray("Hitesh")); //Asking is this array?
console.log(Array.from("Hitesh")); //Convert the value in array.

// Object in javascript
// Singleton 
// Objects constructor - Singleton (single instance)
// Objects literals - Not singleton

const mySymbol = Symbol("key1") // Symbol syntax
const Jsuser = {
    name : "shashi",
    "full name" : "Shashi raj",
    [mySymbol] : "mykey1",
    age : 18,
    location : "Bhopal",
    email : "shashiraj13457@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySymbol]); // Access v issi tarah se hoga.
// console.log(typeof Jsuser[mySymbol]);

Jsuser.email = "shashi@google.com";
// Object.freeze(Jsuser) // You can freeze the object if you don't want to change the object.
Jsuser.email = "shashi@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function (){
    console.log("Hello JsUser!");
}
console.log(Jsuser.greeting);

Jsuser.greeting2 = function (){
    console.log(`Hello JsUser!, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());