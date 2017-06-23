#!/usr/bin/env bash

# loop
for item in lizi bala test; do
    if [ ${item} = bala ]; then
        echo '呵呵'
    else
        echo ${item}
    fi
done

# prev command success
if [ $? -eq 0 ];then
    echo 'build success';
else
    echo 'build error';
fi


