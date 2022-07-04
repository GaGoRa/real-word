
// import {cache as cacheAndroid} from"./cache.android";
// import {cache as cacheIOS} from"./cache.ios";
let cache;

if (global.isIOS) {  
     cache = require('./cache.ios')
}else{
     cache = require('./cache.android')
  }

module.exports = cache