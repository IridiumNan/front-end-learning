// No error
let message = 'hello';
message = 123;

let str = 'hello';
let str2 = 'Single quote are ok too'
let phrase = `can embed another ${str}`


let userName = 'John', age = 18;

alert(`hello ${userName}, your age is ${age}`);
alert("the result is ${1 + 2}"); // no calculate

let uAge;

// uAge is undefined
alert(uAge)


// typeof operator

typeof undefined

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object"

typeof alert // "function"


let demoName = "Italic";

alert(`hello ${1}`) // 1 itself is number value

alert(`hello ${"name"}`) // hello name

alert(`hello ${demoName}`)
