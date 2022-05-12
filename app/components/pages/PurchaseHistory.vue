<template>
  <Page class="seccion-register-bg-invert">
    <NavBar :data="navbar"/>
        <ScrollView
          scrollBarIndicatorVisible="false" 
          >
          <StackLayout paddingBottom="48" >
          <CardHistoryPayment
            v-for="(item, key) in historyPayments"
            :key="`history-${key}`"
            :data="item"
            />
            
     
      </StackLayout>
       </ScrollView>
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardHistoryPayment from '../components/boxes/CardHistoryPayment .vue'
export default {
  components:{
NavBar, 
    CardHistoryPayment ,
  },
  data() {
    return {
      navbar:{
        title:"Purchase History    "
      },
      historyPayments : [
        
        {
        subscription:"Gold Subscription",
        mount:"123.32",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123.32",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123.32",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123.32",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },{
        subscription:"Gold Subscription",
        mount:"123",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      {
        subscription:"Gold Subscription",
        mount:"123",
        date:"Nov 23, 2021",
        card:"***23123",
        typeCard:"visa"
      },
      
      ]


    };
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