## react backup

- **componentWillMount()**
组件`初次渲染前`调用，在组件生命周期内只被调用一次

- **componentDidMount()**
组件`初次渲染后`调用，在组件生命周期内只被调用一次

- **componentWillReceiveProps(props)**
组件`即将设置新属性`时被调用，这个方法在初次渲染时不会被调用，在此方法内调用setState方法不会引起组件重新渲染
参数`props`为新的属性值

- **shouldComponentUpdate(props, state)**
组件`即将重新渲染`时调用，该方法的返回值为boolean，当为true时表示可以重新渲染，为false时不可以重新渲染，**这个方法在组件初次渲染或者调用forceUpdate方法强制渲染时不被调用**
参数`props`为新的属性值，`state`为新的状态值

- **componentWillUpdate(props, state)**
组件`即将重新渲染`时调用，这个方法在组件初次渲染时不被调用，**在此方法内不可以调用setState方法**

- **componentDidUpdate()**
组件`重新渲染后`被调用

- **componentWillUnmount()**
组件实例`即将从DOM树移除`时被调用，这个方法在整个生命周期中只会被调用一次



## react 使用技巧学习

[原文链接](http://qianduan.guru/2017/01/11/react-higher-order-components-in-depth/)

1. 代理
2. refs
3. state
4. ii



