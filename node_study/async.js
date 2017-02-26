/**
 * Created by showzyl on 2017/2/24.
 *  node version 7.6
 */

'use strict'

const fs = require('fs');

function asyncReadFile(file) {
	return new Promise(function (resolve, reject){
		fs.readFile(file, 'utf8', function (err, data) {
			if(err) return reject(err);
			resolve(data);
		});
	})
}

let test = async function () {
	let data = await asyncReadFile('./md5.js');
	console.log('t', data);
}

// test();


function t(time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('lizi')
		}, time)
	})
}

async function a(time, value) {
	let b = await t(time);
	console.log(b);
	await t(time);
	console.log(value);
}

a(2000, 123);
















