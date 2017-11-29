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

#### 使用 `cssText` 批量设置 `style` reduce reflow

#### [像 Sublime Text 一样使用 Chrome DevTools](https://chinagdg.org/2015/12/%E5%83%8F-sublime-text-%E4%B8%80%E6%A0%B7%E4%BD%BF%E7%94%A8-chrome-devtools/)













