let btn = document.getElementById("oneclick")

btn.onclick = () => {
    console.log("one click")
}

btn = document.getElementById("doubleclick")

btn.ondblclick = () => {
    console.log("double click")
}

btn = document.getElementById("mousedown")

btn.onmousedown = () => {
    console.log("mouse down")
}

btn = document.getElementById("wheel")

btn.onwheel = () => {
    console.log("wheel event")
}

let mov = document.getElementById("mousemove")

mov.onmousemove = () => {
    console.log("mouse move")
}

let pla = document.getElementById("placer")

oldStyle = pla.style.cssText

pla.onmouseenter = () => {
    pla.style.width = "220px"
    pla.style.height = "220px"

    pla.style.backgroundColor = "aqua"
}

pla.onmouseleave = () => {
    pla.style.cssText = oldStyle
}

