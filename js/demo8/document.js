// getElementsByTagName function return an array that contains all nodes with specific tag name
let divs = document.getElementsByTagName("div")

let div1 = divs[0]

// change the HTML tag content
div1.innerHTML = "<p>Hello World</p>"

let div2 = divs[1]
// all text content will be render on browser
// Including the <p> tag will be treated as string
div2.innerText = "<p>Hello World</p>"

let target = document.getElementsByClassName("target")[0]


target.innerHTML = "<p>This is a div tag with class = target</p>"

let formNode = document.getElementsByName("sub")[0]

formNode.innerHTML = "<input type=\"text\" name=\"name\" value=\"输入姓名\">"

// as the id of node is distinct, so it reuturn the node instead of a node list
let rootNode = document.getElementById('root')


console.log(rootNode.innerHTML)

// querySelector select the first match node (css selector)
// It just return single node
let classNode = document.querySelector(".myclass")

console.log(classNode.innerHTML)


let nullNode = document.querySelector(".myclass0")

if (nullNode === null) {
    console.log("there is no matched node for selector: .myclass0")
}


// get all div node from document (a list)
divs = document.querySelectorAll("div")

console.log(divs)
