
let cache = {};

let tmCache = TMCache.sharedCache();

// Get the value of an item by key
cache.get = function(key) {
  return tmCache.objectForKey(key) || undefined;
};

// Set an item in the storage
cache.set = function(key, value) {d
  tmCache.setObjectForKey(value, key);
};

// Delete an item by key
cache.delete = function(key) {
  tmCache.removeObjectForKey(key);
};

// Clear all items
cache.clear = function() {
  tmCache.removeAllObjects();
};

export default cache