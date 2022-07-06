<template>
  <StackLayout marginTop="16" marginLeft="16" marginBottom="16">
        <FlexboxLayout 
          justifyContent="space-between"
          paddingRight="24"
          width="100%"
        >
        <StackLayout v-if="isBell">
        <BellMenu />
        </StackLayout>

        <StackLayout  v-else>
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="35"
            width="35"
            @tap="  program_id ?
             $navigator.navigate('/program',{props:{id:program_id}}) :
             $navigator.back()
             "
          />
          </StackLayout>
           <StackLayout>

             <BurgerMenu v-if="ismenu"/>
           </StackLayout>
        </FlexboxLayout>
   
      </StackLayout>
</template>
<script>
import BurgerMenu from '../menuDrawer/burgerMenu.vue'
import BellMenu from '../menuDrawer/bellMenu.vue'

export default {
  components:{
    BellMenu,
BurgerMenu,
  },
  props: {
    ismenu:{
      type: Boolean, 
      default: true
    },
    isBell:{
      type: Boolean, 
      default: true
    },
    program_id:{
      type: Number, 
      default:null
    }
  },
  data() {
    return {
      
    };
  },
created(){
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