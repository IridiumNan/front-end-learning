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
