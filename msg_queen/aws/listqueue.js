var AWS = require('aws-sdk');
var cfg = require('./config');
var sqs = new AWS.SQS(cfg);

var params = {
	QueueUrl: ''
};

sqs.listDeadLetterSourceQueues(params, function (err, data) {
	if (err) console.log(err, err.stack); // an error occurred
	else     console.log(data);           // successful response
});

