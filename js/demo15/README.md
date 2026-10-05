# Event 事件对象

事件发生之后， 会产生一个事件对象， 作为参数传给监听函数

## Event 对象属性

- Event.target
当前事件所在的节点

- Event.Type
当前事件的类型

## Event 对象方法

- Event.preventDefault

取消浏览器对于当前事件的默认行为， 比如点击 a 标签后， 浏览器默认会跳转到另一个页面， 使用这个方法之后， 就不会跳转了

```js
archLink.onclick = (e) => {
    // prevent the default link action
    e.preventDefault()


    // customize action
    console.log("click the link to ", e.target.getAttribute("href"))

}
```

- Event.stopPropagation

stopPropagation 方法阻止事件在 DOM 中继续传播， 防止再触发定义在别的节点上的监听函数， 当前节点上的事件监听函数都可以触发

```js
box.onclick = (e) => {
    // stop this event spread on DOM
    // If you comment this, event box0 is clicked will print on console
    e.stopPropagation()
    console.log("box1 is clicked")
}
```
