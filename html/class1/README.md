# HTML 基本骨架

## 声明

每一个 html 网页的开头都有一个html声明， 保证浏览器的渲染稳定

```html
<!DOCTYPE html>
```

---

## html 标签

定义 HTML 文档， 这个元素用于表示 HTML 文档， 其他的元素要包裹在内部， 标签限定文档的开始和结束

```html
<!DOCTYPE html>
<html>
</html>
```

---

## head 标签

head 标签用于定义文档的头部， 文档的头部描述了文档的各种属性和信息， 包括文档的标题， 在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部的数据不会真正作为内容显示给读者

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
</html>

```

---

## body 标签

body 元素定义文档的主体

body 元素包含文档的所有内容 (比如文本， 超链接， 图片， 图像， 表格和列表等等)

body当中的内容会直接渲染给用户看

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>

```

---

## title 标签

可定义文档的标题

它显示在浏览器窗口的标题栏或状态栏上

`<title>` 标签是 `<head>` 标签中唯一必须要求包含的东西

`<title>` 有利于 SEO 优化

> SEO Search Engine Optimization, 通过对网站的内容进行跳涨， 满足搜索引擎的排名要求

```html
<!DOCTYPE html>
<html>
    <head>
        <title>第一个网页</title>
    </head>
    <body>
        我会显示在浏览器当中
    </body>
</html>
```

---

## meta 标签

meta 标签用来描述一个 HTML 网页文档的属性， 关键词等， 比如说 `charset="utf-8"` 指定当前的编码格式为 `utf-8`

**meta 是一个单标签**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>第一个网页</title>
    </head>
    <body>
        我会显示在浏览器当中
    </body>
</html>
```
