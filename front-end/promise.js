'use strict'


class MiniPromise {

  constructor(resolver) {
    const ctx = this
    // console.log(`resolver: `, resolver)

    // 0 PENDING
    // 1 FULFILLED
    // 2 REJECTED
    this.status = 0
    this.value = Object.create(null)
    this.resolveQueue = []
    this.rejectQueue = []

    // console.log(`this: `, this)

    function resolve(value = ctx.value) {
      // console.log(`value: `, value)
      // console.log(`ctx: `, ctx)
      setTimeout(function () {
        ctx.status = 1
        ctx.resolveQueue.forEach(function (callback) {
          ctx.value = callback(value)
        })
      }, 0)
    }

    resolver(resolve, this.reject)
  }


  reject(reason) {
    console.log(`reason: `, reason)
  }

  then(onFulfilled) {
    const ctx = this
    return new MiniPromise(function (resolve) {
      function handle(value) {
        console.log(`value: `, value)
        let ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
        console.log(`ret: `, ret)
        if( ret && typeof ret ['then'] == 'function'){
          ret.then(function(value){
            resolve(value);
          });
        } else {
          resolve(ret);
        }
      }

      if (ctx.status === 0) {
        ctx.resolveQueue.push(handle)
      } else if (ctx.status === 1) {
        handle(ctx.value)
      }
    })
  }
}

let p = new MiniPromise(function (resolove, reject) {
  resolove(1111)
}).then(function (res1) {
  console.log(`res1: `, res1)
  return new MiniPromise((resolove, reject) => {
    setTimeout(() => {
      resolove(2)
    }, 200)
  })
}).then(function (res2) {
  console.log(`res2: `, res2)
})

// let p = new MiniPromise(function (resolove, reject) {
//   // setTimeout(() => {
//   resolove(1111)
//   // reject(2222222)
//   // }, 1000)
// }).then(function (res1) {
//   console.log(`res1: `, res1)
// }).then(function (res2) {
//   console.log(`res2: `, res2)
// })
//
// console.log(`p: `, p)

// p.then((res) => {
//   console.log(`res: `, res)
//   return new MiniPromise((resolove, reject) => {
//     setTimeout(() => {
//       resolove(333333333333)
//     }, 1000)
//   })
// })
//   .then((res1) => {
//   console.log(`res1: `, res1)
//   return new MiniPromise((resolove, reject) => {
//     setTimeout(() => {
//       reject(2)
//     }, 1000)
//   })
// }).then((res2, err) => {
//   console.log(`res2: `, res2)
//   console.log(`err: `, err)
// })
//   .catch((err) => {
//   console.log(`err2: `, err)
// })
