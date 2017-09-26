## linux

#### linux打印内存信息
```
cat /proc/meminfo
```

#### 按行显示PATH
```
echo "${PATH//:/$'\n'}"
```

#### 显示树形结构命令 打印`zip`文件
```
tree -fi ~/Desktop/workspace/hybird/dist/nm/* | grep '.zip'
```

#### 每5行打印其中3行
```
sed -n '1~5{N;N;p}' file.txt
```

#### 忽略SVN文件和文件夹，递归查找最近一小时内修改过的文件
```
find . -mmin -60 -not -path "*svn*" -print|more
```

#### 查找和pwd相关的所有文件 linux
```
locate pwd
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




#### 等待某人登录时打印
```
watch -n 15 who
```

#### 查看组内用户
```
lid -g <groupname>
```

#### 获取内核版本
```
uname -a
```
