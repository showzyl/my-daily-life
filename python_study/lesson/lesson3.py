#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/9/11

# # 向量相加
# def pythonsum(n):
#     a = range(n)
#     b = range(n)
#     c = []
#     for i in range(len(a)):
#         a[i] = i ** 2
#         b[i] = i ** 3
#         c.append(a[i] + b[i])
#     return c
# print pythonsum(4)


import numpy as np

# def numpysum(n):
#     a = np.arange(n) ** 2
#     b = np.arange(n) ** 3
#     c = a + b
#     return c

# print numpysum(4)

# 效率比较 `numpy`效率高多了
# from datetime import datetime

# # 创建数组
# a = np.arange(5)
# print a
# print a.dtype
# print a.shape
# print len(a)

# # 创建多维数组
# print np.zeros(10)
# print np.zeros(10)
# print np.zeros((3, 6))
# print np.empty((2, 3, 2))


# # 选取数组元素
# a = np.array([[1,2],[3,4]])
#
# print a[0,0]
# print a[0,1]


# numpy数据类型

# print np.float64(42)
# print np.int8(42.0)
# print np.bool(42)
# print np.bool(0)
# print np.float(False)

print np.arange(7, dtype=np.uint16)







if __name__ == '__main__':
    pass

