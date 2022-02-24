<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <GridLayout columns="*" rows="*,auto">
            <StackLayout  col="0" row="0">
            </StackLayout>

        <FlexboxLayout col="0" row="1" flexDirection="column" marginLeft="16" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">
           
               

                 <StackLayout marginRight="12" orientation="horizontal"  marginLeft="12" borderRadius="12" height="40" backgroundColor="#2051D8"
                    color="white" marginBottom="16" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                            <Image src="~/assets/icons/icon_facebook.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle"  horizontalAlignment="center" text="Login in with Facebook" marginTop="4" fontSize="14" color="white" />
                    </StackLayout>

                      <StackLayout marginRight="12" marginLeft="12" orientation="horizontal"  borderRadius="12" height="40" backgroundColor="white"
                    color="white" marginBottom="32" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                        <Image src="~/assets/icons/icon_google.png" height="24" marginRight="16" />
                        <Label verticalAlignment="middle" horizontalAlignment="center"  text="Sign in with Google" marginTop="4" fontSize="14" color="black" />
                    </StackLayout>
                     
                <TextField height="38" v-model="textFieldValue"
                    hint="Email /User" backgroundColor="white" borderRadius="10"/>
                <TextField  tabTextFontSize="50" class="textbox" height="38"  v-model="textFieldValue" hint="Password"
                    backgroundColor="white" borderRadius="10" marginBottom="6"  secure="true" />
                <Label text="Forgot password?" @tap="$navigator.navigate('/reset-password')" marginLeft="16" marginTop="8"  fontWeight="700" color="black" marginBottom="8"/>
                
                <Button borderRadius="16" marginTop="" fontSize="16"
                    text="Login" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="white"
                    marginBottom="32" @tap="$navigator.navigate('/home')"/>              
            </StackLayout>
        </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>

  export default {
      data(){
          return {
              items_selectPicker:[
                  "country",
                  "Australia",
                    "Belgium",
                    "Bulgaria",
                    "Canada",
                    "Switzerland",
                    "China",
                    "Czech Republic",
                    "Germany",
                    "Spain",
                    "Ethiopia",
                    "Croatia",
                    "Hungary",
                    "Italy",
                    "Jamaica",
                    "Romania",
                    "Russia",
                    "United States"
              ]
          }

      },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
        myFuncion(){
            console.log('LLgue')
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
