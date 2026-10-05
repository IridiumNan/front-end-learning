let btn = document.getElementById("btn")

btn.onclick = (e) => {
    console.log(e.target)
    console.log(e.type)
}

let archLink = document.getElementById("arch")

archLink.onclick = (e) => {
    // prevent the default link action
    e.preventDefault()


    // customize action
    console.log("click the link to ", e.target.getAttribute("href"))

}

let box = document.getElementById("box0")

box.onclick = () => {
    console.log("box0 is clicked")
}

box = document.getElementById("box1")

box.onclick = (e) => {
    // stop this event spread on DOM
    // If you comment this, event box0 is clicked will print on console
    e.stopPropagation()
    console.log("box1 is clicked")
}
