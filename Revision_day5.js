
let c = 30
if(true){
    c = 80
}
console.log(c); //Global variable ko andrr access kiya.

let d = 40
if (true) {
    let d = 50
}
console.log(d); // 40 

//Nested function
function one(){
    const username = "shashi"

    function two() {
        const website = "youtube"
        console.log(username); // you can access the global variable
    }
    // console.log(website);//You can't access the website variable because of the scope.

    two()
}
one();

//different types of function used
//Hoisting - Using the function/variables value before its declaration(top)
// console.log(addOne(5));
// function addOne(num){
//     return num + 1
// }

// console.log(addTwo(5)); //Here you can't access the addTwo.(Hoisting)
// const addTwo = function(num){
//     return num + 2
// }

//Arrow Function

//this keyword - Indicating the current context.
// const user = {
//     username : "shashi",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to Website`);
//         console.log(this) //See the Output(Current context)
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //In node Environment , this refers to an empty object because there is no context.
//In browser, this refers to windows.

//this keyword is not used in function.
// function chai() {
//     let username = "shashi"
//     console.log(this.username); // undefined
// }
// chai()

//Arrow function -
// const chai = () => {
//     let username = "shashi"
//     console.log(this);
// }
// chai()

//Syntax
// const addTwo = (num1,num2) => {
//     return num1 + num2 //Explicit return
// }
// const addTwo = (num1,num2) => num1+num2 //Implicit return.
// const addTwo = (num1,num2) => (num1+num2) //No need to write return keyword
// const addTwo = (num1,num2) => ({username: "shashi"}) //No need to write return keyword
// console.log(addTwo(3,4));

//IIFE(Immediately Innvoked Function Expression)
//Syntax:
//(function definition)();

(function chai(){
    //Named IIFE
    console.log(`DB connected`);
})();

//Unnamed or noraml IIFE
( (name) => {
    console.log(`DB Connected Two ${name}`);
} )('shashi')
