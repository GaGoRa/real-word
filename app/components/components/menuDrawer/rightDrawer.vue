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
          color="#FFFFFF"
          fontWeight="900"
        />
      </StackLayout>
    </FlexboxLayout>

    <Label
      text="Profile"
      fontSize="16"
      @tap="$navigator.navigate('/profile'), proccessChangeMenu()"
      marginBottom="16"
      fontWeight="900"
    />
    <!-- <Label
      text="Payments"
      fontSize="16"
      @tap="$navigator.navigate('/payments'), toggleSwitchMenu(false)"
      marginBottom="16"
      fontWeight="900"
    /> -->
    <Label
      text="Purchase History"
      fontSize="16"
      @tap="$navigator.navigate('/purchase-history'),proccessChangeMenu() "
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Subscription"
      fontSize="16"
      @tap="$navigator.navigate('/subscription'), proccessChangeMenu()"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="help"
      fontSize="16"
      @tap="$navigator.navigate('/help'), proccessChangeMenu()"
      marginBottom="16"
      fontWeight="900"
    />
    <Label
      text="Logout"
      fontSize="16"
      @tap="logoutAction"
      marginBottom="16"
      fontWeight="900"
    />
  </StackLayout>
</template>
<script>
import { mapMutations } from "vuex";
import cache from "~/store/cache";
import { ApplicationSettings } from '@nativescript/core'
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
    logoutAction(){
            alert({
              cancelable:true,
              message: "Are you sure you want to logout?",
              okButtonText: "Logout",
              theme:5
      }).then(() => {
        this.toggleSwitchMenu(false)
        ApplicationSettings.remove('userProfile')
      this.$navigator.navigate('/login')

      });
          },
    proccessChangeMenu(){
        this.toggleSwitchMenu(false)
        this.$forceUpdate()
    }

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