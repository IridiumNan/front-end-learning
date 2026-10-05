document.writeln("<h1>Hello world</h1>\n<p>This is a new line</p>")

let s = "Hello Work"

document.writeln("the length of s is " + s.length)

console.log(s.indexOf("Work"))


let arr = ['hello', 'world', 'linux', 18]




console.log("starting traverse the array")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// traverse by the in key word
// i will be all index
for (var i in arr) {
    console.log(arr[i])
}

arr.push("nixos")

console.log("after push nixos into array")


console.log(arr)

console.log("poped item: " + arr.pop())

// shift alter the item on front


arr = [100, 200, 300]

console.log(arr)

console.log(arr.shift())

console.log(arr.unshift(123, 1234))

console.log(arr)

// join function return a string split with separator
// if no separator provided, it will use comma

console.log(arr.join("|"))

console.log(Math.floor(1.8)) // 1
console.log(Math.ceil(1.3)) // 2

console.log(Math.random()) // [0, 1]

now = Date.now()
console.log("timestamp: " + now) // Unix timestamp

console.log(new Date(now).getMonth() + 1)

/** Get the remaining day count of thie year */
function remainDay() {
    let today = new Date()
    let endTime = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999)

    let msPerDay = 24 * 60 * 60 * 1000

    let result = (endTime.getTime() - today.getTime()) / msPerDay

    return Math.floor(result)
}

console.log(remainDay())

