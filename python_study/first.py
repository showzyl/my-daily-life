# if statement

# a = 100;
# if a > 0:
#   print a
# else:
#   print -a


# print like typeing input
# name = raw_input('what is ur name: ')
# print 'hello', name


# print "i'm fine"
# print 'i\'m fine'
# x = 10
# x = x + 2
# print x


# a = 'ABC'
# b = a
# a = 'XYZ'
# print b
# print a


# classmates = ['Michael', 'Bob', 'Tracy']
# print classmates
# print len(classmates)
# print classmates[3]


# test = (1, 2)
# print test
# print test[1]


# age = 3
# if age >= 18:
#   print 'your age is', age
#   print 'adult'
# else:
#   print 'tingger'

# names = ['Michael', 'Bob', 'Tracy']
# for name in names:
#   print name

# sum = 0
# aTmp = [0,1,2,3]
# for i in aTmp:
#   sum += i
#   #print i
# print sum

# aTmp = range(2, 10)
# print aTmp

# sum = 0
# n = 99
# while n > 0:
#   sum = sum + n
#   n = n - 2
# print sum

# d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
# d['lizi'] = 12
# print d
# print d.get('Michael')
# print abs(-200)
# print cmp(1,2)


# print int('123')
# print float('1.2323')
# print str(123)
# print bool(1)

# def my_abs(x):
#   if not isinstance(x, (int, float)):
#     raise TypeError('bad operand type')
#   if x >= 0:
#     return x
#   else:
#     return -x
#
# print my_abs(-100)
# # print my_abs('-100')


# import math
# def move(x, y, step, angle=0):
#   nx = x + step * math.cos(angle)
#   ny = y - step * math.sin(angle)
#   return nx, ny
#
# print  move(100, 100, 60, math.pi / 6)


# def power(x, n=2):
#   s = 1
#   while n > 0:
#     n = n - 1
#     s = s * x
#   return s
#
# print power(2, 3)

# l = ['l', 'y', 'z', 'x']
# for i, value in enumerate(l):
#   print i, value

# dict
# d = {'a': 1, 'b': 2, 'c': 3}
# for i, value in d.iteritems():
#   print i, value

# def f(x):
#   return x * x

# print map(f, [1,2,3,4,5])
# print map(map, [1,2,3,4,5])


# def f(x, y):
#   return x + y
#
# print reduce(f, [1,2,3,4,5])
# print sum([1,2,3,4,5])


# def f(x, y):
#   print x,y
#   return x * 10 + y
#
# print reduce(f, [1,2,3])


# def is_odd(n):
#   return n % 2 == 1
#
# print filter(is_odd, [1,2,3,4])


# def notEmpty(s):
#   return s and s.strip()
#
# print filter(notEmpty, ['A', '', 'B', None, 'C', '  '])




# print sorted([36, 5, 12, 9, 21, '12'])



# def revertCmp(x, y):
#   if x < y:
#     return 1
#   elif x > y:
#     return -1
#   else:
#     return 0
#
#
# print sorted([36, 5, 12, 9, 21], revertCmp)


# def now():
#   print '123'
# f = now
# f()
# print now.__name__
# print f.__name__



# decorator
# def log(fnc):
#   def wrapper(*args, **kw):
#     print 'call %s():' % fnc.__name__
#     return fnc(*args, **kw)
#   return wrapper
#
# @log
# def now():
#   print '123'
#
# now()

# import time
# print time.time()

# def log(txt):
#   def decorator(fnc):
#     def wrapper(*args, **kw):
#       print '%s %s():' % (txt, fnc.__name__)
#       return fnc(*args, **kw)
#     return wrapper
#   return decorator
#
# @log('execute')
# def now():
#     print '2013-12-25'
#
# now()


# !/usr/bin/env python
# -*- coding: utf-8 -*-

' a test module '


# __author__ = 'Michael Liao'
#
# import sys
#
# def test():
#     args = sys.argv
#     if len(args)==1:
#         print 'Hello, world!'
#     elif len(args)==2:
#         print 'Hello, %s!' % args[1]
#     else:
#         print 'Too many arguments!'
#
# if __name__=='__main__':
#     test()
#
# class Student(object):
#   pass
#
# bart = Student()
#
# print bart
# print Student


# class Student(object):
#   def __init__(self, name, score):
#     self.name = name
#     self.score = score
#
# def printScore(std):
#   print '%s: %s' % (std.name, std.score)
#
# bart = Student('Bart Simpson', 59)
#
# printScore(bart)


# bart = Student('Bart Simpson', 59)
# print bart.name
# print bart.score

#
# class Student(object):
#   def __init__(self, name, score):
#     self.name = name
#     self.score = score
#
#   def print_score(self):
#     print '%s: %s' % (self.name, self.score)
#
# bart = Student('Bart Simpson', 60)
# bart.print_score()


# from multiprocessing import Process
# import os
#
# def run_proc(name):
#   print 'Run child process %s (%s)...' % (name, os.getpid())
#
# if __name__=='__main__':
#   print 'parent is %s: ' % os.getpid()
#   p = Process(target=run_proc, args=('test',))
#   print 'start...'
#   p.start()
#   p.join()
#   print 'end...'


# from multiprocessing import Pool
# import os, time, random
#
# def long_time_task(name):
#   print 'run task %s (%s)...' % (name, os.getpid())
#   start = time.time()
#   time.sleep(random.random() * 3)
#   end = time.time()
#   print 'task %s runs %0.2f seconds.' % (name, (end - start))
#
# if __name__=='__main__':
#   print 'parent process %s.' % os.getpid()
#   p = Pool()
#   for i in range(9):
#     p.apply_async(long_time_task, args=(i,))
#   print 'Waiting for all subprocesses done...'
#   p.close()
#   p.join()
#   print 'All subprocesses done.'


import time, threading

print time.time()

def loop():
  print 'thread %s is running...' % threading.current_thread().name
  n = 0
  while n < 4:
    n = n + 1
    print 'thread %s >>> %s' % (threading.current_thread().name, n)
    time.sleep(1)
  print 'thread %s ended.' % threading.current_thread().name

print 'thread %s is running...' % threading.current_thread().name
t = threading.Thread(target=loop, name='LoopThread')
t.start()
t.join()
print 'thread %s ended.' % threading.current_thread().name



















































