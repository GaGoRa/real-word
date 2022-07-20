<template>
  <Page  class="seccion-register-bg-invert" actionBarHidden="true"> 
    <ScrollView height="100%" width="100%">
     <StackLayout >
      <GridLayout  columns="*" height="100%" rows="*,auto">

        <StackLayout row="0" col="0" height="100%" paddingTop="100" paddingBottom="100">
        
              <Label 
                text="Register" 
                fontSize="24" 
                fontWeight="900"
                textAlignment="center" 
                color="#949494" 
                marginBottom="16" 
              />


              <!-- <StackLayout 
                marginRight="12" 
                orientation="horizontal"  
                marginLeft="12" 
                borderRadius="12" 
                height="40" 
                backgroundColor="#2051D8"
                color="#FFFFFF" 
                marginBottom="16" 
                paddingLeft="32" 
                paddingRight="32" 
                class="stack-layout-btn">
                  <Image src="~/assets/icons/icon_facebook.png" height="24" marginRight="16" />
                  <Label verticalAlignment="middle" horizontalAlignment="center" text="Login in with Facebook" marginTop="4" fontSize="14" color="#FFFFFF" />
              </StackLayout> -->

              <!-- <StackLayout 
                marginRight="12" 
                marginLeft="12" 
                orientation="horizontal"  
                borderRadius="12" 
                height="40" 
                backgroundColor="#FFFFFF" 
                color="#FFFFFF" 
                marginBottom="0" 
                paddingLeft="32" 
                paddingRight="32" 
                class="stack-layout-btn">
                  <Image src="~/assets/icons/icon_google.png" height="24" marginRight="16" />
                  <Label verticalAlignment="middle" @tap="processLoginGoogle" horizontalAlignment="center" text="Sign in with Google" marginTop="4" fontSize="14" color="black" />
              </StackLayout> -->

              <!-- <Label 
                text="or" 
                fontSize="24"
                fontWeight="900"
                textAlignment="center" 
                color="#FFFFFF" 
                marginBottom="16" 
              /> -->

              <Label  
                v-if="!!errorsMessages.errorMessage" 
                @tap="haveCode ? $navigator.navigate('/verification-code',{
                        props:{
                          data:{
                              typePage:'CreateUser'
                          }
                        }
                      }) :null"
                fontSize="16" 
                fontWeight="400"
                textAlignment="center" 
                color="red" 
                marginLeft="32" 
                marginTop="0" 
                marginBottom="0" >
                <FormattedString>
                  <span fontSize="12" :text="errorsMessages.errorMessage" />
                  <span v-if="haveCode" text=", do you have a code? Tap here"  fontSize="12" fontWeight="900" textWrap="true"/>
                </FormattedString>
              </Label> 

              <TextField 
                class="form_input" 
                v-model="textFieldValue.firstName"
                hint="First Name"  
              />

                <Label  
                  v-if="!!errorsMessages.ErrorFirstName" :text="errorsMessages.ErrorFirstName" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                /> 

              <TextField 
                v-model="textFieldValue.lastName" 
                hint="Last Name" 
                class="form_input" 
              />
                <Label  
                  v-if="!!errorsMessages.ErrorLastName" :text="errorsMessages.ErrorLastName" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                />

              <TextField 
                class="form_input" 
                :hint="country"
                :text="country != 'Country' ? country:''"
                editable="false"
                @tap="onTapState"
              />
                <Label  
                  v-if="!!errorsMessages.ErrorCountry" :text="errorsMessages.ErrorCountry" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0"
                />

              <TextField 
                keyboardType="email"
                tabTextFontSize="50" 
                class="form_input" 
                v-model="textFieldValue.email" 
                hint="Email"
              />
                <Label  
                  v-if="!!errorsMessages.ErrorEmail" :text="errorsMessages.ErrorEmail" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                />

              <TextField 
                keyboardType="phone" 
                v-model="textFieldValue.phone" 
                hint="Phone #"
                class="form_input"  
              />
                  <Label 
                    v-if="!!errorsMessages.ErrorPhone" :text="errorsMessages.ErrorPhone" 
                    fontSize="16" 
                    fontWeight="400"
                    textAlignment="left" 
                    color="red" 
                    marginLeft="32" 
                    marginTop="0" 
                    marginBottom="0" 
                  />
                  
              <TextField 
                v-model="textFieldValue.password" 
                hint="Password"
                secure="true"
                class="form_input" 
              />
                <Label  
                  v-if="!!errorsMessages.password" :text="errorsMessages.password" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="8" 
                />
        </StackLayout>
        
        <StackLayout marginTop="auto" row="2" col="0" paddingBottom="32">
           <StackLayout v-if="loading" marginTop="16" marginBottom="16"  marginRight="16" >
         
                <ActivityIndicator :busy="loading"  />
                </StackLayout>

          <Button 
            borderRadius="16" 
            marginTop="16" 
            fontSize="16"
            text="Register" 
            backgroundColor="red" 
            width="200"
            height="40" 
            fontWeight="900" 
            color="#FFFFFF"
            marginBottom="8" 
            @tap="processCreateUser"
          />
          <FlexboxLayout justifyContent="center">
            <!-- <StackLayout>
              <Label text="" backgroundColor="red" width="50"  marginTop="12" marginRight="8" verticalAlignment="bottom" height="3"/>
            </StackLayout> -->
            <Label text="Already Register?" color="black" marginRight="8" @tap="passPrueba" />
            <Label text="Login" textDecoration="underline" fontWeight="900"  color="black" @tap="$navigator.navigate('/login-aplication')" />
            <!-- <StackLayout>
              <Label text="" backgroundColor="red" width="50" verticalAlignment="bottom" marginLeft="8" marginTop="12" height="3"/>
            </StackLayout> -->
          </FlexboxLayout>
        </StackLayout>

      </GridLayout>
    <!-- </FlexboxLayout> -->
      </StackLayout>
    </ScrollView >
  </Page>
</template>

<script>
import { apiPost, apiGet } from '~/resource/http';
import SelectInput from "~/components/components/menuDrawer/selectInput";
import SelectDrawer from "~/components/components/menuDrawer/selectDrawer";
import { ApplicationSettings } from '@nativescript/core';

  export default {
    components: {
        SelectInput,
        SelectDrawer
    //CustomTextField
  },
      data(){
          return {
            haveCode:false,
            drawerState:false,
            hint:'Country',
            country_id: 0,
            country: 'Country',
            items_selectPicker:[
              { description:"United State", id: 1}
            ]
            ,textFieldValue:{
              firstName:'',
              lastName:'',
              email:'',
              phone:'',
              country:'',
              password:''
            },
            errorsMessages:{
              ErrorFirstName:'',
              ErrorLastName:'',
              ErrorEmail:'',
              ErrorPhone:'',
              ErrorCountry:'',
              ErrorPassword:'',
              errorMessage:''
            },
            loading:false
          }

      },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    async mounted(){
        
      const response = await apiGet('/get_country')
      if(response.status){
        this.items_selectPicker = response.data
      }
    },
    methods:{
        passPrueba(){
            const userCache ={
                "user": {
            "id": 75,
            "name": "Asdasdasd",
            "middle_name": "Fffff",
            "last_name": "123123213",
            "gender_id": 2,
            "date_of_birth": "2022-12-21",
            "email": "gabo3@gmail.com",
            "email_verified_at": null,
            "token": "127|M9cv9cpjY4DHkng2yW7ajahHTKVf3sb5ZcJUV6k2",
            "country_id": 1,
            "address": "123123123",
            "telephone": "123123rr123123",
            "current_team_id": null,
            "profile_photo_path": null,
            "experience_id": 1,
            "reason_id": 1,
            "frequency_id": 1,
            "exercise_place_id": 1,
            "pm_type": null,
            "pm_last_four": null,
            "trial_ends_at": null,
            "utype": "USR",
            "state_id": 56,
            "city": "Hhhh",
            "postal_code": "222",
            "code": 718603,
            "profile_photo_url": "https://ui-avatars.com/api/?name=A&color=7F9CF5&background=EBF4FF"
                     },
                "token": "127|M9cv9cpjY4DHkng2yW7ajahHTKVf3sb5ZcJUV6k2"
                }

            ApplicationSettings.setString("userProfile",JSON.stringify(userCache))
           this.$navigator.navigate('/choose-best-programs',{props:{
            data:
                {
                    typePage:"CreateUser"
                }
                }
             }
        )
        },
        async onTapState(){
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker, 
                              key: 'description',
                              value: this.country_id
                            } })

          this.country_id = data.id
          this.country = data.description
          await this.$forceUpdate()
        },
        changeHint(hintName){
            this.hint = hintName
        },
        miFuncion(event){
            this.drawerState = event
        },
        close(event){

             console.log("pepe",event);
            this.drawerState = event
        },
        processCreateUser(){ 

          this.loading = true
        //     const body = {
        //     "name": "Asd",
        //     "last_name": "Asd",
        //     "email": "As1b2a1a12211aasd2a123d@gmail",
        //     "password": "N/A",
        //          "telephone": "123123123123",
        //     "country_id": "1"
        //   }  
            const body = {
                "name":          this.textFieldValue.firstName,
                "last_name":     this.textFieldValue.lastName,
                "email":         this.textFieldValue.email,
                 "password":      this.textFieldValue.password,
                "telephone":     this.textFieldValue.phone,
                "country_id":    this.country_id 
            }


           apiPost(body,'/register')
            .then(this.onSuccess)
            .catch(this.onError)
    
        },
        processLoginGoogle(){
            console.log('llego');
            GoogleLogin()

        },

        onSuccess(response){
             if(response.message === "User Registered"){
                ApplicationSettings.setString("userProfile",JSON.stringify(response.data))
                this.$navigator.navigate('/verification-code',{props:{
            data:
                {
                    typePage:"CreateUser"
                }
                }
             })

             }
            //navigate('/home')
             this.loading = false
        },
        onError(err){
          this.loading = false
        const error = JSON.parse(err.content)

                this.errorsMessages={
                        ErrorFirstName:'',
                        ErrorLastName:'',
                        ErrorEmail:'',
                        ErrorPhone:'',
                        ErrorCountry:'',
                        ErrorPassword:'',
                        errorMessage:''
                        } 
                     
             if(!!error.message){ 

            if (String(error.message).toLowerCase() === 'user already exists' && !!ApplicationSettings.getString('userProfile',false) ) {
                this.haveCode = true                      
            }   
             this.errorsMessages.errorMessage = error.message
        
                }

             if(!!error.email){    
                    this.errorsMessages.ErrorEmail = error.email[0] 
                }

            if(!!error.password){
                     this.errorsMessages.ErrorPassword = error.password[0]
                }
            if(!!error.name){
                     this.errorsMessages.ErrorFirstName = error.name[0]
                }
            if(!!error.last_name){
                     this.errorsMessages.ErrorLastName = error.last_name[0]
                }
            if(!!error.telephone){
                     this.errorsMessages.ErrorPhone = error.telephone[0]
                }
            if(!!error.country){
                     this.errorsMessages.ErrorCountry = error.country[0]
                }
                if(!!error.password){
                     this.errorsMessages.ErrorPassword = error.password[0]
                }
        
        },
    }
    
  };


</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
