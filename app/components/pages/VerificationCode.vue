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

                    <TextField
                        ref="1"
                        keyboardType="number"  
                        maxLength="1" 
                        v-model="stringCode.code1" 
                        width="32" 
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="4"
                        @textChange="passTextfield1"
                    />

                    <TextField 
                        ref="2"

                        keyboardType="number"  
                        maxLength="1" 
                        v-model="stringCode.code2" 
                        width="32" 
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="4"
                        @textChange="passTextfield2"

                    />

                    <TextField 
                        ref="3"

                        keyboardType="number"  
                        maxLength="1"  
                        v-model="stringCode.code3" 
                        width="32"
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="16" 
                        @textChange="passTextfield3"
                        />
                        
                    <TextField 
                        ref="4"

                        keyboardType="number"  
                        maxLength="10" 
                        v-model="stringCode.code4" 
                        width="32" 
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="4"
                        @textChange="passTextfield4"

                    />

                    <TextField 
                        ref="5"

                        keyboardType="number"  
                        maxLength="10" 
                        v-model="stringCode.code5" 
                        width="32" 
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="4"
                        @textChange="passTextfield5"

                    />

                    <TextField 
                        ref="6"

                        keyboardType="number" 
                        maxLength="10"  
                        v-model="stringCode.code6" 
                        width="32" 
                        height="40"
                        backgroundColor="#FFFFFF" 
                        borderRadius="8" 
                        marginRight="4"
                        @textChange="passTextfield"

                    />

                </FlexboxLayout>
                     <Label fontSize="14" textAlignment="center" marginBottom="16">
                    <FormattedString>
                        <span fontSize="12" text="If you didn´t received the code, please try again" />
                        <span text="   please try again" @tap="reSendCode" fontSize="12" fontWeight="800" textWrap="true"/>
                    </FormattedString>
                </Label>
            
                <Label  v-if="errorMessage" marginTop="4" :text="errorMessage" fontSize="14"
                    textAlignment="center"  color="red" marginBottom="32"/>

                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="#FFFFFF" marginBottom="32" @tap="processVerificationsEmails" />
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import cache from '~/store/cache'
import { apiPost} from '~/resource/http';
import { ref } from 'vue';

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
        computed:{
            code(){
                return this.stringCode.code1+this.stringCode.code2+this.stringCode.code3+this.stringCode.code4+this.stringCode.code5+this.stringCode.code6
            }
        },
        methods:{
            processVerificationsEmails(){
                const body = {
                    code: this.code,
                    user_id: this.id
                }
                apiPost(body,"/validate_code")
                .then(this.onSuccess)
                .catch(this.onError)

               
            },
            passTextfield1(event){
                const textInput = this.$refs['2'].nativeView
                textInput.focus()   
            },
            passTextfield2(event){
                const textInput = this.$refs['3'].nativeView
                textInput.focus()   
            },
            passTextfield3(event){
                const textInput = this.$refs['4'].nativeView
                textInput.focus()   
            },
            passTextfield4(event){
                const textInput = this.$refs['5'].nativeView
                textInput.focus()   
            },
             passTextfield5(event){
                const textInput = this.$refs['6'].nativeView
                textInput.focus()   
            },



            onSuccess(res){
                 //TODO validar el succes y el errors
                this.$navigator.navigate('/choose-best-programs')
            },
            onError(err){
                this.errorMessage = 'Have a error' + err
            },
            reSendCode(){
                const body = {
                    user_id: this.id
                }
                apiPost(body,"/resend_code")
                .then((res)=> console.log('ressendCOde'))
                .catch((err)=> console.log('err',err))

                //TODO validar respuesta
                ;
            }
        },
        mounted(){ 

                const cacheData = cache.get("userProfile")
                const data = JSON.parse(cacheData)

                this.email = data.user.email
                this.id = data.user.id
                this.token = data.token
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