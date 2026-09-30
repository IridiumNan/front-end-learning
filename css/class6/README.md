# 背景属性

CSS 当中的背景属性主要有以下几个

| 属性 | 描述 |
| --- | --- |
| `background-color` | 背景颜色 |
| `background-image` | 背景图片 |
| `background-position` | 背景图片展示位置 |
| `background-repeat` | 背景图片如何填充 |
| `background-size` | 背景图片大小属性 |

---

## background-color

该属性设置背景颜色

```css
.box{
    width: 300px;
    height: 300px;
    background-color: palegoldenrod;
}
```

---

## background-image

设置背景图片

元素的背景是元素的总大小， 包括填充和边界。 默认情况下 `background-image` 属性防止在元素的左上角， 如果图片不够大的话会在垂直和水平方向平铺图像， 如果图片大小超过元素大小， 则只会显示图片的左上部分

```css
.box{
    width: 600px;
    height: 600px;
    /* 上面的两个属性都是容器本身的属性 */
    /* 不一定会产生跟图片相互匹配的效果 */
    background-image: url("images/img1.jpg");
}
```

**background-repeat** 属性

该属性设置如何平铺背景图片

| 值 | 说明 |
| --- | --- |
| repeat | 默认值， 在x, y方向都平铺 |
| repeat-x | 只在水平方向上平铺 |
| repeat-y | 之向垂直方向平铺 |
| no-repeat | 不进行平铺 |

```css
.box{
    width: 600px;
    height: 600px;
    background-image: url("images/img1.jpg");
    /*禁用平铺 常用*/
    background-repeat: no-repeat;
}
```

**background-size** 属性

该属性设置背景图片的大小

| 值 | 说明 |
| --- | --- |
| `length` | 设置背景图片的宽度和高度, 第一个是宽度， 第二个是高度， 如果只设置一个， 则第二个值auto |
| `percentage` | 计算相对位置区域的百分比， 第一个是宽度 |
| `cover` | 保持图片纵横比缩放将图片缩放至完全覆盖背景区域的最小大小 |
| `contain` | 保持图片纵横比并将图片缩放成适合背景图片区域的最大大小 |

> [!NOTE]
> `cover` 保证整个背景都被覆盖, 最常用  
> `contain` 保证整个图片都显示出来

**background-position** 属性

| 值 | 说明 |
| --- | --- |
| `left top` | 左上 |
| `left center` | 左中 |
| `left bottom` | 左下 |
| `right top` | 右上 |
| `right center` | 右中 |
| `right bottom` | 右下 |
| `center top` | 中上 |
| `center center` | 中中 |
| `center bottom` | 中下 |
| `x% y%` | 第一个为水平位置百分比， 第二个为竖直位置百分比 |
