function report(val) {
    alert("The type of " + val + " is " + typeof val)

}
// Boolean Conversion
let value = true;
report(value)

value = String(value); // now value is a string "true"
report(value)

// Numeric Conversion

report("6" / "2") // 3, strings are converted into numbers

let str = "123";
report(str)

let num = Number(str);

report(num) // Number


// Boolean Conversion

report(Boolean(1)) // true
report(Boolean(0)) // false

report(Boolean("hello")) // true
report(Boolean("")) //false

// NOTE: only empty string will be converted into false
report(Boolean("0")); // true
report(Boolean(" ")); // not empty -> true
