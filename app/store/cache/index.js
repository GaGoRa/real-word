
import {cache as android }   from "./cache.android";
import {cache as ios }   from "./cache.ios";
import {} from 'nativescript/core/'



let cache = {}
if (global.isIOS) {

     cache = ios

  }else{
     cache = android
  }

module.exports = {
    cache
}