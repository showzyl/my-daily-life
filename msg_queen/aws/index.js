/**
 * Created by showzyl on 2016/11/22.
 */

'use strict'

const Q = require('q');
var AWS = require('aws-sdk');
var config = require('./config');

var sqs = {
	client: null,
	QueueUrl: null,
	QueueName: 'test_install_delay'
};

var init_sqs = function () {
	sqs.client = new AWS.SQS(config);
	return Q(sqs.client);
};

sqs.init = function () {
	var deferred = Q.defer();
	init_sqs().then(function () {
		return sqs.getQueueUrl();
	}).then(function () {
		//console.log(sqs.QueueUrl);
		return deferred.resolve();
	});
	return deferred.promise;
};

sqs.getQueueUrl = function () {
	var deferred = Q.defer();
	sqs.client.getQueueUrl({
		QueueName: sqs.QueueName
	}, function (err, data) {
		if (err) {
			deferred.reject(new Error(err.stack));
		} else {
			sqs.QueueUrl = data.QueueUrl;
			deferred.resolve();
		}
	});
	return deferred.promise;
};

sqs.listQueues = function () {
	var deferred = Q.defer();
	console.log(sqs.QueueUrl);
	sqs.client.listDeadLetterSourceQueues({
		QueueUrl: sqs.QueueUrl
	}, function (err, data) {
		if(err){
			deferred.reject(new Error(err.stack));
		}else{
			console.log('data', data);
			deferred.resolve();
		}
	});
	return deferred.promise;
};

sqs.sendMsg = function (params) {
	var deferred = Q.defer();
	sqs.client.sendMessage(params, function (err, data) {
		if(err){
			deferred.reject(new Error(err.stack));
		}else{
			console.log('sendMsg: ', data);
			deferred.resolve(data);
		}
	});
	return deferred.promise;
};

sqs.recevieMsg = function (params) {
	var deferred = Q.defer();
	sqs.client.receiveMessage(params, function (err, data) {
		if(err){
			console.log(err.stack);
			deferred.reject(new Error(err.stack));
		}else{
			console.log('recevieMsg: ', data);
			deferred.resolve(data);
		}
	});
	return deferred.promise;
};

sqs.deleteMsg = function (params) {
	var deferred = Q.defer();
	sqs.client.deleteMessage(params, function (err, data) {
		if(err){
			console.log(err.stack);
			deferred.reject(new Error(err.stack));
		}else{
			console.log('deleteMsg: ', data);
			deferred.resolve(data);
		}
	});
	return deferred.promise;
};


// 净化队列
sqs.purgeQueue = function (params) {
	var deferred = Q.defer();
	sqs.client.purgeQueue(params, function (err, data) {
		if(err){
			console.log(err.stack);
			deferred.reject(new Error(err.stack));
		}else{
			console.log('data', data);
			deferred.resolve(data);
		}
	});
	return deferred.promise;
};

module.exports = sqs;
















