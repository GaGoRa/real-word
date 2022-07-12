<template>
  <Image
    src="~/assets/icons/burger_menu_icon.png"
    @tap="toggleSwitchMenu('right')"
    :width="getSizeOS"
    stretch="aspectFit"
    :marginRight="getIsIos ? '0' : '0'"
  />
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["toggleSwitchMenu"]),
  },
  computed:{
      getSizeOS(){
      return global.isIOS ? '35' : '24' 
    },
    getIsIos(){
      return global.isIOS
    }
  }
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>