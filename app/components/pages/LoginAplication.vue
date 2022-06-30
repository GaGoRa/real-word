<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <GridLayout columns="*" rows="*,auto">
            <StackLayout  col="0" row="0">
            </StackLayout>

        <FlexboxLayout col="0" row="1" flexDirection="column" marginLeft="16" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
           
                

                 <!-- <StackLayout marginRight="12" orientation="horizontal"  marginLeft="12" borderRadius="12" height="40" backgroundColor="#2051D8"
                    color="white" marginBottom="16" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                            <Image src="~/assets/icons/icon_facebook.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle"  horizontalAlignment="center" text="Login in with Facebook" marginTop="4" fontSize="14" color="white" />
                    </StackLayout>

                      <StackLayout marginRight="12" marginLeft="12" orientation="horizontal"  borderRadius="12" height="40" backgroundColor="white"
                    color="white" marginBottom="32" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                        <Image src="~/assets/icons/icon_google.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle" horizontalAlignment="center"  text="Sign in with Google" marginTop="4" fontSize="14" color="black" />
                    </StackLayout> -->
                     
                     <!-- error messagee -->
                     <Label text="Login" fontSize="24" fontWeight="900"
                        textAlignment="center" color="#949494" marginBottom="32" />


                    <Label  v-if="!!errorsMessages.errorMessage" :text="errorsMessages.errorMessage" fontSize="16" fontWeight="400"
                    textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />


                <TextField height="38" v-model="textFieldValue.email"
                    hint="Email" backgroundColor="white" borderRadius="10"/>
                
                <Label  v-if="!!errorsMessages.email" :text="errorsMessages.email" fontSize="16" fontWeight="400"
                    textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
    

                <TextField  tabTextFontSize="50" class="textbox" height="38"  v-model="textFieldValue.password" hint="Password"
                    backgroundColor="white" borderRadius="10" marginBottom="6"  secure="true" />
                     
                     <Label  v-if="!!errorsMessages.password" :text="errorsMessages.password" fontSize="16" fontWeight="400"
                    textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
    

                <Label text="Forgot password?" @tap="$navigator.navigate('/reset-password')" marginLeft="16" marginTop="8"  fontWeight="700" color="black" marginBottom="8"/>
                
                <Button borderRadius="16" marginTop="" fontSize="16"
                    text="Login" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="white"
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
import cache from '~/store/cache/cache.android';
  export default {
      data(){
          return {
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
            // const body ={
            //     "email":"gabo@gmail.com",
            //     "password":"1234123123asdasd5678"
            // }
            const body ={
                "email": String(this.textFieldValue.email).trim().toLocaleLowerCase(),
                "password":String(this.textFieldValue.password).trim().toLocaleLowerCase()
            }
            apiPost(body,"/login")
            .then(this.onSuccess)
            .catch(this.onError)
            },

            onSuccess(resp){

                if(resp.message === 'User Logged'){
                    cache.set("userProfile",JSON.stringify(resp.data))
                        this.$navigator.navigate('/home')
                }else{
                    this.errorsMessages={
                    errorMessage:'',
                    email:'',
                    password:''
                    
                }
                this.errorsMessages.errorMessage = resp.message
                }
            },

            onError(err){
                this.errorsMessages={
                    errorMessage:'',
                    email:'',
                    password:''
                    
                }
                const error = JSON.parse(err.content)
                
                if(!!error.email){    
                    this.errorsMessages.email = error.email[0]
                    
                }
                if(!!error.password){
                     this.errorsMessages.password = error.password[0]
                }

                
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
