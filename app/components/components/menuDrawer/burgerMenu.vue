<template>
  <Image
    src="~/assets/icons/burger_menu_icon.png"
    @tap="toggleSwitchMenu('right')"
    :height="getSizeOS()"
    :marginRight="global.isIOS ? '24' : '0'"
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
      return global.isIOS ? '16' : '24' 
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