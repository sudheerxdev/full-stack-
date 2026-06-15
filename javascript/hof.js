// let powertwo = (n) => {
//     return n ** 2 ;
// }
// console.log(powertwo(5));

// we also can pass one function to a another function as ana ragument 
 let powertwo = (n) => n ** 2 ;

 let powerthree = (n , powertwo) => {
    return powertwo * n ;
 }

 console.log(powerthree(5 , powertwo(5)));
// in hof we are treating the function as a variable and we are passing the function as an argument to another function and we are also returning the function from another function
// hof is a function that takes another function as an argument and returns a function as a result 
// hof is a function that can be used to create a new function by using the existing function 
// hof is a function that can be used to create a new function by using the existing function and we can also pass the existing function as an argument to another function and we can also return the existing function from another function

function sayhello(){
    return ()=>{
        console.log("Hello sudheer");
    }
}
let greet = sayhello();
// here greet is a variable 
console.log(greet);
greet();
console.log(greet());
// here we are calling the function using the variable name and we are getting the output as "Hello sudheer"
// hof is a powerful concept in javascript and it is used in many libraries and frameworks like react, angular, vue etc. and it is also used in many design patterns like currying, partial application, memoization etc.

function sum(x , y){
    return function(y){
        return x + y ;
    } 
}
let add2 = sum(2);
let add3 = add2(3);
console.log(add3);

let one = a => {
    let two = b => {
        let three = c => {
            return a + b + c;
        }
        return three ; 
    }
    return two ;
}
console.log(one(1)(2)(3));


const mynum = [1,2,3,4,5,6]
const sumarray = mynum => {
    let total = 0 ;
    for(let i = 0 ; i < mynum.length; i++){
        total += mynum[i];
    }
    return total;
}
console.log(sumarray(mynum));

// setinterval is a hof because it takes a function as an argument and it returns a function as a result
// function saysudheer(){
//     console.log("Hello sudheer");
// }
// setInterval(saysudheer, 1000);

// // consise way using arraow function
// setInterval(()=> console.log("Hello sudheer"), 1000);

setTimeout(() => console.log("Hello sudheer"), 2000);
function saysudheer(){
    console.log("Hello sudheer");
}
setTimeout(saysudheer, 2000);