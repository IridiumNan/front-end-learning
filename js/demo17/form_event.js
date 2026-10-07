// input event
var username = document.getElementById("username")

username.oninput = function (e) {

    console.log("input event, value:", e.target.value)
}

username.onselect = (e) => {
    console.log("select event, value:", e.target.value)
}

var password = document.getElementById("password")

password.onchange = (e) => {
    console.log("change event, value:", e.target.value)
}

var resetBtn = document.getElementById("resetBtn")

var myForm = document.getElementById("myForm")

resetBtn.onclick = () => {
    // reset all content in this page
    // to default status
    myForm.reset()
}

var submitBtn = document.getElementById("submitBtn")

submitBtn.onsubmit = () => {
    console.log("what ever you want to do")
}
