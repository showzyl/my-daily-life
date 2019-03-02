### stage.js 分析

```
 lib
    - anim.js
    - atlas.js
    - canvas.js
    - core.js
    - event.js
    - image.js
    - index.js
    - layout.js
    - license.js
    - loop.js
    - matrix.js // 矩阵
    - pin.js 
    - root.js // dom树根节点
    - str.js
    - texture.js
    - tree.js 
    addon
        - easing.js
        - mouse.js
        - tween.js
    loader
        - cordova.js
        - web.js
    util
        - await.js // `await`语法糖
        - create.js // `Object.create`
        - event.js // 
        - extend.js // 实现`js继承`
        - insert.js
        - is.js // 判断数据类型 copy from underscore
        - math.js
        - memo.js
        - now.js // date函数
        - once.js
        - repeat.js
        - stats.js // 统计模块(暂无)
        - string.js // 比较两个字符串
```

### core.js

```
核心函数
拿到调用传入的参数cb/obj后分别进行实例化.
(1)如果创建的是`canvas`则调用`app()`,然后调用`start()`
`start()`调用了`loader/web.js`的`AppLoader()`
(2)如果创建的是`资源`,调用`atlas.js`
```

### loader/web.js

```
监听页面加载

`AppLoader函数`
创建`canvas` 调用`lib/root.js` 进行页面渲染
处理`屏幕旋转`和`重力感应`

`ImageLoader函数`

```

### root.js

```
构建dom树根节点
`background``viewport``viewbox`



```


### loop.js

```





```

