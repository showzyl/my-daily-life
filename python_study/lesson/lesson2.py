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

# #时间与日期
# import time
# import calendar
# print time.localtime(time.time())
# print time.asctime( time.localtime(time.time()) )
# print calendar.month(2008, 1)


# # 定义函数
# def te(s):
#     print s
#     return 'abc'
#
# print te('test')



# # 可写函数说明
# def changeme(mylist):
#     "修改传入的列表"
#     mylist.append([1, 2, 3, 4])
#     print "函数内取值: ", mylist
#     return
#
# # 调用changeme函数
# # 外部定义的数据也被改变
# mylist = [10, 20, 30]
# changeme(mylist)
# print "函数外取值: ", mylist


# # 不定长参`var`是个元祖
# def te(*var):
#     print var
#     for i in var:
#         print i
#
# te(1,2,3)

# # 键盘输入
# str = raw_input("Please enter:");
# print "你输入的内容是: ", str


# # 打开与关闭文件
# # 打开一个文件
# # 必须进入到那个文件夹下才能写入成功
# fo = open("foo.txt", "wb")
# fo.write( "www.runoob.com!\nVery good site!\n")
# position = fo.tell()
# print "当前文件位置 : ", position



# # 重命名文件
# import os
# # os.rename("t1.txt", "t2.txt")
# os.remove("t2.txt")


# # 异常处理
# try:
#     fh = open('te.txt', 'r')
#     fh.write('test')
# except IOError:
#     print 'no te.js file'
# else:
#     print 'write success'
#     fh.close()

# # 异常嵌套
# try:
#     fh = open('te.txt', 'r')
#     try:
#         fh.write('123')
#     finally:
#         print 'going 2 close this file'
#         fh.close()
# except IOError:
#     print 'no file'

# 异常触发
# def test(level):
#     if level < 1:
#         raise Exception('invalid level')


# # 这样写抓不到错误，why?
# def test(p):
#     if p < 1:
#     # print 123
#         raise Exception('invalid level')
# try:
#     test(0)
# except "invalid level":
#     print 'invalid'
# else:
#     print 'hehe'


# 自定义异常 `调用时候的参数不能多设置`
class ValidationError(Exception):
    def __init__(self, errors):
        print 'errors: ', errors
        self.errors = errors

try:
   raise ValidationError("Bad hostname")
except ValidationError,e:
   print e




if __name__ == '__main__':
    pass
