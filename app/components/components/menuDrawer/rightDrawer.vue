<template>
  <StackLayout marginTop="48" marginLeft="24">
    <FlexboxLayout
      marginTop="32"
      class="bg-label"
      marginBottom="32"
      justifyContent="flex-start"
    >
      <StackLayout marginRight="24">
        <Image
          src="~/assets/icons/Icon feather-arrow-left-circle.png"
          height="40"
          width="40"
          @tap="toggleSwitchMenu(false)"
        />
      </StackLayout>
      <StackLayout
        marginLeft=""
        width="80%"
        backgroundImage="~/assets/icons/Group_403.png"
        class="bg-label"
      >
        <Label
          marginLeft="64"
          text="Menu"
          fontSize="24"
          color="white"
          fontWeight="900"
        />
      </StackLayout>
    </FlexboxLayout>

    <Label
      text="Profile"
      fontSize="16"
      @tap="$navigator.navigate('/profile'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Payments"
      fontSize="16"
      @tap="$navigator.navigate('/payments'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Purchase History"
      fontSize="16"
      @tap="$navigator.navigate('/purchase-history'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Subscription"
      fontSize="16"
      @tap="$navigator.navigate('/subscription'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="help"
      fontSize="16"
      @tap="$navigator.navigate('/help'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Logout"
      fontSize="16"
      @tap="$navigator.navigate('/logout'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    />
  </StackLayout>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
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