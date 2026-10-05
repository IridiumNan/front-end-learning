let divNode = document.getElementById("mydiv")

divNode.setAttribute("class", "box")

// the width and height including padding 
console.log("width and height for divNode")
console.log(divNode.clientWidth) // 200 + 15 * 2
console.log(divNode.clientHeight)

// width and height including padding and border
// 200 + 15 * 2 + 5 * 2
console.log("width including padding and border for div: ", divNode.offsetWidth)
console.log("height including padding and border for div: ", divNode.offsetHeight)

// offset to left and top
console.log("offset left: ", divNode.offsetLeft)
console.log("offset top: ", divNode.offsetTop)

let box1 = document.getElementsByClassName("box1")

box1 = box1[0]

// eqauls the padding of parent: 15px
console.log("offset box1 left: ", box1.offsetLeft)
console.log("offset box1 top: ", box1.offsetTop)

// width and height for whole document
// the size of screen

console.log("width and height for screen")
console.log(document.documentElement.clientWidth)
console.log(document.documentElement.clientHeight)

console.log("width and height for body")
console.log(document.body.clientWidth)
console.log(document.body.clientHeight)

console.log("getting the whole height : ", document.body.scrollHeight)
console.log("getting current scroll position: ", document.documentElement.scrollTop)
