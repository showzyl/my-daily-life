/**
 * Created by showzyl on 16/9/29.
 */

'use strict';

const pinyin = require('pinyin');
const _ = require('lodash');
const fs = require('fs');


const arr = ['梨子', '琳琳', '你妹'];
let aRes = [];

let aTmp = arr.map(item => {
  return pinyin(item, {
    style: pinyin.STYLE_NORMAL, // 设置拼音风格
    heteronym: true
  })
});

aTmp.forEach(item => {
  let tmp = _.flatten(item);
  aRes.push(tmp.join('-')+'\n');
});

console.log(aRes.join(''));

fs.writeFile('./output.txt', aRes.join(''), err => {
  if (err) return console.log(err);
  console.log('write success');
});


