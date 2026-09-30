# 选择器一

CSS 语法规则由两个主要部分组成: **选择器** 以及一条或者多条属性声明

## 全局选择器

可以与任何元素匹配, 优先级最低， 一般叫做样式初始化

```css
*{
    margin: 0;
    padding: 0;
}
```

## 元素选择器

HTML 文档中的元素, `p, b, div, a, img, body` 等

标签选择器, 选择的是页面上所有这种类型的标签， 所以经常描述 *共性*， 无法描述某个元素的个性

```css
p{
    font-size: 14px;
}
```

比如说， 我希望 某些字段变成红色字体， 那么可以使用 `<span>` 标签把目标字包裹

之后给 `<span>` 加上一个标签选择器

```css
span{
    color: red;
    font-size: 20px;
}
```

```html
<p>我本来用 <span>cpp</span>, 现在在学 <span>css</span></p>
```

> [!NOTE]
> 所有的标签都可以是选择器. 比如 ul, li, label, dt, dl, input, div 等等
> 无论标签嵌套多深， 都会被选择上
> 选择整个文档当中所有的标签

## 类选择器

规定用 `.` 来定义， 针对你想要的所有标签使用

```css
/* 定义类选择器 */

.one-class{
    width: 80px;
}
```

```html
<h2 class="one-class">你好</h2>
```

> [!NOTE]
> 类选择器的特点
> 类选择器可以被多种标签使用
> 类名不能以数字开头
> 同一个标签可以使用多个类选择器， 使用空格隔开

```html
<h3 class="class-one class-two">我是 classone classtwo 的三级标题</h3>
```
