#!/usr/bin/env bash

# 判断用户存在与否

#echo $# = 2;

if [ ! $# < 2 ]; then
    echo "Usage: $0 need one parma"
    exit
fi

echo 'in';

#if [ !$# < 1 ]; then
#    echo '请输入参数'
#    exit 1;
#fi
#
#echo $1;

#if id $1 &> /dev/null; then
#    echo 'use exist'
#else
#    echo 'sorry, user is null'
#fi



