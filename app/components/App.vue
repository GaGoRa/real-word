<template>
  <MultiDrawer v-model="onDrawer">
    <StackLayout slot="right">
      <RightDrawer />
    </StackLayout>
     
    <Navigator :defaultRoute="false ? '/home' : '/login'" />
  </MultiDrawer>
</template>

<script>
import RightDrawer from "~/components/components/menuDrawer/rightDrawer";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    RightDrawer,
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
  methods: { ...mapMutations(["toggleSwitchMenu"]) },
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
