import { ApplicationSettings } from '@nativescript/core'

let cacheIOS = {};

// Get the value of an item by key
cacheIOS.get = function(key) {

  return  ApplicationSettings.getString(key) || undefined;
};

// Set an item in the storage
cacheIOS.set = function(key, value) {
    ApplicationSettings.setString(key,value);
};

// Delete an item by key
cacheIOS.delete = function(key) {
    ApplicationSettings.remove(key);
};

// Clear all items
cacheIOS.clear = function() {
    ApplicationSettings.clear();
}
export default cacheIOS