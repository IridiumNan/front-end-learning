let username = document.getElementById("username")

username.onkeydown = () => {
    console.log("the keyboard is pressed")
}

username.onkeyup = (e) => {
    // the value is content in the input tag
    // NOTE:
    // Only number and alphabet has value
    console.log(e.target.value)

    // the keyCode is distinct code for each key
    // Enter is 13
    console.log("the keycode: ", e.keyCode)


    if (e.keyCode === 13) {
        console.log("Enter is pressed")
    }
}
