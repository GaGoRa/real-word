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
                    <TextField height="40" hint="Confirm Password"
                        secure="true" v-model="textFieldValue.repetpassword"
                        backgroundColor="#FFFFFF" borderRadius="8" />
                </StackLayout>
                <Label text="Wrong number?" fontSize="14"
                    textAlignment="center" marginBottom="32" />
                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="#FFFFFF" @tap="$navigator.navigate('/welcome')" marginBottom="32" />
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
                    password:'',
                    repetpassword:'',
                }
            };
        },
         processCreateNewPassword(){

            const body ={
                password:this.textFieldValue.password,
                password_confirmation:this.textFieldValue.repetpassword,
            }
            // apiPost(body,'')
            // .then(onSuccess)
            // .catch(onSuccess)

         },
         onSuccess(res){
            this.$navigator.navigate('/login')
         },
         onError(err){

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