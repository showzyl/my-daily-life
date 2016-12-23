/**
 * Created by showzyl on 2016/10/24.
 */


/**
 *  Q 模块的使用
 */
'use strict';

const Q = require('q');

const a = '123';
const b = 'u are right...';

function mod1() {
	let deffer = Q.defer();
	if(a === '123'){
		deffer.resolve('u are right...')
	}else{
		deffer.reject('fuck, i\'m wrong...')
	}
	return deffer.promise;
}

// 链式调用
// mod1().then(res => {
// 	//console.log(res);
// 	return res;
// }).then(res => {
// 	let arr = res.split(' ');
// 	return arr;
// }).then(item => {
// 	console.log(item);
// }).catch( err => {
// 	console.log(err);
// });

// 链式调用可返回`promise`

function mod2(res) {
	console.log(res);
	let deffered = Q.defer();
	if(res === b){
		deffered.resolve('good man');
	}else{
		deffered.reject('hehehe');
	}
	return deffered.promise;
}

mod1().then(res => {
	//console.log(res);
	return mod2(res);
}).then(res => {
	console.log(res);
}).catch(err => {
	console.error(err);
});








