<template>
         <!-- <Page actionBarHidden="true">
        <AbsoluteLayout>
                    <Carousel zIndex="1"  backgroundColor="black" height="100%" width="100%" 
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
                            </CarouselItem>
                           <CarouselItem
                            class="page-login"
                             id=""
                            backgroundColor="#b3cde0"
                            verticalAlignment="middle">

                            </CarouselItem>
                            <CarouselItem
                            class="page-login"
                             id=""
                            backgroundColor="#b3cde0"
                            verticalAlignment="middle">  

                            </CarouselItem>
                            
                    </Carousel>
                <GridLayout   width="100%" height="100%"  zIndex="2" columns="*" rows="*,auto">      
                                     <StackLayout col="0" row="0">
                                        </StackLayout>
                                <StackLayout  row="1" col="0" marginBottom="24" marginTop="24">
                                            <Label  marginLeft="40" color="#FFFFFF" class="label" fontSize="24" horizontalAlignment="left"
                                                text="Get In" />
                                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                                verticalAlignment="bottom" class="tittle"
                                                text="WARRIOR SHAPE"/>
                                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                                verticalAlignment="bottom" class="label"
                                                text="over the next 30 days" />
                                    <Button borderRadius="82" fontSize="20" text="Register"
                                        backgroundColor="#FFFFFF" width="208" height="48"
                                        fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                                    <Button borderRadius="82" fontSize="20" height="48"
                                        fontWeight="900" marginTop="16" text="Login"
                                        backgroundColor="red" width="208" color="#FFFFFF" @tap="$navigator.navigate('/login-aplication')" />
                                </StackLayout>
                              </GridLayout>


    </AbsoluteLayout>
                    
                   
      
    </Page> -->

    <Page actionBarHidden="true" class="page-login">
        <GridLayout columns="*" rows="*,auto">
            
            <!-- <FlexboxLayout backgroundColor="green"
            flexDirection="column" justifyContent="flex-end"
                row="0" col="0" alignItems="center"> -->
                     <Carousel 
                        pageChanged="myChangeEvent"
                        pageTapped="mySelectedEvent" 
                        indicatorColor="black" 
                        finite="true" 
                        bounce="false"
                        showIndicator="true"
                        verticalAlignment="buttom"
                        android:indicatorAnimation="swap" 
                        color="white"
                        row="0" col="0"
                        marginBottom="10" 

                        >

                        <CarouselItem
                            verticalAlignment="middle"
                           
                            >
                            <FlexboxLayout height="100%"  
                                flexDirection="column"
                                 alignItems="center" 
                                  justifyContent="flex-end">

                            <Label color="#FFFFFF" marginLeft="40" class="label" fontSize="24" horizontalAlignment="left"
                                text="Get In" />
                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                verticalAlignment="bottom" class="tittle"
                                text="WARRIOR SHAPE"/>
                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                verticalAlignment="bottom" class="label"
                                text="over the next 30 days" />
                            </FlexboxLayout>
                            </CarouselItem>
                           <CarouselItem
                            verticalAlignment="middle"
                            marginBottom="8" 
                            >
                            <FlexboxLayout height="100%"  
                                flexDirection="column"
                                 alignItems="center" 
                                  justifyContent="flex-end">

                            <Label color="#FFFFFF" marginLeft="40" class="label" fontSize="24" horizontalAlignment="left"
                                text="Get In" />
                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="32" fontWeight="900"
                                verticalAlignment="bottom" class="tittle"
                                text="WARRIOR SHAPE"/>
                            <Label  color="#FFFFFF" horizontalAlignment="center" fontSize="24" marginBottom="32"
                                verticalAlignment="bottom" class="label"
                                text="over the next 30 days" />
                            </FlexboxLayout>
                            </CarouselItem>
                    </Carousel>
            <!-- </FlexboxLayout> -->
            <StackLayout row="1" col="0" marginBottom="24" marginTop="32">
                <Button borderRadius="82" fontSize="16" text="Register"
                    backgroundColor="#FFFFFF" width="200" height="40"
                    fontWeight="900" color="red" @tap="$navigator.navigate('/register')" />
                <Button borderRadius="82" fontSize="16" height="40"
                    fontWeight="900" marginTop="16" text="Login"
                    backgroundColor="red" width="200" color="#FFFFFF" @tap="$navigator.navigate('/login-aplication')" />
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
