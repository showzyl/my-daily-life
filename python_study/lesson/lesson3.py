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

# print np.arange(7, dtype=np.uint16)

# a = np.arange(9)
# print a
# print a[3:7]


# #多维数组的切片与索引
# b = np.arange(24).reshape(2,3,4)
# print b.shape
# print b
# print b[0,0,0]


# # 数组转置
# arr = np.arange(15).reshape((3, 5))
# print arr
# print arr.T

#数据类型对象
# a = np.array([1,2,3])
# print a.dtype.byteorder
# print a.dtype.itemsize





# # 字符串编码
# print np.dtype('f')
# print np.dtype('d')
# print np.dtype('f8')
# print np.dtype('Float64')


# # 组合数组
# a = np.arange(9).reshape(3,3)
# print a
# b = 2 * a
# print b
# print np.hstack((a, b))
# print np.concatenate((a, b), axis=1)
# print np.vstack((a, b))

# oned = np.arange(2)
# print oned
# twice_oned = 2 * oned
# print twice_oned
# print np.column_stack((oned, twice_oned))
# print np.row_stack((oned, twice_oned))



# # 数组的分割
# a = np.arange(9).reshape(3, 3)
# print a
# print np.hsplit(a, 3)
# print np.split(a, 3, axis=1)
# print np.vsplit(a, 3)


# # 数组的属性
# b=np.arange(24).reshape(2,12)
# print b.ndim
# print b.size
# print b.itemsize
# print b.nbytes
# print b.real
# print b.imag
# print b.flat


# 数组的转换
b = np.array([ 1.+1.j,  3.+2.j])
print b
print b.tolist()
print b.tostring()
print b.astype(int)




# #布尔型索引 Todo
# names = np.array(['Bob', 'Joe', 'Will', 'Bob', 'Will', 'Joe', 'Joe'])
# data = np.random.randn(7, 4)
# names
# data
#
# names == 'Bob'
# data[names == 'Bob']
#
# data[names == 'Bob', 2:]
# data[names == 'Bob', 3]
#
# names != 'Bob'
# data[-(names == 'Bob')]
#
# mask = (names == 'Bob') | (names == 'Will')
# mask
# data[mask]
#
# data[data < 0] = 0
# data
#
# data[names != 'Joe'] = 7
# data
#
# #花式索引
# arr = np.empty((8, 4))
# for i in range(8):
#     arr[i] = i
# arr
#
# arr[[4, 3, 0, 6]]
#
# arr[[-3, -5, -7]]
#
# arr = np.arange(32).reshape((8, 4))
# arr
# arr[[1, 5, 7, 2], [0, 3, 1, 2]]
#
# arr[[1, 5, 7, 2]][:, [0, 3, 1, 2]]
#
# arr[np.ix_([1, 5, 7, 2], [0, 3, 1, 2])]



if __name__ == '__main__':
    pass

