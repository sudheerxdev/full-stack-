//  handling array of objects using inbuilt functions
// map , reduse and filture 
let arr = [1,2,3,4,5];
// map function 
let newarr = arr.map((num)=> num * 2);
console.log(newarr);

arr.forEach((num) => console.log(num ));

// map 
arr.map((num) => console.log(num+10));

let newnumarr = arr.filter((num) => num % 2 == 0);
console.log(newnumarr);