let pTag = document.createElement("p")

// the <p> will display directly
t0 = document.createTextNode("<p>我是文本</p>")
t1 = document.createTextNode("我是另一个文本")

pTag.appendChild(t0)
pTag.appendChild(t1)


let container = document.getElementById("container")

container.appendChild(pTag)

// NOTE: you can change content after you have add node into document 

// create a attribute node then set
let idAttr = document.createAttribute("id")
idAttr.value = "hello"

pTag.setAttributeNode(idAttr)


// you can also use setAttribute function directly
// recommend this method
pTag.setAttribute("name", "world")

let bodyNode = document.querySelector("body")

let archLink = document.createElement('a')

// set the href attribute and text 
archLink.setAttribute("href", "https://archlinux.org")
archLink.innerText = "ArchLinux"

bodyNode.appendChild(archLink)
