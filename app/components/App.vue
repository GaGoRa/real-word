<template>
<MultiDrawer>
  <StackLayout slot="left">
    <Label text="Im in the left drawer" />  
  </StackLayout>
  <StackLayout slot="right">
   <RightDrawer/>
     
  </StackLayout>
  
 


 <Navigator :defaultRoute="false ? '/home' : '/login'"/>

</MultiDrawer>

</template>

<script>
 import RightDrawer from '~/components/components/menuDrawer/rightDrawer'

  export default {
    components:{
        RightDrawer
      },
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
