function clickHandler() {
    let hint = document.createElement("p")

    hint.innerText = "clicked"
    document.body.appendChild(hint)
}

let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", clickHandler)

