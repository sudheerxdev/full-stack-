// now we will learn the error handling in js 
try{
    console.log(x);
}
catch(e){
    console.error("An error occurred:", e.message);
    console.error("Stack trace:", e.stack);
    console.error("Error name:", e.name);
}
finally{
    console.log("This block will always execute, regardless of whether an error occurred or not.");
}