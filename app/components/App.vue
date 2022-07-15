<template>
    <Navigator :defaultRoute=" islog ? '/home' : '/login'" />
</template>

<script>
import { ApplicationSettings } from '@nativescript/core';

export default {
  components: {
   
  },
  data() {
    return {
      islog: false
    };
  },
  created(){
    let cacheData = ApplicationSettings.getString('userProfile',"{}")
    console.log("?????????????????????????????????",JSON.parse(cacheData).hasOwnProperty('token'));
    this.islog = JSON.parse(cacheData).hasOwnProperty('token') ? true :false
  },

  computed: {
    ...mapState(["drawerState"]),
    onDrawer: {
      get: function () {
        return this.drawerState;
      },
      set: function (v) {
        this.toggleSwitchMenu(v);
      },
    },
  },
  

  methods: {
  ...mapMutations(["toggleSwitchMenu"]),
  
   
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>