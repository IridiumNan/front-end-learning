# HTML5 新标签

`HTML5` 是 `HTML` 最新的修订版本

在 `HTML5` 出现之前， 一般采用 `DIV+CSS` 布局， 但是这样的布局方式不仅使得文档结构不够清晰， 并且不利于 搜索引擎爬虫对我们网页的爬去。 为了解决上述缺点， `THML5` 新增了很多新的语义化标签

**传统div布局**

```html
<div id="header"></div>
<div id="nav"></div>
<div id="article">
    <div id="section">
        
    </div>
</div>
<div id="aside"></div>
<div id="footer"></div>
```

**HTML5新标签布局**

```html
<header></header>
<nav></nav>
<article>
    <section>
        
    </section>
</article>
<aside>
    
</aside>
<footer>
    
</footer>
```

- `header` 头部
- `nav` 导航
- `section` 定义文档中的节， 比如章节， 页眉， 页脚
- `aside` 侧边栏
- `footer` 脚部
- `article` 代表一个独立的， 完整的相关内容块， 例如一篇完整的帖子， 一篇博客文章， 一个用户评论等

> [!NOTE]
> 但是新的标签， 有些老的浏览器不兼容
