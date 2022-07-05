<template>
  <Page xmlns:stripe="@triniwiz/nativescript-stripe" actionBarHidden="true" backgroundColor="white">
    <!-- <ActionBar background="#FFFFFF" class="shadow-none" boxShadow="0">
      <GridLayout columns="*,auto" rows="*" width="100%" paddingRight="16" paddingBottom="8" paddingTop="16">
        <StackLayout @tap="$navigator.back()" col="0" row="0" >
          <image src="~/assets/icons/Icon feather-arrow-left-circle.png" verticalAlignment="left" width="40" height="40"  />
        </StackLayout>
        
      </GridLayout  >
    </ActionBar> -->
    <StackLayout marginTop="32" >
     <NavBarBurgerMenu :isBell="false" :ismenu="false" :program_id="navbar.program_id"/>
    <ScrollView >
      <AbsoluteLayout >
        <WebView left="0" top="0" width="100%" :src="url" v-if="url" />


        <StackLayout
          top="0"
          left="0"
          paddingTop="10"
          paddingBottom="10"
          width="100%"
          backgroundImage="~/assets/icons/background_label.png"
          backgroundPosition="right"
          class="bg"
        >

          <label color="#FFFFFF" marginLeft="24" textWrap="true">
            <FormattedString>
              <span :text="package.name+' '" style="font-size: 24; font-weight: 900;"  />
              <span :text="price.recurrence.description" style="font-size: 16; font-weight: 200; margin-left: 8" />
            </FormattedString>
          </label>
        </StackLayout>
        <GridLayout  
          top="0"
          left="0"
          width="100%"
          height="900"
          backgroundColor="rgba(0,0,0,.9)"
          v-if="loading"
        >
          <StackLayout marginTop="-120" horizontalAlignment="center" verticalAlignment="center">
            <label  horizontalAlignment="center" verticalAlignment="center" color="#FFFFFF" text="Please wait"/>
            <ActivityIndicator color="red" marginTop="16" horizontalAlignment="center" verticalAlignment="center" busy="true"  />
         </StackLayout>
        </GridLayout >
      </AbsoluteLayout>
    </ScrollView>
  </StackLayout>
  </Page>
</template>

<script>
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue"

import NavBar from '../components/NavBar.vue'
import CardPayment from '../components/boxes/CardPayment.vue'
import cache from "~/store/cache";
import { apiPost,apiGet} from '~/resource/http';
export default {
  props:{
    package:{
      type: Object,
      default:{
        id: null, 
        name: ''
      }
    },
    price:{
      type: Object,
      default:{
        id: null, 
        recurrence:{description:''}
      }
    },
    program_id:{
      type:Number,
      default:null
    }
  },
 
  components:{
    NavBarBurgerMenu,
    CardPayment,
    NavBar
  },
  watch:{
    async price(to){
      this.url = ''
      this.loading = true
      const response =  await apiPost({
        package_id: this.package.id,
        price_id: this.price.id,
      },"/subscription/create_subscription")

      this.url = response.data.url
      setTimeout(()=>{
        this.loading = false
      },500)
      

    }
  },
  data() {
    return {
      loading: true,
      url: null,

      navbar:{
        title:"Payments",
        program_id:this.program_id
        
      },
      creditCard:[{
        number:'121123123213123',
        cvv:'123',
        person:'real word',
        date:"12/22"
      },

      {
        number:'121123123213123',
        cvv:'123',
        person:'real word',
        date:"12/22"
      },
      {
        number:'121123123213123',
        cvv:'123',
        person:'real word',
        date:"12/22"
      },
      
      ]
    };
  },
  created(){
    this.navbar.program_id = this.program_id
  },
  
   async mounted(){
    

    this.url = ''
    this.loading = true
    const response =  await apiPost({
      package_id: this.package.id,
      price_id: this.price.id,
    },"/subscription/create_subscription")
    
    this.url = response.data.url
    setTimeout(()=>{
        this.loading = false
      },500)
  },
};
</script>

<style scoped>

  .trapecio {
    width: 250;
    height: 10;
    border-right: 60px solid transparent;
    border-left: 60px solid transparent;
    border-bottom: 100px solid #4s28bca;
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
