let mydate = new Date();
console.log(mydate);
// checking the type of date 
console.log(typeof mydate);

// date object is contant the date , day , yera , milisecond and second
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMilliseconds());
console.log(mydate.getSeconds());

// set method in date 
let date = new Date();
console.log(date);
date.setFullYear(2047);
date.setMonth(11);
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date);

// undrstanding the timestamp in date
let timestamp = Date.now();
console.log(timestamp);

let d1 = new Date(2024, 0, 1);
let d2 = new Date(2024, 11, 31);
let diff = d2 - d1;
console.log(diff); // Output: 31536000000 (milliseconds)

// why is getMonth() returning 0 for January?
// In JavaScript, the getMonth() method returns the month of a date as a zero-based value. This means that January is represented by 0, February by 1, March by 2, and so on, up to December which is represented by 11.
console.log(date.getMonth()); 

// Print today's date in DD/MM/YYYY format.
let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let formattedDate = dd + '/' + mm + '/' + yyyy;
console.log(formattedDate); // Output: DD/MM/YYYY format

// Print current time in HH:MM:SS format. 
let currentTime = new Date();
let hours = String(currentTime.getHours()).padStart(2, '0');
let minutes = String(currentTime.getMinutes()).padStart(2, '0');
let seconds = String(currentTime.getSeconds()).padStart(2, '0');
let formattedTime = hours + ':' + minutes + ':' + seconds;
console.log(formattedTime); // Output: HH:MM:SS format

// Calculate your age from your DOB.
let dob = new Date("2005-07-20"); // Replace with your actual date of birth
let agenow = new Date();
let age = agenow.getFullYear() - dob.getFullYear();
let monthDiff = agenow.getMonth() - dob.getMonth(); 
if (monthDiff < 0 || (monthDiff === 0 && agenow.getDate() < dob.getDate())) {
    age--;
}
console.log("Your age is: " + age); // Output: Your age is: X (where X is your age)