## react backup

* componentWillMount 渲染前调用一次，这个时候DOM结构还没有渲染。
* componentDidMount 渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
* componentWillReceiveProps 初始化渲染不会调用，在接收到新的props时，会调用这个方法。
* shouldComponentUpdate 初始化渲染不会调用，接收到新的props或state时调用。
* componentWillUpdate 初始化渲染不会调用，更新前调用。
* componentDidUpdate 初始化渲染不会调用，更新后调用。
* componentWillUnmount 组件移除前调用。
* componentWillUnmount 组件移除前调用。







