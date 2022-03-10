<template>
  <Image
    src="~/assets/icons/burger_menu_icon.png"
    @tap="toggleSwitchMenu('right')"
    height="24"
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