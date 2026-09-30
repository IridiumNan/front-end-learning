# CSS 引入方式

## 内联样式

要使用内联样式， 需要在相关的标签内使用样式 (style) 属性。 可以包含 任何 CSS 属性

> [!NOTE]
> 缺乏整体性和规划行， 维护成本高

```html
<p style="background: orange; font-size: 24px"></p>
```

## 内部样式

当但个文档需要特殊的样式的时候， 就应该使用内部样式表。 可以用 `<style>` 标签在文档头部定义内部样式表

> [!NOTE]
> 单个页面内的 CSS 代码具有统一性， 便于维护， 但是多个页面之间容易混乱

```html
<head>
    <style>
        h1{
            background: red;
        }
    </style>
</head>
```

## 外部样式

当样式需要应用于很多页面时， 外部样式表将是理想的选择。 在使用外部样式表的情况下， 可以通过改变一个文件来改变整个站点的外观。 每个页面使用 `<link>` 标签链接到样式表， `<link>` 标签在文档的头部

```html
<link rel="stylesheet" type="text/css" href="xxx.css">
```

> [!NOTE]
> 这是最推荐的样式<br>
> 如果引入了多个重叠的样式， 后面引入的会覆盖前面引入的样式
