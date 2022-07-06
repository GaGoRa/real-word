<template>
  <Page class="page-home" actionBarHidden="true">
    <StackLayout :marginTop="getMarginOS">
   <NavBar :data="navbar" :ismenu="false" />
    <!-- <ActionBar
      marginTop="16"
      title=""
      backgroundColor="transparent"
      flat="true"
    >
      <FlexboxLayout
        marginTop="32"
        class="bg-label"
        justifyContent="flex-start"
      >
        <StackLayout marginRight="64">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
        </StackLayout>
        <StackLayout
          width="100%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="12"
        >
          <Label
            textAlignment="center"
            text="Profile"
            fontSize="24"
            color="#FFFFFF"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar> -->

     <ScrollView  scrollBarIndicatorVisible="false" > 

      <StackLayout v-if="loadingState" marginTop="32"  marginRight="16" >
      <GridLayout marginTop="24" columns="*" rows="*,*,*">
         
         <ActivityIndicator 
          marginTop="16"
          :busy="loadingState" 
            />
      </GridLayout>
    </StackLayout>


    <StackLayout v-else marginRight="24" marginTop="32" marginLeft="24">
        <Label  v-if="!!errorsMessage.errorMessage" :text="errorsMessage.errorMessage" fontSize="16" fontWeight="400"
                  textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" /> 

      <Label
        marginLeft="16"
        marginTop="8"
        color="#FFFFFF"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
       

      />
      <TextField
        v-model="textValue.firstName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="First Name"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        v-model="textValue.middleName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Middle Name"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        v-model="textValue.lastName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Last Name"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      
        <TextField 
          editable="false" 
          @tap="onTapDataPicker" 
          color="#949494" 
          marginBottom="6"
          marginLeft="14"
          marginRight="16" 
          :hint="textValue.date_of_birth == '' ? 'Date of birth' : fecha(textValue.date_of_birth)"
          borderRadius="10" 
          backgroundColor="#FFFFFF" 
          height="36"  
        />

      
        <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        :hint="textValue.gender"
        @tap="onTapGender"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        editable="false"
        height="36"
      />


      <Label
        marginLeft="16"
        marginTop="8"
        color="#FFFFFF"
        text="Contact Information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        v-model="textValue.phone"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Phone #"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        v-model="textValue.email"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Email"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
          editable="false"
      />
      <TextField
        v-model="textValue.address"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Address"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        :hint="textValue.state"
        @tap="onTapState"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        editable="false"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        :hint="textValue.country"
        @tap="onTapCountry"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        editable="false"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        v-model="textValue.city"
        hint="City"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        v-model="textValue.postal_code"
        hint="Postal Code"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
        keyboardType="number"
      />

      <Label
        marginLeft="16"
        marginTop="8"
        color="#FFFFFF"
        text="Fitness information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />

        <StackLayout v-if="loadingStateButtom"  marginBottom="16" marginTop="16"  marginRight="16" >
                <ActivityIndicator 
                  :busy="loadingStateButtom" 
                    />
                </StackLayout>

      <Button v-else
        borderRadius="16"
        marginTop="32"
        fontSize="16"
        text="Save"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="#FFFFFF"
        marginBottom="32"
        @tap="proccessUpdateProfile"
      />
    </StackLayout>
     </ScrollView>
     </StackLayout>
  </Page>

</template>

<script>
import NavBar from '../components/NavBar.vue'

import { mapMutations } from "vuex";
import { apiGet, apiPost } from '~/resource/http';
import { ApplicationSettings } from '@nativescript/core';
// import cache from '~/store/cache/index';
import { dateFormat_YYYY_DD_MM, getValueById } from "~/resource/helper";
import moment from 'moment'
export default {
  components:{
    NavBar,
  },
  data() {
    return {
      navbar:{
        title:"Profile"
      },
      loadingState:true,
      loadingStateButtom:false,
      textValue:{
        state:'State',
        firstName:'',
        middleName:'',
        lastName:'',
        date_of_birth: '',
        state_id:'',
        gender_id:'',
        gender:'Gender',
        genders:[],
        phone:'',
        email:'',
        address:'',
        postal_code:'',
        city:'',
        country:'Country',
        countrys:[],
        country_id:'',
        states:[],
      },
      errorsMessage:{
        errorMessage:""
      }
    };
  },
  async mounted(){
    try {
      console.log('====================================',JSON.parse(ApplicationSettings.getString('userProfile',"{}")))
      const responseState = await apiGet('/get_state')
      this.textValue.states = responseState
      const responseGender = await apiGet('/gender')
      this.textValue.genders = responseGender[0]
      const responseCountry = await apiGet('/get_country')
      this.textValue.countrys = responseCountry
      this.getUser()

      this.loadingState = false

    } catch (error) {
      console.log('ERROr', error);
      alert({
        title: "Error Message",
        message: "Have a error , please try again",
        okButtonText: "OK"
      }).then( ()=> {
        console.log("Error",new Error(err));
      });
    }
    // this.getDataUser()
  },
  methods:{
    ...mapMutations(["toggleSwitchMenu"]),
    async getUser(){
      const response = await apiGet('/get_user')

      this.textValue.firstName     = response.data.user.name
      this.textValue.middleName    = response.data.user.middle_name
      this.textValue.lastName      = response.data.user.last_name
      if(response.data.user.date_of_birth){
        this.textValue.date_of_birth = response.data.user.date_of_birth
      }
      this.textValue.state_id      = response.data.user.state_id
      this.textValue.state         = this.textValue.states.data.find((e)=> e.id == this.textValue.state_id ).name
      this.textValue.gender_id     = response.data.user.gender_id
      this.textValue.gender        = this.textValue.genders.find((e)=> e.id == this.textValue.gender_id ).description
      this.textValue.phone         = response.data.user.telephone
      this.textValue.email         = response.data.user.email
      this.textValue.address       = response.data.user.address
      this.textValue.postal_code   = response.data.user.postal_code
      this.textValue.city          = response.data.user.city
      this.textValue.country_id    = response.data.user.country_id
      this.textValue.country         = this.textValue.countrys.data.find((e)=>e.id == this.textValue.country_id).description
    },
    onError(err){
      this.errorsMessage.errorMessage = "A ocurrido un error"
    },
    fecha(value){
      return moment(value).format('MM/DD/YYYY')
    },
    bindMoment(){
      return moment()
    },
    proccessUpdateProfile(){
      this.loadingStateButtom = true
      const dataCache = JSON.parse(ApplicationSettings.getString('userProfile',"{}"))
      const body ={
            "user_id":dataCache.user.id,
            "name":this.textValue.firstName,
            "email":this.textValue.email,
            "middle_name":this.textValue.middleName,
            "last_name":this.textValue.lastName,
            "address":this.textValue.address,
            "gender_id":this.textValue.gender_id,
            "city":this.textValue.city,
            "country_id":this.textValue.country_id,
            "state_id":this.textValue.state_id,
            "postal_code":this.textValue.postal_code,
            "date_of_birth":dateFormat_YYYY_DD_MM(this.textValue.date_of_birth),
            "telephone":this.textValue.phone,
        }
        apiPost(body,"/update_user")
        .then(this.onSuccessUpdate)
        .catch(this.onError)
    },
    async onTapDataPicker(){
      const data = await this.$navigator.modal('/date',{id:"mimodal",props:{value: this.textValue.date_of_birth}})
      this.textValue.date_of_birth = data
      this.$forceUpdate()
    },
    getDataUser(){
      const dataUser = JSON.parse(ApplicationSettings.getString('userProfile',"{}")).user
        this.textValue.firstName = dataUser.name
        this.textValue.middleName = dataUser.middle_name
        this.textValue.lastName = dataUser.last_name
        this.textValue.date_of_birth = dataUser.date_of_birth
        this.textValue.gender = getValueById(this.textValue.genders,dataUser.gender_id,'description')
        this.textValue.phone = dataUser.telephone
        this.textValue.email = dataUser.email
        this.textValue.address = dataUser.address
        this.textValue.city = dataUser.city
        this.textValue.country = getValueById(this.textValue.countrys.data,dataUser.country_id,'description')
        this.textValue.postal_code = dataUser.postal_code
        this.textValue.state = getValueById(this.textValue.states.data,dataUser.state_id,'name')

        this.$forceUpdate()
    },
    onSuccessUpdate(res){
      ApplicationSettings.setString('userProfile',JSON.stringify(res.data))
      this.toggleSwitchMenu(false)
      this.loadingStateButtom = false
        this.$navigator.navigate('/home')
    },
    async onTapState(){

      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.states.data, 
                          key: 'name',
                          value: this.textValue.state_id
                        } })

      this.textValue.state_id = data.id
      this.textValue.state = data.name
    },
    async onTapGender(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.genders, 
                          key: 'description',
                          value: this.textValue.gender_id
                        } })
      this.textValue.gender_id = data.id
      this.textValue.gender = data.description
    },
    async onTapCountry(){
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.countrys.data, /////
                          key: 'description',
                          value: this.textValue.country_id
                        } })
      this.textValue.country_id = data.id
      this.textValue.country = data.description
    }
  },
  computed:{
    getMarginOS(){
      return global.isIOS ? '0' : '32' 
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