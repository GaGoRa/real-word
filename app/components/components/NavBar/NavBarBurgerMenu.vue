<template>
  <StackLayout marginTop="16" marginLeft="16" marginBottom="16">
        <FlexboxLayout
          justifyContent="space-between"
          paddingRight="24"
          width="100%"
        >
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.back('/home')"
          />
         <BurgerMenu v-if="ismenu"/>
        </FlexboxLayout>
   
      </StackLayout>
</template>
<script>
import BurgerMenu from '../menuDrawer/burgerMenu.vue'
export default {
  components:{
BurgerMenu,
  },
  props: {
    ismenu:{
      type: Boolean, 
      default: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {},
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