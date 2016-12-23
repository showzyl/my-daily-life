'use strict'

// node --harmony-async-await l.js

function t(){
  return new Promise( (resolve, reject) => {
      // return reject('滚你妹');
      setTimeout(() => {
        resolve('hello');
      }, 1000)
  })
}

t().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// async function t2(){
//   console.log( (new Date).getTime() );
//   var hello = await t();
//   console.log(hello);
//   console.log( (new Date).getTime() );
// }
//
//
// t2()
