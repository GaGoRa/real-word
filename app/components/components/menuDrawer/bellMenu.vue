<template>
  <AbsoluteLayout 
    @tap="toggleSwitchMenu('left')"
   >
    <Image
    src="~/assets/icons/bell_icon.png"
    height="32"
  />
  </AbsoluteLayout >
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