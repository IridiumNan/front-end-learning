# 表单事件

表单事件是使用表单元素及输入框元素可以监听的一系列事件

- input
- select
- change
- reset
- submit

---

## Input

当 `<input>` `<select>` `<textarea>` 的值发生变化时候触发， 对于复选框 (`<input type=checkbox>`) 或者单选框 (`<input type=radio>`)， 用户改变选项时， 也会触发这个事件

input 事件会连续触发， 比如说用户每按下一次按键， 就会触发一次 input 事件

## Select

select 事件在 `<input>` `<textarea>` 中选中文本时触发

## Change

Change 事件当 `<input>` `<select>` `<textarea>` 的值发生变化时候触发， 但是不会连续触发， 只有当全部修改完成时才会触发

一般是回车 (或焦点离开输入框)的时候触发

## Rest, Submit

这两个事件发生在表单对象 `<form>` 上， 而不是发生在表单的成员上

reset 事件当表单重置 (所有表单成员变回默认值的) 时触发

submit 事件当表单数据向服务器提交时触发.

> [!NOTE]
> submit 事件的发生对象是 `<form>` 元素而不是 `<button>`

---

## 运行案例

```bash
# start the backend
./js/demo17/serve
```

Your Name 填写之后， 点击 Submit, 会返回后端的内容
