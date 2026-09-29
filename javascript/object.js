// javascript object vs json 
const person = {
    name : "Sudheer",
    surname : "yadav",
    age : 22,           
}
console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);
const {name : nm} =  person;
console.log(nm);

// // json 
// {
//     "name": "Sudheer",
//     "surname": "yadav",
//     "age": 22   ;
// }
// in js object function can be assign in key but in json it is not possible 
