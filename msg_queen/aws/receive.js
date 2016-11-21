var AWS = require('aws-sdk'); 
var cfg = require('./config');

var sqs = new AWS.SQS(cfg);
 var params = {
  AttributeNames: [
     "All"
  ], 
  MaxNumberOfMessages: 10, 
  MessageAttributeNames: [
     "All"
  ], 
  QueueUrl: "",
  VisibilityTimeout: 123
 };
 sqs.receiveMessage(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });
