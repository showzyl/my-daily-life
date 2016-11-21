var AWS = require('aws-sdk'); 
var cfg = require('./config');
var sqs = new AWS.SQS(cfg);

var params = {
  DelaySeconds: 10, 
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
  MessageBody: "Information about the largest city in Any Region.", 
  QueueUrl: ""
 };
 sqs.sendMessage(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });