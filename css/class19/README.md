# CSS Sprite

CSS Sprite 是一种网页图片应用处理方式. 允许你将一个页面涉及到的所有另行图片都包含到一张大图当中

## 优点

- 减少图片的字节
- 减少网页的http请求， 从而大大提高网页的性能

## 原理

- 通过 `background-image` 引入背景图片
- 通过 `background-position` 把背景图片移动到需要的位置
- 设置 `width` `height` 保证只显示出需要的部分

案例查看 [index.html](./index.html)
