# 有序列表

有序列表是一列项目， 列表项目使用数字进行标记

有序列表始于 `<ol>` 标签， 每个列表项始于 `<li>` 标签

`ol` 表示 ordered list

```html
<ol>
    <li>第一个元素</li>
    <li>第二个元素</li>
</ol>
```

**type属性**

- `1` 表示列表项目使用数字标号 (1, 2, 3...)
- `a` 表示列表项目使用小写字母标号 (a, b, c...)
- `A` 表示列表项目使用大写字母标号 (A, B, C...)
- `i` 表示列表项目使用小写罗马数字标号 (i, ii, iii...)
- `I` 表示列表项目使用大写罗马数字标号(I, II, III...)

**案例**

```html
<ol type="1">
    <li>苹果</li>
    <li>橘子</li>
    <li>菠萝</li>
    <li>柚子</li>
</ol>

<ol type="a">
    <li>苹果</li>
    <li>橘子</li>
    <li>菠萝</li>
    <li>柚子</li>
</ol>

<ol type="A">
    <li>苹果</li>
    <li>橘子</li>
    <li>菠萝</li>
    <li>柚子</li>
</ol>

<ol type="i">
    <li>苹果</li>
    <li>橘子</li>
    <li>菠萝</li>
    <li>柚子</li>
</ol>

<ol type="I">
    <li>苹果</li>
    <li>橘子</li>
    <li>菠萝</li>
    <li>柚子</li>
</ol>
```

## 有序嵌套列表

有序列表支持嵌套使用

**案例**

```html
<ol>
    <li>水果</li>
    <li>
        蔬菜
        <ol>
            <li>白菜</li>
            <li>油菜</li>
            <li>黄瓜</li>
        </ol>
    </li>
    <li>肉类</li>
</ol>
```
