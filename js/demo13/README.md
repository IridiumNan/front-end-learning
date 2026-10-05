# 事件处理程序

事件处理程序分为:

- HTML 事件处理
- DOM0 级事件处理
- DOM2 级事件处理

## HTML 事件

将 `onclick` 属性设置为要执行的函数名即可(需要加括号)

```html
  <button onclick="clickHandler()">Click ME</button>
  <script>
    // HTML
   function clickHandler() {
    let hint = document.createElement("p")

    hint.innerText = "clicked"
    document.body.appendChild(hint)
   }
  </script>
```

## DOM0

```html
  <button id="btn">Click me</button>
  <script>
        // DOM0 Event

   function clickHandler() {
    let hint = document.createElement("p")

    hint.innerText = "clicked"
    document.body.appendChild(hint)
   }

   let btn = document.getElementById("btn")

   // set the onclick attribute
   btn.onclick = clickHandler
  </script>
```

## DOM2

```html
  <button id="btn1">CLICK ME</button>
  <script>
    // DOM2
   function clickHandler() {
    let hint = document.createElement("p")

    hint.innerText = "clicked"
    document.body.appendChild(hint)
   }

   let btn1 = document.getElementById("btn1")

   btn1.addEventListener("click", clickHandler)
    // add functions more than one for specific event
   btn1.addEventListener("click", () => {
    console.log("hello")
   })
  </script>
```
