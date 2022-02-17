<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true" >
        <GridLayout columns="*" rows="=auto,auto">
    <StackLayout col="0" row="0">
             <FlexboxLayout  justifyContent="right">
           
                <Image
                src="~/assets/icons/icon_arrow_next.png" height="48" width="48" />
            </FlexboxLayout>
    </StackLayout>  
        <StackLayout col="0" row="1"  marginRight="32" marginLeft="32" class="home-panel">
            <!--Add your page content here-->
            <Label horizontalAlignment="left" color="#949494" fontSize="24" fontWeight="700"
                textWrap="true" text="Welcome" />
            <Label horizontalAlignment="center" color="#949494" fontSize="32"
                fontWeight="900 " textWrap="true" text="To your new" />
            <Label horizontalAlignment="right" fontSize="24" fontWeight="800"
                textWrap="true" text="Training Regimen" color="#949494" marginBottom="24" />

            <Image
                src="~/assets/images/con_pito.png" />
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