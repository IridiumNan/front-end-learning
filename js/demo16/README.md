# 键盘事件

键盘事件由用户打击键盘触发， 主要有 `keydown` `keypress` `keyup` 三种

keypress 只有在按下有值的键才会被触发, 按下 `Ctrl` `Alt` `Shift` 这种无值的键的时候， 这个事件不会触发

获取输入框内容: `Event.target.value`

获取按下的键的编号: `Event.keyCode`

```html
  <input type="text" id="username">
  <script src="keyboard.js"></script>
  <script>

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
  </script>
```

> [!NOTE]
> 已经有库提供了各种常量  
> 可以直接调用而不需要自己记住编号  
> <https://www.npmjs.com/package/keycode-js>
