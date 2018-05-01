### [top](https://mp.weixin.qq.com/s?__biz=MzIzNjUxMzk2NQ==&mid=2247489261&idx=1&sn=ff254aadb190e38463823ed5ed87f284&chksm=e8d7e92fdfa06039a38a86938b02ada4fae1d1e2003e8b9d81b06c3fcf085b8274f05f1afd1a&scene=27#wechat_redirect)



- 系统负载
```
load average 第一个值
表示当前正在等待被cpu调度的进程数量，这个值小于系统vcpu数（超线程数）的时候比较正常.
```

- 总进程数
```
Tasks:  94 total
该值过大的时候就会导致 load average 过大
```


- cpu 的空闲时间
```
%Cpu(s):    99.7 id
较高时表示系统 cpu 处于比较清闲的状态，如果该值较低，则说明系统的 cpu 比较繁忙.
需要注意的是，有些时候该值比较高，表示 cpu 比较清闲，但是 load average 依然比较高，这种情况很可能就是因为进程数太多，进程切换占用了大量的 cpu 时间，从而挤占了业务运行需要使用的 cpu 时间。
```


- I/O 等待时间
```
%Cpu(s):    0.0 wa
该值较高时表示系统的瓶颈可能出现在磁盘和网络
```

- 系统 剩余内存
```
KiB Mem :  1117284 free
反应系统内存使用情况
```

- iostate 查看磁盘使用情况 （工具）
```
只用关注（%util）
```

- perf（工具）
```
1、安装 perf。

yum install perf

2、下载火焰图工具。

git clone https://github.com/brendangregg/FlameGraph.git

采样。

3、perf record -e cpu-clock -g -p 1572（业务进程 id）

一段时间（通常 20s 足够）之后 ctrl+c，结束采样。

4、用 perf script 工具对 perf.data 进行解析。

perf script -i perf.data &> perf.unfold。

PS：如果在容器中运行的程序有较多的依赖，则该命令解析出来的符号中可能会有较多的“Unregistered symbol…”错误，此时需要通过--symfs参数指定容器的rootfs位置来解决该问题。获取容器rootfs的方法根据 docker 的 storagedriver 的不同而有所不同，如果是device mapper类型，则可以通过 dockerinspect 找到容器的rootfs所在位置，如果是overlay类型，则需要通过 dockerexport 命令将该容器的rootfs导出来，如果是富容器的话，一般都有外置的rootfs，直接使用即可。

5、将 perf.unfold 中的符号进行折叠。

./stackcollapse-perf.pl perf.unfold &> perf.folded

6、最后生成 svg 图。

/flamegraph.pl perf.folded > perf.svg


如果程序中有一些函数占用了大量的 CPU 时间，则会在图片中以长横条的样式出现，表示该函数占用了大量的 CPU 时间

```

```
list, dynamic, dependencies
```






















