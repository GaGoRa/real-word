<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">

          <GridLayout :marginTop="getMarginOS" columns="*" rows="auto,*"> 
               <FlexboxLayout  align-items="flex-start" col="0" row="0"  
                        marginLeft="12">
                        <Image  @tap="$navigator.back()"
                        src="~/assets/icons/Icon feather-arrow-left-circle.png" height="30" width="30" />
                </FlexboxLayout>


            <StackLayout col="0" row="1" justifyContent="center"  >
                  

            <StackLayout   marginRight="24" marginLeft="24">

                <FlexboxLayout flexDirection="column"  justifyContent="center">
                
                    <StackLayout marginTop="200" >

                      <Label text="Reset Password" fontSize="24" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="16" />
                 <Label textAlignment="center" color="#949494" 
                 textWrap="true"
                 text="Enter your email address or phone number to get the code to reset your password." 
                 fontSize="16"
                 marginBottom="32" 
                 marginRight="32"
                marginLeft="32"/>
                <StackLayout marginBottom="32">
                        <Label  v-if="!!message.message" :text="message.message" fontSize="16" fontWeight="400"
                        textAlignment="center" color="red" marginLeft="32" marginTop="0" marginBottom="0" /> 

                    <TextField height="40" hint=" Email"
                         v-model="textFieldValue.email"
                        backgroundColor="#FFFFFF" color="949494" borderRadius="8" />
                </StackLayout>
               
                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="#FFFFFF" @tap="processResetPassword" marginBottom="32" />
                    </StackLayout>

                </FlexboxLayout>
            </StackLayout>
                </StackLayout>




      </GridLayout>

        

    </Page>
</template>

<script>
import { apiPost } from '~/resource/http';
import SelectInput from '../components/menuDrawer/selectInput.vue';
import { ApplicationSettings,Dialogs } from '@nativescript/core';
import * as application from "@nativescript/core/application";


    export default {
    data() {
        return {
            textFieldValue: {
                email: ""
            },
            message: {
                message: ""
            }
        };
    },
    methods: {
        processResetPassword() {
            const email = String(this.textFieldValue.email).trim().toLowerCase();
            const body = {
                email:email
            }
            apiPost(body, `/recover_password`)
                .then(this.onSuccess)
                .catch(this.onError);
        },
        onSuccess(res) {
            if (res.status === true) {
                this.message.message = res.message;

                const newCache = {...res.data,
                                  token: res.data.user.token}
                ApplicationSettings.setString("userProfile",JSON.stringify(newCache))
                this.$navigator.navigate("/verification-code",{props:{
                data:
                {
                    typePage:"ResetPassword"
                }
                }
             }
        );
            }else{
                this.message.message = res.message;
            }
        },
        onError(err) {
                console.log(err);
            const error = JSON.parse(err.content)
            if(err.statusCode === 403){
                this.message.message = error.message;

            }else if (err.statusCode === 422) {
                this.message.message = error.email[0];
                
            }else{
                
                Dialogs.alert({
                message: "Have a problem , close the app and try again",
                okButtonText: 'OK',
                theme:5
                }).then(()=>{
                    console.log("Have a problem", err);
                            if (application.android) {
                        application.android.foregroundActivity.finish();
                    } else {
                        exit(0);
                            }
                });

            }


        },
    },
    components: { SelectInput },
    computed:{
        getMarginOS(){
      return global.isIOS ? '0' : '40' 
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