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

