# CSS 属性操作

## HTML 元素的 style 属性

使用网页元素节点的 `setAttribute` 方法直接操作网页的`style` 属性

```js
let box = document.getElementById("box")

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
```

## 元素节点的 style 属性

```js
box = document.getElementById("box2")

let boxStyle = box.style

boxStyle.width = "200px"
boxStyle.height = "100px"
boxStyle.backgroundColor = "#555"
boxStyle.margin = "50px"
```

## 使用 cssText 属性

```js
box = document.getElementById("box3")

box.style.cssText = "width: 100px; height: 300px; background-color: rgb(230, 80, 90);"
```
