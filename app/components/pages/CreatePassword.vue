<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
                <Label text="Create Password" fontSize="24" fontWeight="900"
                    textAlignment="center" marginBottom="16" />
                <StackLayout marginBottom="32">
                    <TextField height="40" hint="Password" secure="true"
                        v-model="textFieldValue" backgroundColor="white"
                        borderRadius="8" />
                    <TextField height="40" hint="Confirm Password"
                        secure="true" v-model="textFieldValue"
                        backgroundColor="white" borderRadius="8" />
                </StackLayout>
                <Label text="Wrong number?" fontSize="14"
                    textAlignment="center" marginBottom="32" />
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