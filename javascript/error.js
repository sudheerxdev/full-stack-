// now we will learn the error handling in js 
// try{
//     console.log(x);
// }
// catch(e){
//     console.error("An error occurred:", e.message);
//     console.error("Stack trace:", e.stack);
//     console.error("Error name:", e.name);
// }
// finally{
//     console.log("This block will always execute, regardless of whether an error occurred or not.");
// }

// custom error handling
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
// }

// try {
//     let result = divide(10, 0);
//     console.log("Result:", result);
// } catch (e) {
//     console.error("An error occurred:", e.message);
// } finally {
//     console.log("Execution completed.");
// }

function divide(a, b) {
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try{
    let num = divide(10 , 0);
    console.log(num);
}
catch(e){
    console.error("An error occurred:", e.message);
}