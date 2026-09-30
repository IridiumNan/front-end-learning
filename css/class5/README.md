# 字体属性

CSS 字体属性， 定义 字体， 颜色， 大小， 加粗， 文字样式

## color

```css
div{ color: red;}
div{color: #ff0000;}
div{color: rgb(255, 0, 0);}
div{color: rgba(255, 0, 0, 0.5);}
```

- `rgb` 是基于 red, green, blue 三原色的组合得到的颜色

每一个维度的范围都是 0~255

- `rgba` 多了一个 $\alpha$, 用于调整透明度

$\alpha$ 的取值为 0(完全透明)~1(完全不透明)

---

## font-size

用于设置字体的大小

```css
div{font-size: 40px;}
div{font-size: 30px;}
div{font-size:14px;}
```

> [!NOTE]
> Chrome 浏览器能够接受的最小的字体是 12px

---

## font-weight

设置文本的粗细

|value|description|
|---|---|
|`bold`| 粗体 |
|`bolder` | 更粗 |
| `normal`| 默认 |
| `lighter` | 更细 |
|`100~900` | 定义从细到粗 |

> [!NOTE]
> 默认字体的粗细为 400, bold 为 700

```css
div{font-weight: normal;}
div{font-size: bold;}
div{font-weight:900;}
```

---

## font-style

指定文本的字体样式

- `normal` 默认
- `italic` 斜体

---

## font-family

指定元素的字体

> [!NOTE]
> 不同的值之间使用 `,` 分开  
> 如果字体名称包含空格， 必须添加引号

```css
div{font-family: "Microsoft YaHei", "Simsum", "SimHei"}
```
