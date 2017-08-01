## 前端技巧

[将方法从对象中解耦](http://www.zcfy.cc/article/functional-javascript-decoupling-methods-from-their-objects-2643.html)
```
const map = f => x => Array.prototype.map.call(x, f)
```

#### twitter 删除关注脚本
```
const list = document.querySelectorAll('.js-follow-btn');
for(let i=0;i<list.length;i++){
    setTimeout(() => {
        list[i].click();
    }, 800)
}
```















