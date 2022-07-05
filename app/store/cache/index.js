
// import {cache as cacheAndroid} from"./cache.android";
// import {cache as cacheIOS} from"./cache.ios";
let cache;

if (global.isIOS) {  

     cache = require('./cache.ios')
     module.exports = cache
}else{
     cache = require('./cache.android')
  }

module.exports = cache