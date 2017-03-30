/**
 *  转换文件每一行的`key`和`value`
 */

'use strict';

const fs = require('fs');
const readline = require('readline');

let lineReader = readline.createInterface({
	input: fs.createReadStream('./ttt.txt'),
	output: ''
});

let aRes = [];
let a0 = [];
let a1 = [];
let a2 = [];

lineReader.on('line', function (line) {
	let aTmp = line.split(/\s/);
	a0.push(aTmp[0]);
	a1.push(aTmp[1]);
	a2.push(aTmp[2]);
});

lineReader.on('close', function () {
	for(let i = 0; i < a0.length; i++){
		aRes.push(a0[i] + a1[i] + a2[a0.length-1-i]);
	}
	console.log(aRes);
});











