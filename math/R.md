## R学习记录


### c(x,y,...)

* 定义一个向量(vector)

### seq(from=1, to=30)

### rep(x, times=n)

* 重复多少次

### sin(x) 
### sum(x) 

...


### matrix(x,4,4,byrow=T)

### 定义矩阵 && 求矩阵的秩

* a = matrix(c(2,3,1,-2),ncol = 2 )
* qr(d)$rank 

d = matrix(c(2,1,-1,0,4,0,5,1,1,3,-3,0,0,2,1,2),ncol = 4, nrow = 4 )


### 平均数

* mean(a)

### 众数
* sort(a) 找出现次数最多的

### 中位数
* 奇数个`sort(a)`后找中间,偶数个`sort(a)`后中间两位/2
(sort(A)[5]+sort(A)[6])/2

### 标准差
* sd(a)

### 方差
* var(a)

### 茎叶
* stem(a)

### 箱线图
* boxplot(a)



```
 
```





