'use strict'


class MiniPromise {

  constructor(resolver) {
    const ctx = this

    // 0 PENDING
    // 1 FULFILLED
    // 2 REJECTED
    this.status = 0
    this.value = Object.create(null)
    this.reason = Object.create(null)
    this.resolveQueue = []
    this.rejectQueue = []

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

    function reject(value) {
      setTimeout(function () {
        ctx.status = 2
        ctx.rejectQueue.forEach(function (callback) {
          ctx.reason = callback(value)
        })
      }, 0)
    }

    resolver(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    const ctx = this
    return new MiniPromise(function (resolve, reject) {
      function handle(value) {
        console.log(`value: `, value)
        let ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
        console.log(`ret: `, ret)
        if (ret && typeof ret['then'] === 'function') {
          ret.then(function (value) {
            resolve(value)
          }, function (reason) {
            reject(reason)
          })
        } else {
          resolve(ret)
        }
      }

      function errBack(reason) {
        reason = typeof onRejected === 'function' && onRejected(reason) || reason
        reject(reason)
      }

      if (ctx.status === 0) {
        ctx.resolveQueue.push(handle)
        ctx.rejectQueue.push(errBack)
      } else if (ctx.status === 1) {
        handle(ctx.value)
      } else if (ctx.status === 2) {
        errBack(ctx.reason)
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static all(promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to all.')
    }
    return new MiniPromise(function (resolve, reject) {
      let result = [],
        len = promises.length,
        count = len

      function resolver(index) {
        return function (value) {
          resolveAll(index, value)
        }
      }

      function rejecter(reason) {
        reject(reason)
      }

      function resolveAll(index, value) {
        result[index] = value
        if (--count === 0) {
          resolve(result)
        }
      }

      for (let i = 0; i < len; i++) {
        promises[i].then(resolver(i), rejecter)
      }
    })
  }

  static race(promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to race.')
    }

    return new MiniPromise(function (resolve, reject) {
      let len = promises.length

      function resolver(value) {
        resolve(value)
      }

      function rejecter(reason) {
        reject(reason)
      }

      for (let i = 0; i < len; i++) {
        promises[i].then(resolver, rejecter)
      }
    })
  }

}


// function r1() {
//   return new MiniPromise(function (resolove, reject) {
//     setTimeout(function () {
//       resolove(1)
//     }, 200)
//   })
// }
//
// function r2() {
//   return new MiniPromise(function (resolove, reject) {
//     setTimeout(function () {
//       resolove(3333333)
//     }, 1000)
//   })
// }
//
// MiniPromise.all([r1(), r2()]).then(function (resAll) {
//   console.log(`resAll: `, resAll)
// })


let p = new MiniPromise(function (resolove, reject) {
  reject(1111)
}).then(function (res1) {
  console.log(`res1: `, res1)
  return new MiniPromise((resolove, reject) => {
    setTimeout(() => {
      resolove(2)
    }, 200)
  })
}, function (err) {
  console.log(`err1: `, err)
}).then(function (res2) {
  console.log(`res2: `, res2)
}).catch(function (err) {
  console.log(`err2: `, err)
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
