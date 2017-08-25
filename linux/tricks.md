## linux

#### linux打印内存信息
```
cat /proc/meminfo
```

#### 按行显示PATH
```
echo "${PATH//:/$'\n'}"
```

#### 显示树形结构命令
```
tree
```

#### 生成关于文件和目录的空间使用情况的报告
```
du -sh *
du -sm *|sort -rn|head -10  `最大的10个文件`
```
#### 计算多少个cat进程正在执行
```
ps -a | grep cat | wc -l
```








