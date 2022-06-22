<template>
  <Page class="seccion-register-bg-invert">
    <NavBar :data="navbar"/>
     <GridLayout columns="*" rows="auto,auto,*"> 
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

     </GridLayout>
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardPayment from '../components/boxes/CardPayment.vue'
export default {
  components:{
    CardPayment,
    NavBar
  },
  data() {
    return {
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