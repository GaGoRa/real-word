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
            @tap=" onTapBack "
          />
          </StackLayout>
             <BurgerMenu v-if="ismenu"/>
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
    },
    routeBack:{
      type: String,
      default: null
    }
  },
  data() {
    return {
      
    };
  },
  created(){
  },

  methods: {
    onTapBack(){
      if(this.routeBack){
        this.$navigator.navigate(this.routeBack)
      }else{
        
        if(this.program_id){
          this.$navigator.navigate('/program',{props:{id:this.program_id}})
        } else{

          $navigator.back()
        }
      }
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