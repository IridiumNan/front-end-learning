# DOM 概述

DOM 是 js 操作网页的接口， 全称为 Document Object Model. 它的作用是将网页转为一个 js 对象， 从而可以使用脚本进行各种操作

浏览器会根据 DOM 模型， 将结构化文档 HTML 解析为一系列的节点， 再由这些节点组成一个树状结构 (DOM Tree). 所有节点和最终的树状结构都有规范的对外接口

DOM 只是一个接口规范， 可以使用各种语言实现。严格来说 DOM 不是 js 语法的一部分， 但是 DOM 操作时 js 最常见的任务

## Node

DOM 的最小组成单位叫做 node. 文档的树形结构就是由各种不同类型的 node 组成

节点的类型

| name | type |
| -- | -- |
| `Document` | 整个文档树的顶层节点 |
| `DocumentType` | doctype 标签 |
| `Element` | 网页的各种 HTML 标签 |
| `Attribute` | 网页元素的属性 |
| `Text` | 标签之间或标签包含的文本 |
| `Comment` | 注释 |
| `DocumentFragment` | 文档的片段 |

> [!NOTE]
> 除了根节点， 其他节点都有三种层级关系
> parentNode: 父节点
> childNode: 子节点
> sibling: 拥有同一父节点
