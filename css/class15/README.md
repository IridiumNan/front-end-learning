# 定位

## 定义

`position` 属性指定了元素的定位类型

- relative - 相对定位
- absolute - 绝对定位
- fixed    - 固定定位

> [!NOTE]
> **绝对定位和固定定位会脱离文档流**  
> 固定定位的位置不会随着页面的滚动而改变

设置定位之后， 可以使用四个方向的值进行调整位置: `left` `top` `right` `bottom`

相关案例

- [relative](./relative.html)
- [absolute](./absolute.html)
- [fixed](./fixed.html)

> [!NOTE]
> 设置定位之后， 相对定位和绝对定位是相对于具有定位的父级元素进行位置调整， 如果父级元素不存在， 定位， 则继续向上层寻找， 直到顶层文档

相关案例

- [father](./father.html)

> [!NOTE]
> 通过设置 `z-index` 属性来设置覆盖的顺序  
> z-index 大的元素会覆盖 小的元素

- [z-index](./z-index.html)
