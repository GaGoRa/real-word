<template>
  <Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:mtf="nativescript-masked-text-field" class="page-home" actionBarHidden="true" >
    <StackLayout :marginTop="getMarginOS">
      <NavBar :data="navbar" :ismenu="false" />

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
          
          <Label  v-if="!!errorsMessage.errorMessage" 
            :text="errorsMessage.errorMessage" 
            fontSize="16" 
            fontWeight="400"
            textAlignment="left" 
            color="red" 
            marginLeft="32" 
            marginTop="0" 
            marginBottom="0" 
          /> 

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
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="First Name"
            borderRadius="10"
            backgroundColor="#FFFFFF"
             class="form_input" 
          />

          <TextField
            v-model="textValue.lastName"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="Last Name"
            borderRadius="10"
            backgroundColor="#FFFFFF"
             class="form_input" 
          />

           <TextField
            v-model="getTextCountry"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            :hint="textValue.country"
            @tap="onTapCountry"
            borderRadius="10"
            editable="false" 
             class="form_input" 
          />

            <TextField
             v-model="getTextGender"
              marginBottom="6"
              marginLeft="14"
              marginRight="16"
              :hint="textValue.gender"
              @tap="onTapGender"
              borderRadius="10"
              backgroundColor="#FFFFFF"
              editable="false"
              class="form_input" 
            />


           <StackLayout v-if="!ios">
            <TextField 
              :text="fecha(textValue.date_of_birth)"
              editable="false" 
              @tap="onTapDataPicker" 
              marginBottom="6"
              marginLeft="14"
              marginRight="16" 
              :hint="fecha(textValue.date_of_birth)"
              borderRadius="10" 
              backgroundColor="#FFFFFF" 
              class="form_input" 
             
            />
          </StackLayout>
         
          <StackLayout v-else marginRight="16" marginLeft="16"> 
            <GridLayout columns="*,*,*" >
              <TextField 
                col="0"
                marginBottom="6"
                marginLeft="0"
                marginRight="4" 
                v-model="date_of_birth.dia"
                textAlign="center"
                maxLength="2" 
                hint="00"
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
              <TextField 
                col="1"
                marginBottom="6"
                marginLeft="4"
                marginRight="4" 
                v-model="date_of_birth.mes"
                textAlign="center"
                hint="00"
                maxLength="2" 
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
              <TextField 
                col="2"
                marginBottom="6"
                marginLeft="4"
                marginRight="0" 
                v-model="date_of_birth.ano"
                textAlign="center"
                hint="0000"
                maxLength="4" 
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
            </GridLayout >
            
            <!-- <DatePicker class="date-picker" width="100%" v-model="textValue.date_of_birth " /> -->
          </StackLayout>
         

          <!-- <TextField
            v-model="textValue.lastName"
            color="#949494"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="Last Name"
            borderRadius="10"
            backgroundColor="#FFFFFF"
             class="form_input" 
          /> -->


          <!-- <StackLayout v-if="!ios">
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
              class="form_input" 
             
            />
          </StackLayout>
         
          <StackLayout v-else backgraund="blue" marginRight="16" marginLeft="16">
            <DatePicker class="date-picker" width="100%" v-model="textValue.date_of_birth " />
          </StackLayout>
          -->

        

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
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="Phone #"
            borderRadius="10"
            backgroundColor="#FFFFFF"
             class="form_input" 
             keyboardType="phone"
          />
          <TextField
            v-model="textValue.email"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="Email"
            borderRadius="10"
            backgroundColor="#FFFFFF"
            class="form_input" 
            editable="false"
          />
          <!-- ADRRESSS -->

            <TextField
            v-model="textValue.address"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            hint="Address"
            borderRadius="10"
             class="form_input" 
          />
          <TextField
            v-model="getTextState"
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            :hint="textValue.state"
            @tap="onTapState"
            borderRadius="10"
            editable="false"
             class="form_input" 
          />   
          <TextField
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            v-model="textValue.city"
            hint="City"
            borderRadius="10"
            class="form_input" 
          />
          <TextField
            marginBottom="6"
            marginLeft="14"
            marginRight="16"
            v-model="textValue.postal_code"
            hint="Zip Code"
            borderRadius="10"
             class="form_input" 
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

           <TextField 
              v-model="getTextExperience"
              marginBottom="6"
              marginLeft="14"
              marginRight="16"
              :hint="textValue.experience"
              @tap="onTapExperience"
              borderRadius="10"
              backgroundColor="#FFFFFF"
              editable="false"
              class="form_input" 
            />

             <Label
            marginLeft="16"
            marginTop="8"
            color="#FFFFFF"
            text="What's your main reason for joining"
            fontWeight="800"
            fontSize="16"
            textAlignment="left"
          />


            <TextField
            v-model="getTextReason"
              marginBottom="6"
              marginLeft="14"
              marginRight="16"
              :hint="textValue.reason"
              @tap="onTapReason"
              borderRadius="10"
              backgroundColor="#FFFFFF"
              editable="false"
              class="form_input" 
            />

            <TextField
            v-model="getTextWhereDo"
              
              marginBottom="6"
              marginLeft="14"
              marginRight="16"
              :hint="textValue.whereDo"
              @tap="onTapWhereDo"
              borderRadius="10"
              backgroundColor="#FFFFFF"
              editable="false"
              class="form_input" 
            />
               <Label
            marginLeft="16"
            marginTop="8"
            color="#FFFFFF"
            text="How often do you want to work out?"
            fontWeight="800"
            fontSize="16"
            textAlignment="left"
          />
            <TextField
             v-model="getTexthowOften"
              marginBottom="6"
              marginLeft="14"
              marginRight="16"
              :hint="textValue.howOften"
              @tap="onTapHowOften"
              borderRadius="10"
              backgroundColor="#FFFFFF"
              editable="false"
              class="form_input" 
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
import { ApplicationSettings, isIOS } from '@nativescript/core';
// import cache from '~/store/cache/index';
import { dateFormat_YYYY_DD_MM, getValueById, getValueByIdArray} from "~/resource/helper";
import moment from 'moment'
import help from '~/mixins/help'
import {hideKeyboard ,getdateIOS} from '../../resource/helper' 

export default {
  mixins:[help],
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
        experience:"How experience are you",
        experience_id:"",
        experiences:[],
        reason:"Select one",
        reason_id:"",
        reasons:[],
        whereDo:"Where do you exercise",
        whereDo_id:"",
        whereDoes:[],
        howOften:"Select one",
        howOften_id:"",
        howOftenArray:[],
        state:'State',
        firstName:'',
        middleName:'',
        lastName:'',
        date_of_birth:  '',
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
      date_of_birth:{
        dia:null, 
        mes:null, 
        ano: null
      },
      errorsMessage:{
        errorMessage:""
      },
      primerslap: false,
      segundoslap: false,
    };
  },
  filters:{
    fechas(value){
      return moment(value).format('MM/DD/YYYY')
    },
  },
  async mounted(){
    try {
      const responseState = await apiGet('/get_state')
      this.textValue.states = responseState
      const responseGender = await apiGet('/gender')
      this.textValue.genders = responseGender[0]
      const responseCountry = await apiGet('/get_country')
      this.textValue.countrys = responseCountry
      const responseExperience = await apiGet('/experience')
      this.textValue.experiences =responseExperience[0]
      const responseReason = await apiGet('/reason')
      this.textValue.reasons = responseReason[0]
      const responseWhereDo = await apiGet('/exercise_place')
      this.textValue.whereDoes = responseWhereDo[0]
      const responseHowOften = await apiGet('/frequency')
      this.textValue.howOftenArray = responseHowOften[0]

     await this.getUser()

      this.loadingState = false

    } catch (error) {
      console.log('ERROr', new Error(error));
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
    textChange({value, object}){
     // this.textValue.date_of_birth = this.formateafecha(value)
    },
    async getUser(){
      const response = await apiGet('/get_user')
      this.textValue.firstName     = response.data.user.name
      this.textValue.middleName    = response.data.user.middle_name
      this.textValue.lastName      = response.data.user.last_name
      if(response.data.user.date_of_birth){
         const date = getdateIOS(
          response.data.user.date_of_birth.split('-')[0],//year
          response.data.user.date_of_birth.split('-')[1],//month
          response.data.user.date_of_birth.split('-')[2],//day
          )
        if(isIOS){
            this.date_of_birth.ano = date.getFullYear()
            this.date_of_birth.mes = (date.getMonth() + 1)
            this.date_of_birth.dia = date.getDay() 
        }else{
          this.textValue.date_of_birth = response.data.user.date_of_birth
        }
      }else{
      }
      this.textValue.state_id      = response.data.user.state_id
      this.textValue.state         = !!this.textValue.state_id ? getValueByIdArray(this.textValue.states.data,this.textValue.state_id,"name") : this.textValue.state
      
      this.textValue.gender_id     = response.data.user.gender_id

      this.textValue.gender        = !!this.textValue.gender_id ? getValueByIdArray(this.textValue.genders,this.textValue.gender_id,"description") :  this.textValue.gender
      this.textValue.phone         = response.data.user.telephone
      this.textValue.email         = response.data.user.email
      this.textValue.address       = response.data.user.address
      this.textValue.postal_code   = response.data.user.postal_code
      this.textValue.city          = response.data.user.city
      this.textValue.country_id    = response.data.user.country_id
      this.textValue.country       = !!this.textValue.country_id ? getValueByIdArray(this.textValue.countrys.data,this.textValue.country_id,"description") : this.textValue.country  
      this.textValue.experience_id = response.data.user.experience_id
      this.textValue.experience   =   !!this.textValue.experience_id ? getValueByIdArray(this.textValue.experiences,this.textValue.experience_id,"description") : this.textValue.experience
      
      this.textValue.howOften_id = response.data.user.frequency_id

      this.textValue.howOften = !!this.textValue.howOften_id ? getValueByIdArray(this.textValue.howOftenArray,this.textValue.howOften_id,"description") :this.textValue.howOften

      this.textValue.whereDo_id = response.data.user.exercise_place_id
      this.textValue.whereDo =!!this.textValue.whereDo_id ? getValueByIdArray(this.textValue.whereDoes,this.textValue.whereDo_id,"description") : this.textValue.whereDo


      this.textValue.reason_id = response.data.user.reason_id
      this.textValue.reason = !!this.textValue.reason_id ? getValueByIdArray(this.textValue.reasons,this.textValue.reason_id,"description") : this.textValue.reason
    

      this.loadingState = false
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
      hideKeyboard()
      const dataCache = JSON.parse(ApplicationSettings.getString('userProfile',"{}"))
      const date_birthIOS = getdateIOS( this.date_of_birth.ano,this.date_of_birth.mes,this.date_of_birth.dia)
      let body ={
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
            "date_of_birth": this.textValue.date_of_birth ? dateFormat_YYYY_DD_MM( this.textValue.date_of_birth) : null,
            "telephone":this.textValue.phone,
            "experience_id":this.textValue.experience_id,
            "reason_id":this.textValue.reason_id,
            "frequency_id":this.textValue.howOften_id,
            "exercise_place_id":this.textValue.whereDo_id
        }

        if(isIOS){
          body = {...body,
          date_of_birth:  dateFormat_YYYY_DD_MM(date_birthIOS)
          }
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
    IsNumeric(valor) {
        var log = valor.length;
        var sw = "S";
        var x;
        for (x = 0; x < log; x++) {
            let v1 = valor.substr(x, 1);
            let v2 = parseInt(v1);
            //Compruebo si es un valor numérico
            if (isNaN(v2)) {
                sw = "N";
            }
        }
        if (sw == "S") {
            return true;
        } else {
            return false;
        }
    },
    formateafecha(fecha) {
        var long = fecha.length;
        var dia;
        var mes;
        var ano;

        if ((long >= 2) && (this.primerslap == false)) {
            dia = fecha.substr(0, 2);
            if ((this.IsNumeric(dia) == true) && (dia <= 31) && (dia != "00")) {
                fecha = fecha.substr(0, 2) + "/" + fecha.substr(3, 7);
                this.primerslap = true;
            } else {
                fecha = "";
                this.primerslap = false;
            }
        } else {
            dia = fecha.substr(0, 1);
            if (this.IsNumeric(dia) == false) {
                fecha = "";
            }
            if ((long <= 2) && (this.primerslap = true)) {
                fecha = fecha.substr(0, 1);
                this.primerslap = false;
            }
        }
        if ((long >= 5) && (this.segundoslap == false)) {
            mes = fecha.substr(3, 2);
            if ((this.IsNumeric(mes) == true) && (mes <= 12) && (mes != "00")) {
                fecha = fecha.substr(0, 5) + "/" + fecha.substr(6, 4);
                this.segundoslap = true;
            } else {
                fecha = fecha.substr(0, 3);;
                this.segundoslap = false;
            }
        } else {
            if ((long <= 5) && (this.segundoslap = true)) {
                fecha = fecha.substr(0, 4);
                this.segundoslap = false;
            }
        }
        if (long >= 7) {
            ano = fecha.substr(6, 4);
            if (this.IsNumeric(ano) == false) {
                fecha = fecha.substr(0, 6);
            } else {
                if (long == 10) {
                    if ((ano == 0) || (ano < 1900) || (ano > 2100)) {
                        fecha = fecha.substr(0, 6);
                    }
                }
            }
        }

        // if (long >= 10) {
        //     fecha = fecha.substr(0, 10);
        //     dia = fecha.substr(0, 2);
        //     mes = fecha.substr(3, 2);
        //     ano = fecha.substr(6, 4);
        //     // Año no viciesto y es febrero y el dia es mayor a 28
        //     if ((ano % 4 != 0) && (mes == 02) && (dia > 28)) {
        //       fecha = fecha.substr(0, 2) + "/";
        //     }
        // }
        return (fecha);
    },
    
    onSuccessUpdate(res){
      hideKeyboard()
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
                          value: this.textValue.state
                        } })

      this.textValue.state_id = data.id
      this.textValue.state = data.name
    },
    async onTapGender(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.genders, 
                          key: 'description',
                          value: this.textValue.gender
                        } })
      this.textValue.gender_id = data.id
      this.textValue.gender = data.description
    },
    async onTapExperience(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.experiences, 
                          key: 'description',
                          value: this.textValue.experience
                        } })
      this.textValue.experience_id = data.id
      this.textValue.experience = data.description
    },
    async onTapReason(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.reasons, 
                          key: 'description',
                          value: this.textValue.reason
                        } })
      this.textValue.reason_id = data.id
      this.textValue.reason = data.description
    },
    async onTapWhereDo(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.whereDoes, 
                          key: 'description',
                          value: this.textValue.whereDo
                        } })

      this.textValue.whereDo_id = data.id
      this.textValue.whereDo = data.description
    },
    async onTapHowOften(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.textValue.howOftenArray, 
                          key: 'description',
                          value: this.textValue.howOften_id
                        } })


      this.textValue.howOften_id = data.id
      this.textValue.howOften = data.description
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
    },
  },
  computed:{
    // getMarginOS(){ //enviado a mixin
    //   return global.isIOS ? '0' : '32' 
    // },
    ios(){
      return global.isIOS
    },
    getTextWhereDo(){
      if(this.textValue.whereDo_id){
        return this.textValue.whereDo
        }else{
          return ''
        }
    },
    getTextGender(){
      if(this.textValue.gender_id){
        return this.textValue.gender
        }else{
          return ''
        }
    },
     getTextCountry(){
      if(this.textValue.country_id){
        return this.textValue.country
        }else{
          return ''
        }
    },
      getTexthowOften(){
      if(this.textValue.howOften_id){
        return this.textValue.howOften
        }else{
          return ''
        }
    },
    getTextExperience(){
      if(this.textValue.experience_id){
        return this.textValue.experience
        }else{
          return ''
        }
    },
    getTextReason(){
      if(this.textValue.reason_id){
        return this.textValue.reason
        }else{
          return ''
        }
    },
      
    getTextDateBirth(){
      if(this.textValue.date_of_birth){
        return this.textValue.date_of_birth
      }else{
        return ''
      }
    },
    getTextState(){
      if(this.textValue.state_id){
        return this.textValue.state
        }else{
          return ''
        }
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


.date-picker {
  vertical-align:middle;
  display: flex;
  justify-content: center;
  text-align: left;
  color:#949494;
  margin-bottom:6;
  margin-left:14;
  margin-right:16;
  border-radius:10;
  background-color:#FFFFFF;
  height:36;
}
</style>
