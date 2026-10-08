let submitBtn = document.getElementById("submitBtn")

let myName = document.getElementById("myName")

let myAge = document.getElementById("myAge")

let output = document.getElementById("output")


submitBtn.onclick = async (e) => {
    // prevent send request by auto generated form directly
    e.preventDefault()

    // construct new request with json structure 
    // {
    // ...
    //   body: {
    //   "name": username ,
    //   "age": 18
    //   }
    // }
    const bodyData = {
        name: myName.value,
        age: Number(myAge.value)
    }

    // let url = "http://192.168.122.211:8081/hello"
    let url = "http://127.0.0.1:8081/hello"


    console.log(`target url: ${url}, body: ${JSON.stringify(bodyData)}`)

    // await fetch
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(bodyData)
    })


    // NOTE: important, fetch the data from backend
    const json = await response.json()

    if (json.code !== 200) {
        console.log("fail: ", json.status)
    }
    let pTag = document.createTextNode(`Greet from server: ${json.data}`)
    output.appendChild(pTag)
    output.appendChild(document.createElement("br"))

}
