// primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100    //Number value return is Number
const scoreValue = 100.3    //Number value return is Number

const isLoggedIn = false  //Boolearn value return is Boolearn
const outsideTemp = null  //Null value return is Obeject
let userEmail;

const id = Symbol('123')  //Symbol value return is Symbol
const anotherId = Symbol('123')  //Symbol value return is Symbol

// console.log(id === anotherId);   

// const bigNumber = 649563930256839326487352649n  //BigInt value return is Undefined



//  Reference  (Non Primitive)

//  Array, Objects, Functions

const superHeros = ["ironman", "hulk", "wanda"]    // Array value return is Object

let myObj = {
    name: "ankit tatti",
    age: 22,
}     // Objects value return is Object

const myFunction = function(){
    console.log("hello world");
}    // Function value return is Function and this is called Function Object


console.log(typeof myObj);