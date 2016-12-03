/**
 * Created by showzyl on 2016/11/22.
 */

'use strict';

var sqs = require('./index');

var params1 = {
	DelaySeconds: 0,
	MessageAttributes: {
		"City": {
			DataType: "String",
			StringValue: "Any City"
		},
		"Population": {
			DataType: "Number",
			StringValue: '1250800'
		}
	},
	MessageBody: "Information about the largest city in Any Region."
};

var params2 = {
	AttributeNames: [
		"All"
	],
	MaxNumberOfMessages: 1,
	MessageAttributeNames: [
		"All"
	],
	VisibilityTimeout: 1234
};

var params3 = {
	
};

sqs.init().then(function () {

	// for(var i=0;i<100;i++){
	// 	params1.QueueUrl = sqs.QueueUrl;
	// 	sqs.sendMsg(params1);
	// }

	params2.QueueUrl = sqs.QueueUrl;
	sqs.recevieMsg(params2).then(function (data) {
		params3.QueueUrl = sqs.QueueUrl;
		// data.Messages 是个数组,可遍历删除
		params3.ReceiptHandle = data.Messages[0].ReceiptHandle;
		sqs.deleteMsg(params3);
	});


	// sqs.purgeQueue({
	// 	QueueUrl: sqs.QueueUrl
	// })
	
}).catch(err => {
	console.log(err)
});






