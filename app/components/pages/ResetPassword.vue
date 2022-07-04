<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
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
    </Page>
</template>

<script>
import { apiPost } from '~/resource/http';
    export default {
        data() {
            return {
                textFieldValue:{
                    email:''
                },
                 message:{
                    message:''
                }
            };
        },
        methods:{
            processResetPassword(){
                const email = String(this.textFieldValue.email).trim().toLowerCase()
                apiPost({},`/olvide_clave?email=${email}`)
                .then(this.onSuccess)
                .catch(this.onError)

            },
            onSuccess(res){
                if(res.status === "We have emailed your password reset link!"){
                    this.message.message = res.status
                       this.$navigator.navigate('/create-password')
                }
            },
            onError(err){
                console.log('err',err);
                this.message.message = "Have Error"
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
</style>