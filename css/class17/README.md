# 动画

动画是使元素从一个样式逐渐变化为另一种样式的效果

可以改变任意多的样式任意多的次数

使用百分比来规定变化发生的时间， 或使用关键词 `from` `to`, 等价于 `0%` `100%`

`0%` 表示动画开始 `100%` 表示动画结束

## @keyframes 创建动画

```css
@keyframes name{
    from|0%{
        css 样式
    }
    percentage{
        css 样式
    }
    to|100%{
        css 样式
    }
}
```

- name: 动画名称， 自己命名
- percentage: 进度百分比

---

## animation 运行动画

```css
animation: name duration timing-function delay iteration-count direction
```

| value | desc |
| -- | -- |
| name | 动画名称 |
| duration | 动画持续时间 |
| timing-function | 设置动画效果的速率 |
| delay | 设置动画开始的时间 |
| iteration-count | 设置动画循环的次数, `infinite` 无限循环 |
| direction | 设置动画播放方向 |
| animation-play-state | 控制动画播放状态: `running` 代表播放， `paused` 代表停止 |

**timing-function**

| value | desc |
| -- | -- |
| ease | 逐渐变慢(default) |
| linear | 匀速 |
| ease-in | 加速 |
| ease-out | 减速 |
| ease-in-out | 先加速后减速 |

**direction**

| value | desc |
| -- | -- |
| normal | 向前播放 (default) |
| alternate | 奇数次向前播放， 偶数次反向播放 |
