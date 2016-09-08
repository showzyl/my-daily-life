/**
 * Created by showzyl on 16/9/8.
 */

/**
 * inspired by http://blog.fens.me/nodejs-async/
 *
 *
  */

'use strict';
/**
 *  并发
 */
const async = require('async');
let arr = [{name:'Jack', delay:1000}, {name:'Mike', delay: 1000}, {name:'Freewind', delay:1000}, {name:'Test', delay: 1000}];
let count1 = 0;
async.whilst(
  () => { return count1 < arr.length; },
  (cb) => {
    console.log('1.1 count: ', arr[count1].name);
    setTimeout(cb, arr[count1].delay);
    count1++;
  },
  (err) => {
    console.log('1.1 err: ', err);
  }
);
