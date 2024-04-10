//  Arthimatic Operation

// let a = 5
// let b = 2

// console.log("a = ", a, "& b = ", b);
// console.log("a + b =", a + b );
// console.log("a - b =", a - b );
// console.log("a * b =", a * b );
// console.log("a / b =", a / b );
// console.log("a % b =", a % b );
// console.log("a ** b =", a ** b );

//  Unary Operators

// let a = 5
// let b = 2

// console.log("a = ", a, "& b = ", b);

// Increment
// a++;
// console.log("a =", a);

// Decrement
// a--;
// console.log("a = ", a);

//  Assignment Operatars

// let a = 5
// let b = 2

// a **= 4; //a = a ** 4
// console.log("a = ", a)

//  Comparision Operators

// let a = 4
// let b = 5

// > greater
// < smaller

// if(a>b){
//     console.log("a is greater");
// }else if(b>a){
//     console.log("b is greater")
// }

// let age = 18;

// if(age >= 18){
//     console.log('liscense dedo ');
// }
// else if(age <18){
//     console.log('mat do ');
// }

// let a = 5;
// let b = 6;

// if(a > b){
//     alert()
// }


//  qustions and answers "start"


//1. liscense
// const age = prompt("Enter Your Age")
// console.log(age);

// if(age >= 18){
//     console.log("eligible for voting");
// }
// else if(age <18){
//     console.log("not eligible for voting");
// }

// 2. determine first is greater or less than second

// function twoNum (x,y){
//     if(x < y){
//         console.log("true");
//     }

//     else if(x >= y){
//         console.log("trueOne");
//     }
// }

// twoNum(5,5)

// 3. show result of students based on their scores in exam.

// const score = prompt("enter your Score")
// console.log(score);
//     if(score>=90){
//         console.log("Excellent");
//     }
//     else if(score>=80 && score<=89){
//         console.log("good");
//     }
//     else if(score>=70 && score<=79){
//         console.log("average");
//     }
//     else if(score<70){
//         console.log("Needs Improvement");
//     }

// 4. 3 value -> a,b > c  ca>b , cb>a ? is it a triangle :  not a triangle

// function triangleOrNot(a, b, c) {
//     if(a<=0 || b<=0,c<=0) {
//         return console.log('please enter valid number');
//     }
//   if ((a + b > c) && (b + c > a) &&( c + a > b)) {
//     console.log(true);
//   } else {
//     console.log("not a trianglex");
//   }
// }

// triangleOrNot(1, 10, 0);

//  qustions and answers "end"


// Logical Operators

// let a = 6;
// let b = 5; 


//  Conditional statements
// example1 // if Statement
// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }
// console.log(color);


//example2 // if else Statement 

// let age = 18 

// if (age >= 18){
//     console.log("can vote");
// }
// else{
//     console.log("not vote");
// }


//example 3 // if else Statement 
// odd or even

// let num = 4

// if(num%2 === 0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd");
// }

//example 4 //  else if Statement 

// let mode = "gold";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "blue") {
//     color = "blue";
// }
// else if (mode === "red") {
//     color = "red";
// }
// else {
//     color = "white";
// }

// console.log(color);


//  Ternary Operator

// let age = 19;

// let result = age >= 18 ? "adult" : "not adult";  // simple , compact if else

// console.log(result);


// let age = 18;

// age >= 18 ? console.log("adult") : console.log("not adult");


// practice question
// Q1
// let num = prompt("enter your number")


// if(num%5 === 0){
//     console.log(num, "is a multiple of 5");
// }else{
//     console.log(num, "is NOT a multiple of 5");
// }


// Q2

// let score = prompt ("enter your number")
// console.log(score);
// if (score>100) {
//     console.log("Enter your number correctly");
// }
// else if (score >=90 && score<=100) {
//     console.log("A Grades");
// }
// else if (score >=80 && score<=89) {
//     console.log("B Grades");
// }
// else if (score >=70 && score<=79) {
//     console.log("c Grades");
// }
// else if (score >=60 && score<=69) {
//     console.log("D Grades");
// }
// else if (score >=50 && score<=59) {
//     console.log("E Grades");
// }
// else{
//     console.log("Fail");
// }


