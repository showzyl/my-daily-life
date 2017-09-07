#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/9/7


# # True & False
# flag = True
#
# if flag:
#     print '1'
# else:
#     print '2'


# while 循环

# count = 0
# while (count < 9):
#     print 'The count is:', count
#     count += 1
# print "Good bye!"

# # for 循环
# for k in 'test':
#     print k

# # 序列索引迭代
# fruit = ['bana', 'apple', 'pear']
# for i in range(len(fruit)):
#     print fruit[i]
# print range(len(fruit))


# #pass语句
# for letter in 'Python':
#    if letter == 'h':
#       pass
#       print '这是 pass 块'
#    print '当前字母 :', letter
#
# print "Good bye!"

# # 格式字符串
# print "%s is test and weight is %d" % ('lizi', 21)

#时间与日期
import time
import calendar
print time.localtime(time.time())
print time.asctime( time.localtime(time.time()) )
print calendar.month(2008, 1)






if __name__ == '__main__':
    pass

