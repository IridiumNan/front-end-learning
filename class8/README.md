# 无序列表

无序列表始于 `<ul>` 标签， 每个列表项始于 `<li>` 标签

`ul` 代表 unordered list

**案例**

```html
<ul>
    <li>Nixos</li>
    <li>ArchLinux</li>
    <li>fedora</li>
    <li>ubuntu</li>
</ul>
```

**type属性**

`<ul>` 的属性 type 拥有的选项

- disc 默认实心圆
- circle 空心圆
- square 小方块
- none 不显示

```html
<ul type="disc">
    <li>Nixos</li>
    <li>ArchLinux</li>
    <li>fedora</li>
    <li>ubuntu</li>
</ul>

<ul type="circle">
    <li>Nixos</li>
    <li>ArchLinux</li>
    <li>fedora</li>
    <li>ubuntu</li>
</ul>

<ul type="square">
    <li>Nixos</li>
    <li>ArchLinux</li>
    <li>fedora</li>
    <li>ubuntu</li>
</ul>

<ul type="none">
    <li>Nixos</li>
    <li>ArchLinux</li>
    <li>fedora</li>
    <li>ubuntu</li>
</ul>
```

## 嵌套

跟有序列表相同, 无序列表也可以进行嵌套

```html
<p>操作系统</p>
<ul>
    <li>Windows</li>
    <li>macOS</li>
    <li>
        GNU/Linux
        <ul>
            <li>Nixos</li>
            <li>ArchLinux</li>
            <li>fedora</li>
            <li>ubuntu</li>
        </ul>
    </li>
</ul>
```

## 常见的应用场景

- 无序列表的效果
- 导航效果

许多网页的导航栏均是使用无序列表制作

```html
<ul>
    <li>Xiaomi手机</li>
    <li>Redmi手机</li>
    <li>电视</li>
    <li>笔记本</li>
</ul>
```
