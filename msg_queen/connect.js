/**
 * Created by showzyl on 16/10/13.
 */

'use strict';

var fivebeans = require('fivebeans')
var host = 'localhost'
var port = 11300

var emitter = new fivebeans.client(host, port)

emitter.on('connect', function () {
  console.log('connect success...')
  process.exit(0)
})

emitter.on('error', function(err){
  console.log('error: ', err)
})

emitter.on('close', function(){
  console.log('close...')
})

emitter.connect()
