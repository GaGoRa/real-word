<template>
  <Page class="seccion-register-bg-invert" actionBarHidden="true">
      <StackLayout 
      backgroundColor="trasparent"
      :marginTop="getMarginOS" >
       <NavBar  :data="navbar"/>

      <CardSubscription
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
export default {
  components:{
    NavBar,
    CardSubscription,
    NavBarTittle,
    NavBarBurgerMenu
  },
  data() {
    return { 
      navbar:{
        title:"Subscription"
      },

      navbarTittle:{
        title:"Subscription"
      },
      subscriptions: '',
    };
  },
  async mounted(){
    this.subscriptions = [DEFAULT_CARD_SUBSCRIPTION]
    const data = await apiGet('/get_subscription')
    this.subscriptions = [data.data]
    
  },
  methods:{
    async onCancel(){
      this.subscriptions = []
      const data = await apiGet('/get_subscription')
      this.subscriptions.push(data.data)
    }
  },
  computed:{
    getMarginOS(){
      return global.isIOS ? '0' : '32' 
  },

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