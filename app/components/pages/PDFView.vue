<template>
  <Page actionBarHidden="true" >
    <StackLayout marginTop="32" >
     <NavBarBurgerMenu :ismenu="false"/>
    <ScrollView >
      <AbsoluteLayout >

        <WebView left="0" top="0" width="100%" height="100%" :src="data.url"  />
      </AbsoluteLayout>
    </ScrollView>
  </StackLayout>
  </Page>
</template>

<script>
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue"

import NavBar from '../components/NavBar.vue'
import CardPayment from '../components/boxes/CardPayment.vue'
import cache from "~/store/cache/cache.android";
import { apiPost,apiGet} from '~/resource/http';
export default {
  props:{
    data:{
      type: Object,
      default:{}
    },
    
  },
 
  components:{
    NavBarBurgerMenu,
    CardPayment,
    NavBar
  },
  watch:{
  },
  data() {
    return {
      loading: true,
       
     
     
    };
  },
 mounted( ){
    console.log('data',this.data);
  },
};
</script>

<style scoped>

  .trapecio {
    width: 250;
    height: 10;
    border-right: 60px solid transparent;
    border-left: 60px solid transparent;
}
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}
.shadow-none{
    box-shadow: none !important;
}
.description-label {
  margin-bottom: 15;
}

.bg{
  background: rgb(229,57,53);
  background: linear-gradient(90deg, rgba(229,57,53,1) 0%, rgba(229,57,53,1) 85%, rgba(255,255,255,0) 100%);
  background-repeat: no-repeat;
}
</style>
