# 弹性盒子模型 (Flex Box)

## 定义

弹性盒子是 CSS3 的一种新的布局模式

CSS3 弹性盒是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当行为的布局方式

## CSS3 弹性盒内容

弹性盒子由弹性容器 (Flex container) 和弹性子元素 (Flex item) 组成

弹性容器通过设置 `display` 属性的值为 `flex` 将其定义为弹性容器

弹性容器内包含了一个或多个弹性子元素

> [!NOTE]
> 弹性容器外及弹性子元素内是正常渲染的  
> 弹性盒子只定义了弹性子元素如何在弹性容器内布局

**弹性盒子的默认摆放方向是水平**

## flex-direction

使用 `flex-direction` 属性设置摆放方式

- row (default)
- row-reverse (翻转靠右对齐)
- column
- column-reverse (翻转向下对齐)

## justify-content

用来调整内部弹性子元素在垂直方向上的摆放位置

- flex-start 靠上
- center     居中
- flex-end   靠下

## align-item

用来调整内部弹性子元素在水平方向上的摆放位置

- flex-start 靠左
- center     居中
- flex-end   靠右

## flex

子元素的属性， 用来调整权重

在主摆放方向上， 根据权重自动计算宽度(高度) 充满整个弹性盒子

具体的案例查看[index.html](./index.html)
