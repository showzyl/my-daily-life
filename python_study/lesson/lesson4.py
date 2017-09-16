#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/9/11


from __future__ import division
from numpy.random import randn
import numpy as np

# arr = np.arange(10)
# print np.sqrt(arr)
# print np.exp(arr)

# x = randn(8)
# y = randn(8)
# print x
# print y
# print np.maximum(x, y) # 元素级最大值
# arr = randn(7) * 5
# print arr
# print np.modf(arr)

# # `曼哈顿距离` python 实现
# from numpy import *
# vector1 = mat([1,2,3])
# vector2 = mat([4,5,6])
# print sum(abs(vector1-vector2))


# # 数学与统计方法
# arr = np.random.randn(5, 4) # 标准正态分布数据
# arr.mean()
# print np.mean(arr)
# print arr.sum()
# print arr.mean(axis=1)
# print arr.sum(0)


# 排序
arr = randn(8)
print arr
arr.sort()
print arr

# 随机数生成
samples = np.random.normal(size=(4, 4))
print samples













if __name__ == '__main__':
    pass

