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

#### 查看端口占用
```
lsof -i :8080
lsof -Pnl +M -i6 | grep 8080
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

#### sed 过滤和替换文本
```
sed 's/ /-/g' example.txt
替换空格为-
```

#### df 输出磁盘使用统计数据

#### iconv 转换文件编码
```
iconv -f GB18030 -t utf8 t.html > b.html
```

#### 每隔2s查看系统负载
```
watch 'cat /proc/loadavg'
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

#### cat useage
```
cat filename  把文本文件显示在屏幕上
cat file1 file2 复制文本文件
cat file1 file2 > newcombinedfile 合并文本文件
cat < file1 > file2 #copy file1 to file2 创建新的文本文件
```

#### awk useage
```
awk -F':' '{ print $1 }' /etc/passwd

https://www.cyberciti.biz/faq/bash-scripting-using-awk/
```

#### 报错后让脚本停止执行
```
set -euxo pipefail
```

#### 下载`video`标签里`blob`视频
```
ffmpeg -protocol_whitelist file,http,https,tcp,tls,crypto -i "http://1254235226.vod2.myqcloud.com/2a6c5067vodtransgzp1254235226/4978e7555285890785581204586/drm/v.f230.m3u8?t=5c685282&exper=0&us=xroz4nccud&sign=eb363f6e673bdb9efee2801defe695d6" -c copy video.mp4
```



