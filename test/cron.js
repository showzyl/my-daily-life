/**
 * Created by showzyl on 16/10/9.
 * 1534241
 */

'use strict';

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/install';

var argv1 = process.argv[2];
var argv2 = process.argv[3];

if(!argv1 && !argv2){
  return console.log('param error!');
}

argv1 = parseInt(argv1);
argv2 = parseInt(argv2);

var beforeTime1 = new Date( (new Date(argv1)).toISOString() );
var beforeTime2 = new Date( (new Date(argv2)).toISOString() );


MongoClient.connect(url, function(err, db) {
  if(err) return console.log(err);
  var col = db.collection('install');
  col.deleteMany({
    ttl: {
      $lt: beforeTime1,
      $gt: beforeTime2
    }
  }, function (err, doc) {
    if(err) return console.log(err);
    if(doc.result.n){
      console.log('success', doc.result.n);
    }else{
      console.log('something error...');
    }
    db.close();
  });

});

// col.find({
//   ttl: {
//     $lt: beforeTime1,
//     $gt: beforeTime2
//   }
// }).toArray(function(err, items) {
//   if(err) return console.log(err);
//   console.log(items.length);
//   // items.map(function (item) {
//   //   col.deleteOne({
//   //     ttl: item.ttl
//   //   }, function (err, result) {
//   //     if(err) return console.log(err);
//   //     console.log('success', result);
//   //   })
//   // });
//   db.close();
// });

// col.find({
//   ttl: {
//     $lt: beforeTime1,
//     $gt: beforeTime2
//   }
// }).toArray(function(err, items) {
//   if(err) return console.log(err);
//   console.log(items.length);
//   items.map(function (item) {
//     col.deleteOne({
//       ttl: item.ttl
//     }, function (err, result) {
//       if(err) return console.log(err);
//       console.log('success', result);
//     })
//   });
//   db.close();
// });


// col.find({
//   ttl: { $lt: beforeTime }
// }).toArray(function(err, items) {
//   if(err) return console.log(err);
//   console.log(items.length);
//
//   db.close();
// });

// if(items.length > 10000){
//   items.length = 10000;
// }
// items.map(function (item) {
//   col.deleteOne({
//     ttl: item.ttl
//   }, function (err, result) {
//     if(err) return console.log(err);
//     console.log('success', result);
//   })
// });



// col.deleteMany({
//   ttl: {
//     $lt: beforeTime1,
//     $gt: beforeTime2
//   }
// }, function (err, doc) {
//   if(err) return console.log(err);
//   console.log(doc.result.n);
//   db.close();
// })









// col.findOne({
//   ip: '161.71.245.126'
// }, function (err, doc) {
//   if(err) return console.log(err);
//   console.log(doc);
// });


// MongoClient.connect(url, function(err, db) {
//   if(err) return console.log(err);
//   var col = db.collection('installs');
//   var time = new Date( (new Date).toISOString() );
//   console.log(time);
//   col.find({
//     ttl: { $lt: time }
//   }).toArray(function(err, items) {
//     if(err) return console.log(err);
//     console.log(items);
//     db.close();
//   });
//  
// });
//
// items.map(function (item) {
//   col.deleteOne({
//     ttl: item.ttl
//   }, function (err, result) {
//     if(err) return console.log(err);
//     console.log('success', result);
//   })
// });
















// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var url = 'mongodb://127.0.0.1:27017/install';
//
// mongoose.connect(url);
// var ArticleSchema = new Schema({
//   ttl: { type: Date }
// });
//
// var Project = mongoose.model('install', ArticleSchema);
//

//
// Project.find({
//   ttl: { $lt: beforeTime }
// }).exec(function (err, doc) {
//   if(err) return console.log(err);
//   console.log(doc.length);
// });
//
// console.log(123);

// Project.remove({
//   ttl: { $lt: beforeTime }
// }, function (r1, r2) {
//   if(r2.result.n){
//     mongoose.disconnect(function () {
//       console.log('close');
//     });
//     return console.log('remove success!');
//   }
//   console.log('remove error!');
//   mongoose.disconnect(function () {
//     console.log('close');
//   });
// });


// var cronJob = require('cron').CronJob;
//
// var job1 = new cronJob('* * */24 * * *', function(){
//   console.log('每24小时执行一次');
// });
//
// job1.start();


