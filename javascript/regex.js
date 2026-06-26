// regex means regular expression, which is a sequence of characters that forms a search pattern. It can be used for string matching and manipulation in JavaScript.
let str = "Hello sudheer, how are you sudheer?";
// regex pattern to match the word "sudheer"
let pattern = /sudheer/g;
let result = str.match(pattern);
console.log(result); // Output: ["sudheer", "sudheer"]

// regex pattern to match the word "sudheer" and replace it with "world"
let newstr = str.replace(pattern, "world");
console.log(newstr); // Output: "Hello world, how are you world?"