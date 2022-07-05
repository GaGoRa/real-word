 var cache;

if (global.isIOS) {  
     cache = require('./cache.ios')

}else{
     cache = require('./cache.android')
  }

module.exports = cache