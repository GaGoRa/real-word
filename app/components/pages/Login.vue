<template>
    <Page actionBarHidden="true">
                    <Carousel backgroundColor="black" height="100%" width="100%" 
                     class="page-login"
                        pageChanged="myChangeEvent"
                        pageTapped="mySelectedEvent" 
                        indicatorColor="#fff000" 
                        finite="true" 
                        bounce="false"
                        showIndicator="false"
                        verticalAlignment="buttom"
                        android:indicatorAnimation="swap" 
                        color="white"
                        row="0" col="0"
                        >
                            <CarouselItem
                            class="page-login"
                             id=""
                            backgroundColor="#b3cde0"
                            verticalAlignment="middle">
                              <GridLayout columns="*" rows="*,auto">
                                  <FlexboxLayout alignItems="flex-end" justifyContent="center" row="0" col="0">
                                    <StackLayout  >
                                <Label  marginLeft="24" color="#FFFFFF" class="label" fontSize="24" horizontalAlignment="left"
                                    text="Get In" />
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                    verticalAlignment="bottom" class="tittle"
                                    text="WARRIOR SHAPE"/>
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                    verticalAlignment="bottom" class="label"
                                    text="over the next 30 days" />
                                </StackLayout>
                                </FlexboxLayout>
                                <StackLayout  row="1" col="0" marginBottom="24" marginTop="32">
                                    <Button borderRadius="82" fontSize="16" text="Register"
                                        backgroundColor="#FFFFFF" width="200" height="40"
                                        fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                                    <Button borderRadius="82" fontSize="16" height="40"
                                        fontWeight="900" marginTop="16" text="Login"
                                        backgroundColor="red" width="200" color="#FFFFFF" @tap="$navigator.navigate('/login-aplication')" />
                                </StackLayout>
                              </GridLayout>

                            </CarouselItem>
                           <CarouselItem
                            class="page-login"
                             id=""
                            backgroundColor="#b3cde0"
                            verticalAlignment="middle">
                              <GridLayout columns="*" rows="*,auto">
                                  <FlexboxLayout alignItems="flex-end" justifyContent="center" row="0" col="0">
                                    <StackLayout  >
                                <Label  marginLeft="24" color="#FFFFFF" class="label" fontSize="24" horizontalAlignment="left"
                                    text="Get In" />
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                    verticalAlignment="bottom" class="tittle"
                                    text="WARRIOR SHAPE"/>
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                    verticalAlignment="bottom" class="label"
                                    text="over the next 30 days" />
                                </StackLayout>
                                </FlexboxLayout>
                                <StackLayout  row="1" col="0" marginBottom="24" marginTop="32">
                                    <Button borderRadius="82" fontSize="16" text="Register"
                                        backgroundColor="#FFFFFF" width="200" height="40"
                                        fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                                    <Button borderRadius="82" fontSize="16" height="40"
                                        fontWeight="900" marginTop="16" text="Login"
                                        backgroundColor="red" width="200" color="#FFFFFF" @tap="$navigator.navigate('/login-aplication')" />
                                </StackLayout>
                              </GridLayout>

                            </CarouselItem>
                            <CarouselItem
                            class="page-login"
                             id=""
                            backgroundColor="#b3cde0"
                            verticalAlignment="middle">
                              <GridLayout columns="*" rows="*,auto">
                                  <FlexboxLayout alignItems="flex-end" justifyContent="center" row="0" col="0">
                                    <StackLayout  >
                                <Label  marginLeft="24" color="#FFFFFF" class="label" fontSize="24" horizontalAlignment="left"
                                    text="Get In" />
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                    verticalAlignment="bottom" class="tittle"
                                    text="WARRIOR SHAPE"/>
                                <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                    verticalAlignment="bottom" class="label"
                                    text="over the next 30 days" />
                                </StackLayout>
                                </FlexboxLayout>
                                <StackLayout  row="1" col="0" marginBottom="24" marginTop="32">
                                    <Button borderRadius="82" fontSize="16" text="Register"
                                        backgroundColor="#FFFFFF" width="200" height="40"
                                        fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                                    <Button borderRadius="82" fontSize="16" height="40"
                                        fontWeight="900" marginTop="16" text="Login"
                                        backgroundColor="red" width="200" color="#FFFFFF" @tap="$navigator.navigate('/login-aplication')" />
                                </StackLayout>
                              </GridLayout>

                            </CarouselItem>
              

           
             </Carousel>
      
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
