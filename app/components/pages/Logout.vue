<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true" >
        <GridLayout columns="*" rows="=auto,auto">
    <StackLayout marginTop="32" marginBottom="16" col="0" row="0">
             <FlexboxLayout  justifyContent="right">
           
                <Image @tap="$navigator.navigate('/home')"
                src="~/assets/icons/icon_arrow_next.png" height="48" width="48" />
            </FlexboxLayout>
    </StackLayout>  
        <StackLayout col="0" row="1"  marginRight="32" marginLeft="32" class="home-panel">
            <!--Add your page content here-->
            <Label horizontalAlignment="left" color="#949494" fontSize="24" fontWeight="700"
                textWrap="true" text="Logout.vue" />
           
    </StackLayout>
    </GridLayout>
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