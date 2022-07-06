 var cache;

if (global.isIOS) {  
     import('./cache.ios').then(moduleIos => cache = moduleIos )

}else{
     import('./cache.android').then(moduleIos => cache = moduleIos )
  }

export default cache