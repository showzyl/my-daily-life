inspire by [here](http://www.renfed.com/2017/01/30/chrome-build-dom/)
inspire by [here](https://zhuanlan.zhihu.com/p/25380611?utm_medium=social&utm_source=qq)

### 简单描述浏览器创建dom做了什么

1.`HTMLDocumentParser`类 解析html文本为`tokens`
2.`HTMLTreeBuilder` 对tokens进行分类
3.根据不同的标签类型,在文档的不同位置,调用`HTMLConstructionSite`不同的函数构建dom
4.`HTMLConstructionSite`借助工厂类创建不同的html标签,并建立起`父子兄弟节点关系`,这棵树的根节点是`m_document`

