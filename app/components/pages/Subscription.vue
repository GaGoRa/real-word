<template>
  <Page class="seccion-register-bg-invert" actionBarHidden="true">
      <StackLayout 
      backgroundColor="trasparent"
      marginTop="32"
      
      >
       <NavBarBurgerMenu />

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
        <StackLayout
          width="80%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="14"
        >
          <Label
            textAlignment="center"
            text="Subscription"
            fontSize="24"
            color="white"
            fontWeight="900"
            paddingTop="0"
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
import CardSubscription from "~/components/components/boxes/CardSubscription.vue";
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue";
import { apiGet } from '~/resource/http';

import NavBarTittle from "~/components/components/NavBar.vue";
export default {
  components: {
    CardSubscription,
    NavBarTittle,
    NavBarBurgerMenu
  },
  data() {
    return { 
      navbarTittle:{
        title:"Subscription"
      },
      subscriptions: [
        // {
        //   tittle: "Gold Subscription",
        //   mount: "$29.99",
        //   color: "#EAB813",
        //   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        // },
      ],
    };
  },
  async mounted(){
    const data = await apiGet('/get_subscription')

    this.subscriptions.push(data.data)
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