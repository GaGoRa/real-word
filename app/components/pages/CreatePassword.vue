<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">

                
          
                <Label text="Create Password" fontSize="24" fontWeight="900"
                    textAlignment="center" marginBottom="16" />
                <StackLayout marginBottom="32">
                    <TextField height="40" hint="Password" secure="true"
                        v-model="textFieldValue.password" backgroundColor="#FFFFFF"
                        borderRadius="8" />
                          <Label  v-if="!!errorsMessages.password" :text="errorsMessages.password" fontSize="16" fontWeight="400"
            textAlignment="left" textWrap="true" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
                    <TextField height="40" hint="Confirm Password"
                        secure="true" v-model="textFieldValue.repetpassword"
                        backgroundColor="#FFFFFF" borderRadius="8" />
                          <Label  v-if="!!errorsMessages.repetpassword" :text="errorsMessages.repetpassword" fontSize="16" fontWeight="400"
            textAlignment="left" textWrap="true" color="red" marginLeft="32" marginTop="0" marginBottom="0" />
                </StackLayout>
                <!-- <Label text="Wrong number?" fontSize="14"
                    textAlignment="center" marginBottom="32" /> -->
                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="#FFFFFF" @tap="processCreateNewPassword" marginBottom="32" />
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import { apiPost } from '~/resource/http';
import { ApplicationSettings,Dialogs } from '@nativescript/core';
import { hideKeyboard } from '../../resource/helper'
    export default {
        data() {
            return {
                textFieldValue:{
                    password:'',
                    repetpassword:'',
                },
                emailUser:null,
                errorsMessages:{
                password:'',
                password_confirmation:'',
                }
            };
        },
        methods:{
        processCreateNewPassword(){
                hideKeyboard()

               const body ={
                   email:this.emailUser,
                   password:this.textFieldValue.password,
                   password_confirmation:this.textFieldValue.repetpassword,
               }
               apiPost(body,'/new_password')
               .then(this.onSuccess)
               .catch(this.onError)
   
            },
        alertDialog(err){
            Dialogs.alert({
              message: "Have a problem , please try new reset your password",
              okButtonText: 'OK',
              theme:5
      }).then(()=>{
          console.log("Have a problem the data email, of user not found", err);
      });

          },
         onSuccess(res){
            ApplicationSettings.setString('userProfile',JSON.stringify(res.data))

            setTimeout(() => {
                this.$navigator.navigate('/home',{clearHistory:true})
            }, 500);
         },
         onError(err){
            const error = JSON.parse(err.content)
            if(err.statusCode ===422){
                
                if (error.password) {
                    this.errorsMessages.password = error.password[0]
                } 
                if(err.password_confirmation){
                this.errorsMessages.password_confirmation = error.password_confirmation[0]
                }

            }else{
                this.alertDialog(err)

            }

            console.log("error",err);
         },
        },
         created(){
           const cacheUser = JSON.parse(ApplicationSettings.getString('userProfile',"{}"))
           console.log("chacheUser",cacheUser);
            if(!!cacheUser.user.email){
                this.emailUser = cacheUser.user.email
            }else{
                this.alertDialog(cacheUser)
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