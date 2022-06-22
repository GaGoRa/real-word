<template>
    <Page actionBarHidden="true" class="page-login">

        <GridLayout columns="*" rows="*,auto">
            <FlexboxLayout flexDirection="column" justifyContent="flex-end"
                row="0" col="0" alignItems="center">
                <StackLayout>
                    <Label color="white" class="label" fontSize="24" horizontalAlignment="left"
                        text="Get In" />
                    <Label  color="white" horizontalAlignment="center" fontSize="32" fontWeight="900"
                        verticalAlignment="bottom" class="tittle"
                        text="WARRIOR SHAPE"/>
                    <Label  color="white" horizontalAlignment="center" fontSize="24" marginBottom="32"
                        verticalAlignment="bottom" class="label"
                        text="over the next 30 days" />
                    <!--  <Image
                    src="https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-2/48/143-512.png"
                    width="56" /> -->
                </StackLayout>
            </FlexboxLayout>
            <StackLayout row="1" col="0" marginBottom="24" marginTop="32">
                <Button borderRadius="82" fontSize="16" text="Register"
                    backgroundColor="white" width="200" height="40"
                    fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                <Button borderRadius="82" fontSize="16" height="40"
                    fontWeight="900" marginTop="16" text="Login"
                    backgroundColor="red" width="200" color="white" @tap="$navigator.navigate('/login-aplication')" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
        myFuncion(){
            this.$navigator.navigate('/home')
        }
    }
  };


</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
