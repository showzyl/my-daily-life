inspire by [here](https://test120.quip.com/6EJdAvUqokDu)

JS 元编程

元编程 (metaprogramming) 就是用代码去写代码。

动态调用方法

* 没有 this 关键词的情况使用 call 和 apply

如果函数体没有 this 关键词，你可以直接忽略 call 和 apply 的第一个参数（因为它并不会被用到）。

```
let fn = function(a, b, c) {
  return a + b + c;
}

fn(1, 2, 3);
fn.call(undefined, 1, 2, 3);
fn.apply(undefined, [1, 2, 3]);
```

* 有 this 关键词的情况

你可以把 this 当做一个特别的参数，用 call 或者 apply 传进去。比如我们想设定某个对象的 x 属性，可以用 call 去把 this 传递进去：

```
function setX(value) {
  this.x = value;
}

let a = {};

// a.x = 10;
setX.call(a, 10);
setX.apply(a, [10]);
```

练习 - 调用数组里面的每一个函数

```
function fn1() {
  console.log("fn1");
}

function fn2() {
  console.log("fn2");
}

function fn3() {
  console.log("fn3");
}

let functions = [fn1, fn2, fn3];

// 写一个循环去调用 functions 里面的每一个元素
// 每个元素都调用 3 次。

/*
输出：

fn1
fn1
fn1
fn2
fn2
fn2
fn3
fn3
fn3
*/

```

练习 - 用函数去删除多个对象的 x 属性

```
function deleteX() {
    delete this["x"];
}


let objects = [
  {a: 1, x: 1},
  {a: 2, x: 2},
  {a: 3, x: 3},
];

// 写一个循环去删除每个对象的 x 属性。


console.log(objects);

/*
输出：

[
  {a: 1},
  {a: 2},
  {a: 3},
]
*/
```

动态调用对象的方法

练习 - 用方法名动态去调用方法

```
let o = {
  methodA() {
    return 1;
  },
  
  methodB() {
    return 2;
  }
}

let methods = ["methodA", "methodB"];

let results = {};

// 1. 动态调用 methods 数组里面指定的方法，收集结果到 results 字典里面

/*
result 输出应该是：

{
  methodA: 1,
  methodB: 2,
}
*/


解题视频：https://pan.baidu.com/s/1mhR7XES
解题代码：https://jsbin.com/qiduxab/edit?html,js,output
```

练习 - 处理方法不存在的情况

```
let o = {
  methodA() {
    return 1;
  },
  
  methodB() {
    return 2;
  }
}

let methods = ["methodA", "methodB", "methodC"];

let results = {};

// 1. 动态调用 methods 数组里面指定的方法，收集结果到 results 字典里面
// 2. 如果方法不存在，收集 undefined 到字典里面

/*
result 输出应该是：

{
  methodA: 1,
  methodB: 2,
  methodC: undefined,
}
*/
```


练习 - 动态调用 + 传参数 

* 用 apply https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

```
let o = {
  add1(x) {
    return x + 1;
  },
  
  add(x, y) {
    return x + y;
  }
}

let methods = [["add1", 10], ["add1", 30], ["add", 10, 20], ["foobar", 10]];


// 1. 动态调用 methods 数组里面指定的方法，并传参。收集结果到 results 数组里面
// 2. 如果方法不存在，收集 undefined 到数组里面

let results = [];

/*
results 输出应该是：

[11, 31, 30, undefined]
*/
```


练习 - 处理某个属性不是方法的问题

```
let o = {
  add1(x) {
    return x + 1;
  },
  
  add(x, y) {
    return x + y;
  },

  name: "crappy calculator",
}


let methods = [
 ["add1", 10],
 ["add1", 30],
 ["add", 10, 20],
 ["foobar", 10],
 ["name"],
];


// 1. 动态调用 methods 数组里面指定的方法，并传参。收集结果到 results 数组里面
// 2. 如果方法不存在，收集 undefined 到 results 数组里面
// 3. 如果某个属性不是方法，收集 "not a method" 到 results 数组里面

let results = [];

/*
results 输出应该是：

[11, 31, 30, undefined, "not a method"]
*/
```


练习 - 绑定 this 为对象本身

```
let o = {
  add1(x) {
    return x + 1;
  },
  
  add(x, y) {
    return x + y;
  },

  times2(x) {
    return this.add(x, x);
  },


  name: "crappy calculator",
}


let methods = [
 ["add1", 10],
 ["add1", 30],
 ["add", 10, 20],
 ["foobar", 10],
 ["name"],
 ["times2", 2]
];


// 1. 动态调用 methods 数组里面指定的方法，并传参。收集结果到 results 数组里面
// 2. 如果方法不存在，收集 undefined 到数组里面
// 3. 如果某个属性不是方法，手机 "not a method" 到数组里面

let results = [];

/*
results 输出应该是：

[11, 31, 30, undefined, "not a method", 4]
*/
```



获取对象的元数据

“元数据” 就是把程序本身当数据。比如我们想知道全局环境有些什么变量，这个信息就是一个 “元数据” 的例子。

练习 - 找出对象所有大于 0 的属性名

用 Object.keys (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 获取一个对象所有的属性。

```
let o = {
  a: 1,
  b: 2,
  c: -1,
  d: 3,
  e: -2,
}

// 输出大于 0 的属性名
// ["a", "b", "d"]

答案：https://jsbin.com/yelupe/edit?js,console
```

练习 - 找出原型对象的属性名

```
function MyClass() {
}

MyClass.prototype.a = 1;
MyClass.prototype.b = function() {
    return 2;
};

// 输出所有在原型链上面的属性
// ["a", "b"]
```

练习 - 找出数组的所有属性名

* 有些属性影藏了起来 (不可迭代属性)，Object.keys 不会返回这些属性名。
* 用 Object.getOwnPropertyNames 列出所有属性名，包括不可迭代属性。

```
let numbers = [1, 2, 3];

// 输出 numbers 有的所有属性
// ["concat", "constructor", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "length", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString", "unshift", "values"]


答案：https://jsbin.com/siroba/edit?js,console
```

练习 - 找出接受两个参数以上的方法

* 用 length 查看一个函数有几个参数

```
class MyClass {
  a(x) {}
  b(x, y) {}
  c() {}
  d(x,y,z) {}
}

// 输出接受两个参数以上的方法
// ["b", "d"]

答案：https://jsbin.com/jobibe/edit?js,console
```

练习 - 把全局函数按字母排序

全局变量其实就是 window 这个对象的属性。

* 请用 sort 方法去排序属性名

你应该会看到下面这些方法：
```
["$", "alert", "atob", "babel", "binToFile", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "emmetCodeMirror", "fetch", "find", "focus", "ga", "getComputedStyle", "getMatchedCSSRules", "getSelection", "hintingDone", "info", "jQuery", "loopProtect", "matchMedia", "moveBy", "moveTo", "onscroll", "open", "openDatabase", "postMessage", "prettyPrint", "print", "prompt", "releaseEvents", "reloadAddons", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollTo", "setInterval", "setTimeout", "start", "stop", "webkitCancelAnimationFrame", "webkitCancelRequestAnimationFrame", "webkitRequestAnimationFrame", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL"]
```
因环境而异，你的结果可能有些不一样。


生成类型

练习 - 手撕一个有 10 个属性的类型

创建一个 Holder 类型，它有 100 个属性。value1  到 value10, 返回值分别是 1 到 10
```
function Holder() { }

Holder.prototype.value1 = 1;
Holder.prototype.value2 = 2;
// ...

Holder.prototype.value10 = 10;

很累吧？

练习 - 动态生成 100 个属性

创建一个 Holder 类型，它有 100 个属性。value1  到 value100, 返回值分别是 1 到 100

function Holder() { }

// 用 ES6 class 语法也可以
// class Holder { }

let o = new Holder();
let o2 = new Holder();

o.value1;
// 1
o.value2;
// 2
o.value100;
// 100

o.value1 = -1;
o.value1;
// -1

// 修改 o 的属性不应该改动 o2 的属性
o2.value1
// 1
```

练习 - 动态生成 100 个方法

创建一个 Adder 类型，它有 100 个方法。add100(x) 的返回值是 x + 100。

```
function Adder() { }

let o = new Adder();

o.add1(1);
// 2

o.add2(1);
// 3

o.add3(1);
// 4

// ...

o.add100(1);
// 101

```

练习 - 动态生成 100 个全局函数

全局函数其实就是 window 这个对象的属性。请动态生成 100 个 全局函数：
```

add1(1);
// 2

add2(1);
// 3

add3(1);
// 4

// ...

add100(1);
// 101
```
练习 - 动态生成 100 个类型

请用元编程生成 100 个类型，Adder1 到 Adder100:

```
class Adder1 {
  constructor(x) {
    this.x = x;
  }

  calculate() {
    return this.x + 1;
  }
}

class Adder2 {
  constructor(x) {
    this.x = x;
  }

  calculate() {
    return this.x + 2;
  }
}

// ...

class Adder100 {
  constructor(x) {
    this.x = x;
  }

  calculate() {
    return this.x + 100;
  }
}

它们都有 calculate 这个方法，功能如下：

(new Adder1(1)).calculate();
// 2

(new Adder41(1)).calculate();
// 42

(new Adder100(1)).calculate();
// 101
```


生成函数的函数

JavaScript 的函数是对象。一个函数的返回值可以是个普通的对象，也可以是一个函数，因为函数也是对象。

我们可以声明一个 makeObject 函数，它返回一个对象，这个对象的 value 属性为 1：
```
function makeObject() {
  return { value: 1 }
}

let o = makeObject();
o.value;
// 1

我们可以声明一个 makeFunction 函数，它返回一个函数：

function makeFunction() {
  return () => 1;
}

let f = makeFunction();
f();
// 1
```
makeObject 和 makeFunction 并没有什么本质上的不同。这两个函数返回的都是对象。

makeFunction 是个返回函数的函数，江湖上叫它高阶函数。

所谓 “高阶函数” 其实没啥了不起，和返回普通的对象函数一样。你只要确保返回的函数满足了你的需求就行。

练习 - 生成某个固定值的函数

假设有个 makeObject 函数满足以下需求：
```
function makeObject(n) {
  return { value: n }；
}

let o;

o = makeObject(1);
o.value;
// 1

o = makeObject(42);
o.value;
// 42

请写出相对应的 makeFunction 函数满足类似的需求：

let f = makeFunction(1);

f();
// 1

let f2 = makeFunction(42);
f2();
// 42
```
练习 - 返回保留头 n 的数字元素的函数

```
let take1 = makeTakeN(1);
let take3 = makeTakeN(3);
let take6 = makeTakeN(6);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(take1(numbers));
// [1]
console.log(take3(numbers));
// [1, 2, 3]
console.log(take6(numbers));
// [1, 2, 3, 4, 5, 6]

take6 如果手写的话大概这样：

function take6(numbers) {
  return numbers.slice(0, 6);
}

```
答案：https://jsbin.com/rejaxac/edit?js,console


练习 - 生成嵌套调用方法的函数

实现  compose 这个函数，它的效果如下：
```
function add2(x) {
  return x + 2;
}

function times2(x) {
  return x * 2;
}

// (3 + 2) * 2
console.log(times2(add2(3)));
// 10

// f(x) = (x + 2) * 2
let f = compose(times2, add2);

f(3)
// 10

f(5)
// 14

// f(x) = (x * 2) + 2
let f2 = compose(add2, times2);
f2(3)
// 8

f2(5)
// 12

```
