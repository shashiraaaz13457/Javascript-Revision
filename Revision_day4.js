// Object declaration as constructor - singleton
// const tinderUser = new Object() // Singleton Object
const tinderUser = {} //Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "shashiraj@google.com",
    fullname : {
        userfullname: {
            firstname: "Shashi",
            lastname: "Raj"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//Combining Objects
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = {obj1,obj2}
//Object.assign(target({}),source (obj1,obj2))
// const obj3 = Object.assign({},obj1,obj2) // To assign two different object in one.

const obj3 = {...obj1,...obj2}
// console.log(obj3);

//Object Inside Array
const users = [
    {
        id : 1,
        email: "shashiraj@google.com"
    },{
        id : 2,
        email: "shashiraj@google.com"
    }
]
// console.log(users[1].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // Each key-pair in different array (Array inside Array)
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//De-structing Object
const course =  {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor : instructor,price} = course //Destructing object
// console.log(instructor,price);

//Functions - It is basically used to easily do the repition work.

function myName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
}
// myName()

function addtwoNo(num1,num2) {
    console.log(num1 + num2);
}
// addtwoNo() // NaN
// addtwoNo(3,4) // 7
// addtwoNo(3,"4") // 34 (string)

// const result = addtwoNo(3,4)
// console.log(result); //undefined

function addtwoNo(num1,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addtwoNo(3,4)
// console.log(result); //7

function loginUserMessage (username){
    if(username === undefined){
        console.log("Please Enter a username:");
        return
    }
    return `${username} just logged in`
}
loginUserMessage('Shashi') //Nothing will be printed as you just returned not printed.
// console.log(loginUserMessage("Shashi"));
// console.log(loginUserMessage());

//Rest operator (...)
function calculateCartPrice (...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));

function calculateCartPrice1 (val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500,2000)); //[500,2000]

//Function with objects.
// const user = {
//     username : "Shashi",
//     price : 199
// }
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username : "Shashi",
    price : 299
})

// const myNewArr = [200,400,600]

function returnSecondElement (getArray){
    return getArray[1]
}
// console.log(returnSecondElement(myNewArr));
console.log(returnSecondElement([200,400,600]));