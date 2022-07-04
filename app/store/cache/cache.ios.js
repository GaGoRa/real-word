import { ApplicationSettings } from '@nativescript/core'

let cache = {};

// Get the value of an item by key
cache.get = function(key) {

  return  ApplicationSettings.getString(key) || undefined;
};

// Set an item in the storage
cache.set = function(key, value) {
    ApplicationSettings.setString(key,value);
};

// Delete an item by key
cache.delete = function(key) {
    ApplicationSettings.remove(key);
};

// Clear all items
cache.clear = function() {
    ApplicationSettings.clear();
}
export default cache