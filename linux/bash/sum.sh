#!/usr/bin/env bash

# 求200以内所有为3的整数倍的整数之和

sum=0

for((i=1;i<200;i++)); do
    if [ $[${i}%3] -eq 0 ]; then
       sum=$[${sum}+${i}]
    fi
done

echo "sum is: ${sum}"




