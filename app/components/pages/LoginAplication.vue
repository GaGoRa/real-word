<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <GridLayout columns="*" rows="*,auto">
            <StackLayout  col="0" row="0">
            </StackLayout>

        <FlexboxLayout col="0" row="1" flexDirection="column" marginLeft="16" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
           
                

                 <!-- <StackLayout marginRight="12" orientation="horizontal"  marginLeft="12" borderRadius="12" height="40" backgroundColor="#2051D8"
                    color="#FFFFFF" marginBottom="16" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                            <Image src="~/assets/icons/icon_facebook.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle"  horizontalAlignment="center" text="Login in with Facebook" marginTop="4" fontSize="14" color="#FFFFFF" />
                    </StackLayout>

                      <StackLayout marginRight="12" marginLeft="12" orientation="horizontal"  borderRadius="12" height="40" backgroundColor="#FFFFFF"
                    color="#FFFFFF" marginBottom="32" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                        <Image src="~/assets/icons/icon_google.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle" horizontalAlignment="center"  text="Sign in with Google" marginTop="4" fontSize="14" color="black" />
                    </StackLayout> -->
                     
                     <!-- error messagee -->
                     <Label text="Login" fontSize="24" fontWeight="900"
                        textAlignment="center" color="#949494" marginBottom="32" />


                    <Label  v-if="!!errorsMessages.errorMessage" :text="errorsMessages.errorMessage" fontSize="16" fontWeight="400"
                    textAlignment="left" textWrap="true" color="red" marginLeft="32" marginTop="0" marginBottom="0" />

                <!-- <PreviousNextView> -->
                    <StackLayout>
                <TextField 
                class="form_input" 
                keyboardType="email" 
                v-model="textFieldValue.email"
                hint="Email"
                />

                <Label  v-if="!!errorsMessages.email" :text="errorsMessages.email" fontSize="16" fontWeight="400"
                    textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
                    </StackLayout>
                    
                    <StackLayout>

                <TextField 
                class="form_input" 
                tabTextFontSize="50"
                v-model="textFieldValue.password"
                hint="Password"
                marginBottom="6"  secure="true" />
                     
                     <Label  v-if="!!errorsMessages.password" :text="errorsMessages.password" fontSize="16" fontWeight="400"
                    textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
                    </StackLayout>

                <!-- </PreviousNextView> -->


                <Label text="Forgot password?" @tap="$navigator.navigate('/reset-password')" marginLeft="16" marginTop="8"  fontWeight="700" color="black" marginBottom="8"/>
                
                 <StackLayout v-if="loadingLogin" marginTop="16" marginBottom="16"  marginRight="16" >
         
                <ActivityIndicator :busy="loadingLogin"  />
                </StackLayout>

                <Button borderRadius="16" marginTop="" fontSize="16"
                    text="Login" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="#FFFFFF"
                    marginBottom="32" @tap="processLogin"/>     

                        <FlexboxLayout marginBottom="32" justifyContent="center">
                        <StackLayout>
                        <Label text="" backgroundColor="red" width="50"  marginTop="12" marginRight="8" verticalAlignment="bottom" height="3"/>
                        </StackLayout>
                        <Label text="New user?" color="black"
                            marginRight="8" />
                        <Label text="Register Now" textDecoration="underline"
                            fontWeight="900" color="black" @tap="$navigator.navigate('/register')" />
                        <StackLayout>
                    <Label text="" backgroundColor="red" width="50" verticalAlignment="bottom" marginLeft="8" marginTop="12" height="3"/>
                        </StackLayout>
                    </FlexboxLayout>
                    

            </StackLayout>
        </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
 import { apiPost } from '~/resource/http'
// import cache from '~/store/cache';
import { ApplicationSettings } from '@nativescript/core';

  export default {
      data(){
          return {
            loadingLogin:false,
            textFieldValue: {
                email:'',
                password:''
            },
            errorsMessages:{
                errorMessage:'',
                email:'',
                password:''
            }
          }

      },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
        myFuncion(){
            this.$navigator.navigate('/home')
        },
        processLogin(){
            this.loadingLogin = true
            const body ={
                "email": String(this.textFieldValue.email).trim().toLocaleLowerCase(),
                "password":this.textFieldValue.password
            }
            apiPost(body,"/login")
            .then(this.onSuccess)
            .catch(this.onError)
            },

            onSuccess(resp){
                if(resp.message === 'User Logged'){
                    ApplicationSettings.setString("userProfile",JSON.stringify(resp.data))
                        this.loadingLogin = false
                        this.$navigator.navigate('/home',{clearHistory:true})

                }else{
                    this.errorsMessages={
                    errorMessage:'',
                    email:'',
                    password:''
                    
                }
                this.errorsMessages.errorMessage = resp.message
                this.loadingLogin = false

                }

            },

            onError(err){
                     this.loadingLogin = false
                const error = JSON.parse(err.content)
                this.errorsMessages={
                    errorMessage:'',
                    email:'',
                    password:''
                    
                }
                if(err.statusCode === 422){
                    if(!!error.email){    
                        this.errorsMessages.email = error.email[0]
                        }
                    if(!!error.password){
                        this.errorsMessages.password = error.password[0]
                        }
                } else if (err.statusCode === 403){
                    
                    this.errorsMessages.errorMessage = error.message

                }
                this.loadingLogin = false

                
            }
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
