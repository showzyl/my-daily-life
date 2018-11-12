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


#### 怎么做秒杀的功能
```
1、前端js倒计时；
2、服务器不断响应轮询；
3、客户端与服务器之间有一层网关，计算客户端请求通过的概率；
4、秒杀时间一到网关放行落在概率上的请求到服务器，服务器响应响应秒杀成功并返回商品；其余请求直接从网管返回秒杀结束到客户端；
5、由于秒杀成功概率极小，所以服务器毫无压力
```

#### 驼峰转换
```
/**
 * 转换 `-_` 成驼峰
 * @param {s} s 
 */
function convertHump(s, flag){
	flag = flag || '_'
	var sRes = s

	let sIndex = sRes.indexOf(flag)
	sRes = _covert(sRes, sIndex)

	function _covert(sRes, sIndex){
		if(sIndex === -1){
			return sRes
		}else{
			let wordTmp = sRes[sIndex++]
			sRes = sRes.replace(sRes[sIndex], sRes[sIndex].toLocaleUpperCase())
			sRes = sRes.replace(flag, '')
			sIndex = sRes.indexOf(flag)
			return _covert(sRes, sIndex)
		}
	}
	return sRes
}
```

#### css去掉自带滚动条
```
::-webkit-scrollbar {
    display: none;
}

```

#### 问如何知道一串字符串中每个字母出现的次数？
```
var arrString = 'abcdaabc'
arrString.split('').reduce(function(res, cur) {
 res[cur] ? res[cur]++ : res[cur] = 1;
 return res
},{})
```

#### 观察者模式简单实现

``` 
function fireEvent(eventname, eventdata, sid) {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent(eventname, false, true);
    ev.param = eventdata;
    doc.dispatchEvent(ev);
}

document.addEventListener(eventname, function (res) {
    
}
```

#### 生成一个二维数组中有`k`个一维数组
```
Array.from({length: k}, () => [])
```







