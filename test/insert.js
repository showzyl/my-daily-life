/**
 * Created by showzyl on 16/10/9.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Connection URL
var url = 'mongodb://localhost:27017/install';

mongoose.connect(url);


var ArticleSchema = new Schema({
  channel_id: { type : String, default : '', trim : true },
  subid: { type: String, default : '', trim : true },
  ip: { type: String, default : '', trim : true },
  //ttl: { type: Number }
  ttl: { type: Date }
});

var Project = mongoose.model('install', ArticleSchema);

var aTpm = [];
for (var i = 0; i < 60000; i++) {
  var o = {};
  o.channel_id = Math.random()+'';
  o.subid = Math.random()+'_mb_jd_'+Math.random();
  o.ip = "161.71.245.126";
  var oDate = (new Date).getTime() - 1000 * 60 * 60 * 24 * parseInt( Math.random() * 10 ) * 20;
  o.ttl = (new Date(oDate)).toISOString();
  //o.ttl = (new Date).getTime();
  aTpm.push(o);
}


Project.insertMany(aTpm, function(err, docs) {
  if (err) return console.log('err', err);
  console.log(docs);
  mongoose.close();
});







