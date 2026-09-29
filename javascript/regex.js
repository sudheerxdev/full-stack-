// regex means regular expression, which is a sequence of characters that forms a search pattern. It can be used for string matching and manipulation in JavaScript.
let str = "Hello sudheer, how are you sudheer?";
// regex pattern to match the word "sudheer"
let pattern = /sudheer/g;
let result = str.match(pattern);
console.log(result); // Output: ["sudheer", "sudheer"]

// regex pattern to match the word "sudheer" and replace it with "world"
let newstr = str.replace(pattern, "world");
console.log(newstr); // Output: "Hello world, how are you world?"

// regex pattern to match the word "sudheer" and replace it with "world" only for the first occurrence
let newstr2 = str.replace(/sudheer/, "world");
console.log(newstr2); // Output: "Hello world, how are you sudheer?"

// regex pattern to match the word "sudheer" and replace it with "world" only for the last occurrence
let newstr3 = str.replace(/sudheer(?=[^s]*$)/, "world");
console.log(newstr3); // Output: "Hello sudheer, how are you world?"

// regex pattern to match the word "sudheer" and replace it with "world" only for the first occurrence of the word "sudheer" after the word "how"
let newstr4 = str.replace(/(?<=how are you )sudheer/, "world");
console.log(newstr4); // Output: "Hello sudheer, how are you world?"

// regex pattern to match the word "sudheer" and replace it with "world" only for the first occurrence of the word "sudheer" after the word "Hello"
let newstr5 = str.replace(/(?<=Hello )sudheer/, "world");
console.log(newstr5); // Output: "Hello world, how are you sudheer?"    

// we have completed the regex examples and now we will move to the next topic which is about the inbuilt functions in javascript.
