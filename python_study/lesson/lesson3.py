#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/9/11

# # 向量相加-Python
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

def numpysum(n):
    a = np.arange(n) ** 2
    b = np.arange(n) ** 3
    c = a + b
    return c

# print numpysum(4)

# 效率比较 `numpy`效率高多了
from datetime import datetime

a = np.arange(5)
print a
print a.dtype
print a.shape
print len(a)



















if __name__ == '__main__':
    pass

