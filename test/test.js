/**
 * Created by showzyl on 16/10/12.
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
      $gt: beforeTime1,
      $lt: beforeTime2
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