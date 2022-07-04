<template>
  <Page class="seccion-register-bg-invert" actionBarHidden="true">
      <StackLayout 
      backgroundColor="trasparent"
      marginTop="32"
      
      >
       <NavBar  :data="navbar"/>

    <!-- <StackLayout>
      <FlexboxLayout
        marginTop="32"
        class="bg-label"
        justifyContent="flex-start">

        <StackLayout  marginRight="32">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
        </StackLayout>
        
      </FlexboxLayout>
   
      </StackLayout> 

  <NavBarTittle :data="navbarTittle"/>
-->
    

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
  components: {
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
      subscriptions: [DEFAULT_CARD_SUBSCRIPTION],
    };
  },
  async mounted(){
    const data = await apiGet('/get_subscription')
    console.log("data",data);
    this.subscriptions = [data.data]
  },
  methods:{
    async onCancel(){
      this.subscriptions = []
      const data = await apiGet('/get_subscription')
      this.subscriptions.push(data.data)
    }
  }
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