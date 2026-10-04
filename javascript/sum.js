// // // // const arr = [1, 2, 3, 4, 5];

// // // // function sumArray(array) {
// // // //     return array.reduce((sum, currentValue) => sum + currentValue, 0);
// // // // }

// // // // console.log(sumArray(arr)); // Output: 15

// // // let age = 22;
// // // age = 23;

// // // console.log(age);
// // let x = 10;
// // let y = x;

// // y = 20;

// // console.log(x);
// // console.log(y);


const users = [
    {
        id: 1,
        name: "Sudheer",
        age: 22,
        skills: ["C++", "JS"]
    },
    {
        id: 2,
        name: "Rahul",
        age: 17,
        skills: ["Java"]
    }
];

const res = users
    .filter(user => user.age >= 18)
    .map(({ id, name, skills }) => ({
        id,
        name,
        skills: [...skills, "React"]
    }));

console.log(res);


