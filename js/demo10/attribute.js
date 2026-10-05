function logNewLine() {
    console.log()
}
function logGap() {
    console.log("-------------------------------------")
}
let divNode = document.getElementById("foo")

console.log("current id: ", divNode.id)
let newId = "fooo"
divNode.id = newId

console.log("change to new id: ", newId)

// Get a string of class name
console.log("current class(this is a string): ", divNode.className)

logGap()
// This classList is read-only
// but you can use it's function to change class
let li = divNode.classList

console.log("starting traversing the class list")
for (let i = 0; i < li.length; i++) {
    console.log("class: ", li[i])
}

// add new class
li.add("box1")

// remove class
li.remove("linux")

// contains return if specific class in list
console.log("contains class box ?", li.contains("box"))
console.log("contains class linux ?", li.contains("linux"))
logGap()

// if this class is not contains, it will be add
// then return then new result of contains: true
console.log("toggle result: ", li.toggle("linux"))
console.log("contains class linux ?", li.contains("linux"))

logNewLine()
// if this class has existed on list, it will be remove
// then return new result of contains: false
console.log("toggle result: ", li.toggle("linux"))
console.log("contains class linux ?", li.contains("linux"))
