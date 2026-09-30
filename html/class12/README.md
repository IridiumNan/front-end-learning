# 表单元素

## 文本框

文本域通过 `<input type="text">` 标签来设定， 当用户要在表单中输入字母， 数字等内容时， 就会使用到文本域

```html
<form>
    First name: <input type="text" name="firstname" value="">
    <br>
    Last name: <input type="text" name="lastname" value="">
</form>
```

## 密码框

密码字段通过 `<input type="password">` 来设定

```html
<form>
    Password: <input type="password", name="pwd">
</form>
```

> [!NOTE]
> 密码字段不会明文显示， 而是使用圆点代替

## 提交按钮

当用户单击确认按钮时， 表单的内容会被传输到另一个文件。 表单的动作属性定义了目的文件的文件名。 由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理

通过设定 `value` 属性来设置按钮的显示文本

```html
<form name="input" action="url" method="get">
    UserName: <input type="text" name="user">
    <input type="submit" value="Submit">
</form>
```
