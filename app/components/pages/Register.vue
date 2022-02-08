<template>
    <Page  class="seccion-register-bg-invert" actionBarHidden="true">
       
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">

                <Label text="Register" fontSize="24" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="16" />

                <Button height="40" borderRadius="16" backgroundColor="blue"
                    color="white">
                    <FormattedString>
                        <span>
                            <Image src="~/assets/icons/icon_facebook.png" height="24" />
                            </span>

                        <span text="Login in with Facebook" color="white" />

                    </FormattedString>
                </Button>
                

                <Button borderRadius="16" height="40" backgroundColor="white"
                    color="white" marginBottom="16">
                    <FormattedString>
                        <span text="(ICON)" />
                        <span text="Sign in with Google" color="black" />

                    </FormattedString>
                </Button>

                <Label text="or" fontSize="24" fontWeight="900"
                    textAlignment="center" color="white" marginBottom="16" />

                <TextField height="32" v-model="textFieldValue"
                    hint="First Name" backgroundColor="white"
                    borderRadius="6" />
                <TextField height="32" v-model="textFieldValue"
                    hint="Last Name" backgroundColor="white" borderRadius="6"
                    marginBottom="16" />
                <TextField height="32" v-model="textFieldValue" hint="Email"
                    backgroundColor="white" borderRadius="6" />

               <DropDown paddingLeft="24" paddingRight="24" hint="Country" borderRadius="6" selectedIndex="0" :items="items_selectPicker" backgroundColor="white" height="32"  />

                <TextField height="32" v-model="textFieldValue" hint="Phone #"
                    s="" backgroundColor="white" borderRadius="6"
                    marginBottom="16" />

                <Button borderRadius="16" marginTop="" fontSize="16"
                    text="Register" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="white"
                    marginBottom="32" @tap="$navigator.navigate('/verification-code')"/>

                <FlexboxLayout justifyContent="center">
                    <Label text="Already Register?" color="black"
                        marginRight="8" />
                    <Label text="Login" textDecoration="underline"
                        fontWeight="900" color="black" @tap="$navigator.navigate('/login')" />
                </FlexboxLayout>

            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>

  export default {
      data(){
          return {
              items_selectPicker:[
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
