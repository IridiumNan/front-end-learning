# 表格属性

## 表格边框

```css
/* 单元格无边框 */
#table1 {
    border: 1px solid red;
}

/* 单元格有边框 */
#table2 td {
    border: 1px solid red;
}
```

## 折叠边框

```css
/* table3：边框折叠，表格本身和内部的 td 都是蓝框 */
#table3 {
    border: 1px solid blue;
    border-collapse: collapse;
    /* border-collapse 必须作用在 table 本身 */
}
```

## 文本对齐

```css
#table4 {
    width: 400px;
    height: 400px;

    border-collapse: collapse;

    border: 1px solid black;

    /* 居中对齐 */
    text-align: center;

    color: darkcyan;
}
```

## 表格填充

```css
#table5 {
    width: 400px;
    height: 400px;

    border-collapse: collapse;

    border: 1px solid black;

    color: darkcyan;
}

/*td 的属性*/
#table5 td {
    padding: 40px;

    border: 1px solid black;
}
```

> [!NOTE]
> 注意， 不要写成 `#tableid, td`  
> 这种写法是合并选择器  
>
> 要改改变某个table的单元格， 要使用 `#table td`

## 表格颜色

```css
#table6 {
    border-collapse: collapse;

    border: 1px solid white;
}

#table6 td {
    /* 背景设置为蓝色 */
    background-color: blue;

    /* 字体设置为白色 */
    color: white;


    border: 1px solid white;
}
```
