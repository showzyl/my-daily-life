/**
 * Created by showzyl on 16/4/7.
 */

// 遍历打印当日修改过的文件

'use strict';

const fs = require('fs');
//const rootPath = process.argv[1]; // 当前文件路径
const oTime = calculateTime();
let aFileList = [];


walk('/home/zengyuanli/caipiao/onebuy/src/');
aFileList.map( item => console.log(item) );


function walk(path){
  let aDirList = fs.readdirSync(path);
  // 记录当天修改的文件
  aDirList.map( item => {
    if(!/^\./.test(item)){
    var oItem = fs.statSync(path + '/' + item);
    if( oItem.isFile() && oItem.mtime>oTime.start && oItem.mtime<oTime.end ){
      aFileList.push( path + '/' + item );
    }
  }
});
  // 递归遍历目录
  aDirList.map( item => {
    if(fs.statSync(path + '/' + item).isDirectory()){
    if(!/^\./.test(item)){
      walk(path + '/' + item);
    }
  }
});

}

function calculateTime(){
  let todayStart = new Date();
  let todayEnd = new Date();
  todayStart.setHours(0);
  todayStart.setMinutes(0);
  todayStart.setSeconds(0);
  todayEnd.setHours(23);
  todayEnd.setMinutes(59);
  todayEnd.setSeconds(59);
  return {
    start: todayStart,
    end: todayEnd
  }
}






