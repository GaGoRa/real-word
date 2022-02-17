<template>
    <Page actionBarHidden="true" class="seccion-register-bg-invert">
       
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
                <Label text="Enter verification code" fontSize="32"
                    fontWeight="900" textAlignment="center" marginBottom="16" />
                <Label fontSize="12" textAlignment="center" marginBottom="16">
                    <FormattedString>
                        <span fontSize="12" text="We have sent a 6 digit verification code to " />
                        <span text="+1 (786)333-3333 " fontSize="12" fontWeight="800" />
                    </FormattedString>
                </Label>
                <FlexboxLayout justifyContent="center" marginBottom="32">
                    <TextField  maxLength="1" v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="1" v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="1"  v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="16" />

                    <TextField  maxLength="10" v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>
                    <TextField  maxLength="10" v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4" />
                    <TextField maxLength="10"  v-model="textFieldValue" width="32" height="40"
                        backgroundColor="white" borderRadius="8" marginRight="4"/>

                </FlexboxLayout>
                <Label text="Wrong number?" fontSize="14"
                    textAlignment="center" marginBottom="32"/>
                <Button borderRadius="10" marginTop="" fontSize="16"
                    text="Next" backgroundColor="red" width="200" height="40"
                    fontWeight="900" color="white" marginBottom="32" @tap="$navigator.navigate('/create-password')" />
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                textFieldValue: ""
            };
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