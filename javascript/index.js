// function message(){
//     console.log("Hello, World!");
// }
// message();
 // function without a return and without a parameter

//  function message(){
//     return "hello sudheer";
//  }
// let msg =  message();
// console.log(msg);
//  // function without parameter but with a return

//  // function with one ort more parameter 
//  function greet(name){
//     console.log("Hello " + name);
//  }
//  let name = "Sudheer";
//  greet(name);

// function with unlimited number of parameters 
// function sum(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }
// let result = sum(1, 2, 3, 4, 5);
// console.log(result);

function sum(){
    let sum = 0 ; 
    for(let i = 0 ; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
let total = sum(1, 2, 3, 4, 5);
console.log(total);

// arrow function function
function sum(a , b){
    return a + b;
}
console.log(sum(5, 10));

// now arrow function
// let totalsum = (a , b) => a + b;
// console.log(totalsum(5, 10));

//  muiltiline statement 
let totalsum = (a , b) => {
    let sum =a + b ; 
    return sum;
};
console.log(totalsum(5, 10));

// function expression 
// assingning fuction to a varible is called function expression
// calling the function using the variable name
// variablename() == call the function 
let greet = function(name){
    return "Hello " + name;
};
console.log(greet("Sudheer"));

// immediate invoked function expression (IIFE)
(function name(){
    console.log("Hello, World!");
})();

(function sum(){
    return 12;
})();

// annonamous function
// the function without a name is calleed anonayams function 
let fun =function(){
    console.log("Hello, Worl!");
}
fun();
// therte is a condition that we must ahave to create a variable to store the function and then we can call the function using the variable name
// benifit of using anonayams function is that we can use it as a callback function and we can pass it as an argument to another function

// annonymse iife
// (function(3){
//     console.log(3);
// })(5);

// what was the need of object 
// the real liofe entity having state and behaviour is called object
// state is the property of the object and behaviour is the method of the object
// in javascript everything is an object 
// object is a collection of key value pairs 
// key is called property and value is called value 
// object can be created using object literal or using constructor function or using class

// createing objevt and manipulating the value in the object
let person = {
    name : "Sudheer",
    surname : "yadav" , 
    age : 22 ,
    
};
console.log(person);
let emp = new Object();
console.log(emp);
emp.name = "Sudheer";
emp.surname = "yadav";
emp.age = 22;
console.log(emp);

// cretae  object using constructor function
function Person(name , surname , age){
    this.name = name;
    this.surname = surname;

    this.age = age;
}
let person1 = new Person("Sudheer" , "yadav" , 22);
console.log(person1.surname);

//object methods 

let obj = new Object();
obj.name = "Sudheer";
obj.surname = "yadav";
obj.age = 22;

Object.keys(obj); // returns an array of keys
Object.values(obj); // returns an array of values
Object.entries(obj); // returns an array of key value pairs

obj.freeze(); // makes the object immutable naya nhi add kar paoge field 
obj.seal(); // makes the object immutable but allows to change the value of existing properties update kar skte ho 

let obj1 = Object.assign({}, obj); // creates a shallow copy of the object