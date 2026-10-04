# 媒体查询

媒体查询能使页面在不同的终端设备上达到不同的效果

媒体查询会根据设备的大小自动识别加载不同的样式

## meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

**参数解释**

- `width=device-width` 宽度等于当前设备的宽度
- `initial-scale` 出事的缩放比例 (默认设置为 1.0)
- `maximum-scale` 允许用户缩放到的最大比例 (默认设置为1.0)
- `user-scalable` 用户是否可以手动缩放 (默认设置为 no)

## 写法

```css
/* mobile device */
@media screen and (max-width: 768px) {
    .box {
        background-color: red;
    }
    /* other css*/
}

/* table */
@media screen and (min-width: 768px) and (max-width: 992px) {
    .box {
        background-color: aqua;
    }
    /* other css*/
}

/* PC */
@media screen and (min-width: 992px) {
    .box {
        background-color: blue;
    }
    /* other css*/
}
```
