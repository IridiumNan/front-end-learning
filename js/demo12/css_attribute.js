let box = document.getElementById("box1")

let conf = new Map()
conf.set("width", "300px")
conf.set("height", "300px")
conf.set("background-color", "aqua")

let cssStyle = ""
conf.forEach((v, k, m) => {
    cssStyle += k + ":" + v + ';'
})

console.log(cssStyle)

box.setAttribute("style", cssStyle)


box = document.getElementById("box2")

let boxStyle = box.style

boxStyle.width = "200px"
boxStyle.height = "100px"
boxStyle.backgroundColor = "#555"
boxStyle.margin = "50px"

box = document.getElementById("box3")

box.style.cssText = "width: 100px; height: 300px; background-color: rgb(230, 80, 90);"
