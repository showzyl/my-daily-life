/**
 * Created by showzyl on 16/9/22.
 */

'use strict';


const crypto = require('crypto');

const md5 = (str) => {
  var md5sum = crypto.createHash('md5');
  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
};

console.log(md5('25355e4797d7195de4d743e8d8220d4ddb219'));


