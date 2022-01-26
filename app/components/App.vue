<template>
<MultiDrawer>
  <StackLayout slot="left">
    <Label text="Im in the left drawer" />  
  </StackLayout>
  <StackLayout slot="right">
    <Label text="Im in the right drawer" />  
  </StackLayout>
  <StackLayout slot="top">
    <Label text="Im in the top drawer" />  
  </StackLayout>
  <StackLayout slot="bottom">
    <Label text="Im in the bottom drawer" />  
  </StackLayout>


 <Navigator :defaultRoute="true ? '/home' : '/login'"/>

</MultiDrawer>

</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

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
