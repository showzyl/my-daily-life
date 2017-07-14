### 机器学习课程

#### 朴素贝叶斯

- 散点图(Scatter plot)
- 决策面(Descision surface)
- 朴素贝叶斯(Naive Bayes)
```
先验
归一化
后验

缺点: 会间断. 比如`芝加哥公牛`
```

#### SVM(Support Vector Machine)

```
寻找介于两个类别的数据之间的**超平面**分割线
某些情况需要忽略`异常(outlier)`的数据
核技巧(Kernel Trick): 低维映射到多维

缺点:
1、大量数据下训练时间较长
2、噪音过多的情况下会过拟合(overfitting)
```

#### 决策树(Decision Tree)

```
顾名思义就是类似一棵树的结构, 在某些枝节进行多次分割.
熵(entropy): 决定决策树在何处分割数据的方式
信息增益(information gain): 熵(parent) - 分割父项后生成子项的熵的加权平均
决策树算法会最大程度提升信息增益
缺点:
容易过拟合(overfitting)

```



#### 回归(Regression)

```
线性方程 `y = 斜率(slope) * x + 截距(intercept)`
`error`是指误差而不是指错误
最小误差平方和算法(Minimizing the sum of squared Errors):
1. 最小二乘法 (ordiary least squares OLS)
2. 梯度下降 (gradient descent)
`0 < r^2 < 1`
多变量回归(multi-variate regression)
```

#### 异常值(Outlier)

```
如何检测
删除算法

1.Train
2.Remove point with largest residual error (may 10%)
3.Re-Train

2 && 3 repeat

```

#### 聚类(Clustering)

```
降维(Dimensionality Reduce)
Most use algorithm: K-meas

1.Assign
2.Optimize

局部最小值(Local minimum)

```


#### 特征缩放(Feature scaling)


```
X' = X - X(min) / X(max) - X(min)
```

#### 文本学习(Learning from text)

```
词干提取(Stemming)  nltk
词袋(Bag of words)
TF
IDF
```

#### 特征选择(Feater Selection)

```
正则化(regularization)

索套回归 (Lasso Regression)

minimize 减少平方误差 + 最大化减少使用特征s数量

SSE(sum of squared errors) + λ|β| (penalty parameter * coefficient of regression)
```

#### 主成成分分析(PCA)

```

```

##### 监督学习
- 离散: 分类(classification)
- 连续: 回归(regression)
- 预测

##### 无监督
- 聚类
- 降维


1.精确性
2.训练时间
3.易用性

















