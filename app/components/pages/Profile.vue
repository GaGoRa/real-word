<template>
  <Page class="page-home">
    <ActionBar
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
    </ActionBar>

     <ScrollView  scrollBarIndicatorVisible="false" > 
    <StackLayout marginRight="24" marginTop="32" marginLeft="24">
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
        @tap="$navigator.navigate('/address_complete')"
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
                  :hint="textValue.date_of_birth == bindMoment() ? 'Date of birth':fecha(textValue.date_of_birth)"
                  borderRadius="10" 
                  backgroundColor="#FFFFFF" 
                  height="36"  />

      
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

      <Button
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
  </Page>
</template>

<script>
import { mapMutations } from "vuex";
import { apiGet, apiPost } from '~/resource/http';
import cache from '~/store/cache/cache.android';
import { dateFormat_YYYY_DD_MM, getValueById } from "~/resource/helper";
import moment from 'moment'
export default {
  data() {
    return {
      textValue:{
        state:'State',
        firstName:'',
        middleName:'',
        lastName:'',
        date_of_birth: moment(),
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
      const responseState = await apiGet('/get_state')
      
      this.textValue.states = responseState
      console.log(' this.textValue.states', this.textValue.states);
    const responseGender = await apiGet('/gender')
    this.textValue.genders = responseGender[0]

     const responseCountry = await apiGet('/get_country')
      this.textValue.countrys = responseCountry

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
    
    this.getDataUser()
  },
      

  methods:{
     ...mapMutations(["toggleSwitchMenu"]),

   

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

      const dataCache = JSON.parse(cache.get("userProfile"))
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
      const dataUser = JSON.parse(cache.get('userProfile')).user
      console.log('dataUser',dataUser);
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

        console.log(dataUser,'getValueById(this.textValue.states.data,dataUser.state_id,)',getValueById(this.textValue.states.data,dataUser.state_id,'name'));
        this.$forceUpdate()
    },

    onSuccessUpdate(res){
      cache.set('userProfile',JSON.stringify(res.data))
      this.toggleSwitchMenu(false)
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