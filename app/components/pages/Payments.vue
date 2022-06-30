<template>
  <Page xmlns:stripe="@triniwiz/nativescript-stripe" actionBarHidden="false" class="seccion-register-bg-invert">
    <ActionBar background="white" class="shadow-none" boxShadow="0">
      <GridLayout columns="*,auto" rows="*" width="100%" paddingRight="16" paddingBottom="8" paddingTop="16">
        <StackLayout @tap="$navigator.back()" col="0" row="0" >
          <image src="~/assets/icons/Icon feather-arrow-left-circle.png" verticalAlignment="left" width="32" height="32"  />
        </StackLayout>
        <StackLayout col="1" row="0" >
          <!-- <image  src="~/assets/icons/burger_menu_icon.png" verticalAlignment="right" width="36s" height="36s"  /> -->
        </StackLayout>
      </GridLayout  >
    </ActionBar>
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

          <label color="white" marginLeft="24" textWrap="true">
            <FormattedString>
              <span :text="package.name+' '" style="font-size: 24; font-weight: 900;"  />
              <span :text="price.name" style="font-size: 16; font-weight: 200; margin-left: 8" />
            </FormattedString>
          </label>
        </StackLayout>
      </AbsoluteLayout>
    </ScrollView>
  <!-- </StackLayout> -->
   <!-- <creditCardView></creditCardView> -->
    
     <!-- <GridLayout columns="*" rows="auto,auto,*"> 
       <ScrollView
          col="0"
          row="0"
          scrollBarIndicatorVisible="false"
          orientation="horizontal"
        >
      <StackLayout class="m-5" orientation="horizontal">
         <CardPayment
            v-for="(item, key) in creditCard"
            :key="`recomended-${key}`"
            :data="item"
            marginBottom="16"
          />

        </StackLayout>
        </ScrollView>
        <StackLayout col="0" row="1" >
          <FlexBoxLayout flexDirection="horizontal" justifyContent="center">
           <Label
            color="white"
            fontSize="14"
            fontWeight="600"
            paddingTop="4"
            horizontalAlignment="center"
            textDecoration="underline"
            @tap="$navigator.navigate('/recommended-programs')"
            text=" Edit"
          />
          
            <Image src="~/assets/icons/btn_icon_plus.png" height="40" />
          </FlexBoxLayout>

          </StackLayout>
       <StackLayout marginRight="24" marginTop="" marginLeft="24" col="0" row="2">
      <Label
        marginLeft="16"
        marginTop=""
        color="white"
        text="Card Information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Name on Card"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Card #"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Expiration Date"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        secure="true"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="CVV"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
       <Button
        borderRadius="16"
        marginTop="16"
        fontSize="16"
        text="Add New Card"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="white"
        marginBottom="32"
        @tap="$navigator.navigate('/home')"
      />
        </StackLayout>

     </GridLayout> -->
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardPayment from '../components/boxes/CardPayment.vue'
import { apiPost,apiGet} from '~/resource/http';
export default {
  props:{
    package:{
      type: Object,
      default:{
        id: 1, 
        name: 'Gold Subscription'
      }
    },
    price:{
      type: Object,
      default:{
        id: 1, 
        name: 'Month'
      }
    }
  },
 
  components:{
    CardPayment,
    NavBar
  },
  data() {
    return {
      url: null, 
      navbar:{
        title:"Payments"
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
  async mounted(){
    const response =  await apiPost({
      package_id: this.package.id,
      price_id: this.price.id,
    },"/subscription/create_subscription")
    console.log(response)
    this.url = response.data.url
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