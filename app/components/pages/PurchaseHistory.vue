<template>
  <Page class="seccion-register-bg-invert" actionBarHidden="true">
   <StackLayout marginTop="32">
   <NavBar :data="navbar"/>
        <ScrollView
          scrollBarIndicatorVisible="false" 
          >
          <StackLayout paddingBottom="48" >
          <Label v-if="!!errorsMessage.errorMessage" :text="errorsMessage.errorMessage" fontSize="16" fontWeight="400"
                textAlignment="center" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
          <CardHistoryPayment
            v-for="(item, key) in historyPayments"
            :key="`history-${key}`"
            :data="item"
            />
            

      </StackLayout>
       </ScrollView>
      </StackLayout>
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardHistoryPayment from '../components/boxes/CardHistoryPayment.vue'
import { apiGet } from '~/resource/http';
import {apiMock,dataTestHistory} from '../../resource/mockdataPrograms'
import {DEFAULT_CARD_HISTORY} from "../../resource/constans"
//import {dateFormat} from '../../resource/helper'     
export default {
  components:{
NavBar, 
    CardHistoryPayment ,
  },
  data() {
    return {
      navbar:{
        title:"Purchase History"
      },
      historyPayments :DEFAULT_CARD_HISTORY,
      errorsMessage: {
        errorMessage:'' ,
      }

    };
  },
  created(){
    // apiGet('/')
    // .then(this.onSuccess)
    // .catch(this.onError)

  apiMock(dataTestHistory)
  .then(this.onSuccess)
  .catch(this.onError)
  },
  methods:{
    onSuccess(res){
      this.historyPayments = this.getCardHistory(res)   
    },
    onError(err){
      console.log('have a errors', err);
      this.errorsMessage.errorMessage = "have a errors"
    },

    getCardHistory(res){
        return res.map( card =>(
      {
        subscription:card.name,
        mount:card.amount,
        date:card.date,
        card:`****${card.pm_last_four}`,
        color:"#FFFFFF",
        typeCard:String(card.pm_type).toUpperCase(),
        class:'',
        width:"336",
        height:"87",
        props:{
            url:card.invoice_pdf
              }

      }
        ))
        
    },
    
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