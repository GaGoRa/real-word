<template>
  <MultiDrawer v-model="onDrawer">
    <StackLayout slot="right">
      <RightDrawer />
    </StackLayout>
    <StackLayout slot="left">
      <LeftDrawer />
    </StackLayout>
    <Navigator :defaultRoute=" islog ? '/home' : '/login'" />
  </MultiDrawer>
</template>

<script>
import { ApplicationSettings } from '@nativescript/core';

import RightDrawer from "~/components/components/menuDrawer/rightDrawer";
import LeftDrawer from "~/components/components/menuDrawer/leftDrawer";
import SelectDrawer from "~/components/components/menuDrawer/selectDrawer";
import { mapState, mapMutations } from "vuex";
//import cache from "~/store/cache/index.js"


export default {
  components: {
    RightDrawer,
    SelectDrawer,
    LeftDrawer
  },
  data() {
    return {
      islog: false
    };
  },
  created(){
    let cacheData = ApplicationSettings.getString('userProfile',"{}")
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