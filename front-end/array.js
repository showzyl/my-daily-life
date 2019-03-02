/**
 * Created by showzyl on 2017/3/1.
 */

'use strict'
	
	let aTmp = [{
		txt: 'hehe0',
		id: 0
	}, {
		txt: 'hehe1',
		id: 1
	}, {
		txt: 'hehe2',
		id: 2
	}];


	// map
	let mapRes = aTmp.map((item, i) => {
		console.log(item, i)
	});

	// reduce
	const aTmp2 = [0, 1, 2, 3];
	let reduceRes = aTmp2.reduce((pre, next, i) => {
		return pre + next;
	});
	console.log('res:', reduceRes);
	
	// filter
	let filterRes = aTmp.filter(item => {
		// console.log(item);
		return item.id > 0;
	});
	console.log(filterRes);
	
	// find
	let findRes = aTmp.find(item => {
		// console.log(item);
		return item.id === 3;
	});
	console.log(findRes);
	
	
	
	
	
	
	
	
	
	
	
	
