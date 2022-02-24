<template>
    <Page  class="seccion-register-bg-invert" actionBarHidden="true">
       
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <StackLayout marginRight="24" marginLeft="24">

                <FlexboxLayout   
                  marginRight="12"
                 flexDirection="column"
                 alignItems="flex-end" 
                 justifyContent="center" >
                     <Label text="SKIP" fontSize="16" marginRight="4" fontWeight="300"
                    color="#949494" />
                <Image @tap="$navigator.navigate('/home')"
                src="~/assets/icons/icon_arrow_next.png" height="48" width="48" />
                </FlexboxLayout>

                <Label text="Let us help you"  horizontalAlignment="center" fontSize="24" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="4" />

                <Label textWrap="true" text="Choose the right program for you" fontSize="40" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="16" />
                
                <DropDown paddingLeft="24" paddingRight="24" color="#949494" marginBottom="4"
                 marginLeft="14" marginRight="16"  
                borderRadius="10" selectedIndex="0" :items="  items_selectPicker_gender"
                 backgroundColor="white" height="36"  />

                 <TextField  color="#949494" marginBottom="6"
                 marginLeft="14" marginRight="16" hint="Date of birth"
                 borderRadius="10" backgroundColor="white" height="36"  />

                <DropDown paddingLeft="24" paddingRight="24" color="#949494" marginBottom="4"
                 marginLeft="14" marginRight="16" 
                 borderRadius="10" selectedIndex="0" :items="items_selectPicker_experience"
                  backgroundColor="white" height="36"  />
                
                    <Label marginLeft="16" marginTop="8" color="#949494" text="What’s your main reason for joining?" fontSize="16" 
                    textAlignment="left"  />

                <DropDown paddingLeft="24" paddingRight="24" color="#949494" marginBottom="4"
    b             marginLeft="14" marginRight="16" 
                borderRadius="10" selectedIndex="0" :items="items_selectPicker_reason"
                 backgroundColor="white" height="36"  />

                <DropDown paddingLeft="24" paddingRight="24" color="#949494" marginBottom="4"
                 marginLeft="14" marginRight="16" 
                 borderRadius="10" selectedIndex="0" :items="items_selectPicker_where_exercise"
                  backgroundColor="white" height="36"  />

                   <Label  marginLeft="16" marginTop="8" color="#949494" text="How often do you want to work out?" fontSize="16" 
                    textAlignment="left" />
                <DropDown paddingLeft="24" paddingRight="24" color="#949494" marginBottom="4"
                 marginLeft="14" marginRight="16" 
                 borderRadius="10" selectedIndex="0" :items="items_selectPicker_concurrence"
                  backgroundColor="white" height="36"  />


                <Button borderRadius="16" marginTop="16" fontSize="16"
                    text="Save" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="white"
                    marginBottom="32" @tap="$navigator.navigate('/home')"/>


            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>

  export default {
      data(){
          return {
             
              items_selectPicker_gender:[
                  "Gender",
                  "Male",
                  "Felame",
                  "Undetermined",
              ],
              items_selectPicker_experience:[
                  "How experienced are you?",
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_reason:[
                  "Select one", 
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_where_exercise:[
                  "Where do you exercise",
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_concurrence:[
                  "Select one",
                  "1",
                  "2",
                  "3",
              ],
              
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
