<template>
  <Page class="seccion-register-bg-invert" actionBarHidden="true">
      <StackLayout 
      backgroundColor="trasparent"
      :marginTop="getMarginOS" >
       <NavBar   :data="navbar"/>

      
             <StackLayout v-if="loading" marginTop="16" marginBottom="16"  marginRight="16" >
         
                <ActivityIndicator :busy="loading"  />
                </StackLayout>
          

      <CardSubscription
      v-else
        v-for="(item, key) in subscriptions"
        :key="`subscription-${key}`"
        :data="item"
        marginBottom="16"
        marginTop="16"
        @onCancel="onCancel"
      />
    </StackLayout>
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'

import CardSubscription from "~/components/components/boxes/CardSubscription.vue";
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue";
import { apiGet } from '~/resource/http';
import {DEFAULT_CARD_SUBSCRIPTION} from "../../resource/constans"
import NavBarTittle from "~/components/components/NavBar.vue";
import help from '~/mixins/help'

   

export default {
   mixins:[help],
  components:{
    NavBar,
    CardSubscription,
    NavBarTittle,
    NavBarBurgerMenu
  },
  data() {
    return { 
      navbar:{
        title:"Subscription",
        optionsNavigate:{
          url:'/home'
        }
      },
    loading:false,
      navbarTittle:{
        title:"Subscription"
      },
      subscriptions: DEFAULT_CARD_SUBSCRIPTION ,
    };
  },
  async mounted(){
    const data = await apiGet('/get_subscription')
    this.subscriptions = [data.data]
    
  },
  methods:{
    async onCancel(){
      this.loading=true

      this.subscriptions = []
      const data = await apiGet('/get_subscription')
      this.subscriptions.push(data.data)
      this.$forceUpdate()

       this.loading=false
    }
  },
  computed:{
  //   getMarginOS(){
  //     return global.isIOS ? '0' : '32' 
  // },

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