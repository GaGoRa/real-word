<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true" >
        <FlexboxLayout justifyContent="right">
            <Label horizontalAlignment="left" fontSize="24" fontWeight="700"
                textWrap="true" text="Welcome" />
        </FlexboxLayout>
        <StackLayout marginRight="32" marginLeft="32" class="home-panel">
            <!--Add your page content here-->
            <Label horizontalAlignment="left" fontSize="24" fontWeight="700"
                textWrap="true" text="Welcome" />
            <Label horizontalAlignment="center" fontSize="32"
                fontWeight="900 " textWrap="true" text="To your new" />
            <Label horizontalAlignment="right" fontSize="24" fontWeight="800"
                textWrap="true" text="Training Regimen" marginBottom="24" />

            <Image
                src="~/assets/images/con_pito.png" />
    </StackLayout>
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