<template>
    <Page actionBarHidden="true" class="seccion-register-bg-invert">
       
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
                <Label text="Enter verification code" fontSize="32"
                    fontWeight="900" textAlignment="center" marginBottom="16" />
                <Label fontSize="12" textAlignment="center" marginBottom="16">
                    <FormattedString>
                        <span fontSize="12" text="We have sent a 6 digit verification code to " />
                        <span :text="email" fontSize="8" fontWeight="800" textWrap="true"/>
                    </FormattedString>
                </Label>
                <FlexboxLayout justifyContent="center" marginBottom="32">
                    <TextField  maxLength="1" v-model="stringCode.code1" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="1" v-model="stringCode.code2" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="1"  v-model="stringCode.code3" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="16" />

                    <TextField  maxLength="10" v-model="stringCode.code4" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="10" v-model="stringCode.code5" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4" />
                    <TextField maxLength="10"  v-model="stringCode.code6" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>

                </FlexboxLayout>
                <!-- <Label text="Wrong number?" fontSize="14"
                    textAlignment="center" marginBottom="32"/> -->
                <Label text="Wrong email?" fontSize="14"
                    textAlignment="center" marginBottom="32"/>
                <Label  v-if="errorMessage" marginTop="4" :text="errorMessage" fontSize="14"
                    textAlignment="center"  color="red" marginBottom="32"/>

                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="white" marginBottom="32" @tap="$navigator.navigate('/choose-best-progrmans')" />
                    <!-- fontWeight="900" color="white" marginBottom="32" @tap="$navigator.navigate('/create-password')" /> -->
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import cache from '~/store/cache/cache.android'
import { apiPost} from '~/resource/http';

    export default {
        data() {
            return {
                stringCode:{
                    code1:'',
                    code2:'',
                    code3:'',
                    code4:'',
                    code5:'',
                    code6:'',
                },
                email:"",
                id:"",
                token:"",
                errorMessage:''
            };
        },
        methods:{
            processVerificationsEmails(){
                
                apiPost({},"/email")
            }
        },
        mounted(){ 
            console.log("cache.get",cache.get("email"));
                this.email = cache.get("email")
                this.id = cache.get("id")
                this.token = cache.get("token")
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