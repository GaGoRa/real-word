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
                   
                    <TextField height="40" hint="Phone # or Email"
                        secure="true" v-model="textFieldValue"
                        backgroundColor="white" color="949494" borderRadius="8" />
                </StackLayout>
               
                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="white" @tap="$navigator.navigate('/welcome')" marginBottom="32" />
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {};
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