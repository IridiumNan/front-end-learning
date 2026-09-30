# CSS 简介

## CSS概念

CSS (Cascading Style Sheets) 层叠样式表， 简称样式表

文件后缀为 `.css`

## 为什么需要 CSS

使用 css 的唯一目的就是让网页具有美观一致的页面

## 语法

CSS 规则由两个主要的部分构成: 选择器， 以及一条或者多条生命

选择器通常是需要改变样式的 HTML 元素

每条声明由 一个属性 和 一个值组成
属性 (property) 和 值 (value) 构成一个键值对

多条属性之间使用 `;` 隔开

```html
<style>
    h1{
        color: blue;
        font-size: 12px;
    }
</style>
```

`css` 样式可以直接写在 html 文件当中的 `<style>` 标签当中， 例如

可以查看 [class1](./class1/)
