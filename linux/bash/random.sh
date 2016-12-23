#!/usr/bin/env bash


A=$RANDOM
B=$RANDOM

# 判断大小
#if [ ${A} -gt ${B} ]; then
#    echo 'A big'
#else
#    echo 'B big'
#fi

# 判断奇偶
if [ $[${A}%2] -eq 0 ]; then
    echo '偶数'
else
    echo '基数'
fi




