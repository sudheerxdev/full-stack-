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