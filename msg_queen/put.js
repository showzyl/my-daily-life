/**
 * Created by showzyl on 16/10/13.
 */

'use strict';

var fivebeans = require('fivebeans')
var host = 'localhost'
var port = 11300

var job1 = {
  type: 'reverse',
  payload: 'a man a plan a canal panama'
}

function errHandler(err, jobid) {
  if(err) return console.log(err);
  console.log('jobid is : ', jobid)
}

var emitter = new fivebeans.client(host, port)

emitter.on('connect', function () {
  emitter.put(0, 0, 60, JSON.stringify(['testtube', job1]), errHandler);

})


emitter.connect()

