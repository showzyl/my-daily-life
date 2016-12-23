/**
 * Created by showzyl on 16/9/30.
 *
 * Least Recently Used
 *
 * cache in memory
 */

'use strict';


const LRU = require("lru-cache")
const options = {
  max: 500,
  length: function (n, key) { return n * 2 + key.length },
  dispose: function (key, n) { n.close() },
  maxAge: 1000 * 60 * 60
}
//var cache = LRU(options);
var otherCache = LRU(2) // sets just the max size

otherCache.set("lizi", "1")
otherCache.set("test", "带我去的问答区")
otherCache.set("yangbin", "dwqdwqdwqdwq")


console.log(otherCache.get('test'))
console.log(otherCache.get('test'))
otherCache.set("test33333", "hehehe")
console.log(otherCache)


