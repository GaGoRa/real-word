import { Utils } from '@nativescript/core'

let cacheAndroid = {};

let sharedPreferences = Utils.ad.getApplicationContext().getSharedPreferences("cache.db", 0);

// Get the value of an item by key
cacheAndroid.get = function(key) {

  return sharedPreferences.getString(key, undefined);
};

// Set an item in the storage
cacheAndroid.set = function(key, value) {
  sharedPreferences.edit().putString(key, value).commit();
};

// Delete an item by key
cacheAndroid.delete = function(key) {
  sharedPreferences.edit().remove(key).commit();
};

// Clear all items
cacheAndroid.clear = function() {
  sharedPreferences.edit().clear().commit();
};

export default cacheAndroid