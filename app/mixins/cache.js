import { Utils } from '@nativescript/core'
import { ApplicationSettings } from '@nativescript/core'
export default {
  computed:{
    cache(){
      if(global.isIOS){
        return {
          get: function(key) {
            return  ApplicationSettings.getString(key) || undefined;
          },
          set:function(key, value) {
              ApplicationSettings.setString(key,value);
          },
          delete: function(key) {
              ApplicationSettings.remove(key);
          },
          clear:function() {
              ApplicationSettings.clear();
          }
        }
      }else{

        var sharedPreferences = Utils.ad.getApplicationContext().getSharedPreferences("cache.db", 0);
        return {
          get: function(key) {
            return sharedPreferences.getString(key, undefined);
          },
          set:function(key, value) {
              sharedPreferences.edit().putString(key, value).commit();
          },
          delete: function(key) {
               sharedPreferences.edit().remove(key).commit();
          },
          clear:function() {
              sharedPreferences.edit().clear().commit();
          }
        }
      }
    }
  },
  methods: {
    
  }
};