let regexpVar;
regexpVar = /word/i;

console.log("regexpVar.source: ", regexpVar.source);

let someString = "It's awesome string with super word inside!";
// exec() returns result in array or null
let execVar = regexpVar.exec(someString);
console.log("Method exec() executed with someString: ", execVar);

// test() returns true or false
let testResult = regexpVar.test("WORD");
console.log("testResult", testResult);

// match() returns result array or null
let matchString = "some beatiful and wise string with another jealous word";
let matchResult = matchString.match(regexpVar);
console.log("matchResult", matchResult);

// search() returns index of the first match
// if not found it returns -1
let str = "Hello, fella!";
let result = str.search("fella");
console.log("search() result:", result);

// replace() returns new string with some or all matches of the pattern
let strReplace = "Some string for checking replace() method";
let replaceResult = strReplace.replace("string", "unbelievable string");
console.log("old string:", strReplace);
console.log("new string:", replaceResult);