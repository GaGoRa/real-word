<template>
    <Page  class="seccion-register-bg-invert" actionBarHidden="true">
        <!-- <MultiDrawer  v-model="drawerState">
                <StackLayout slot="bottom" >
                            <SelectDrawer @toggleSelectDrawerClose="close" @changeHint="changeHint" :data="items_selectPicker" />
                        </StackLayout> -->
                    
            <FlexboxLayout flexDirection="column" justifyContent="center">
                <StackLayout marginRight="24"  marginLeft="24">
                    
                    <Label text="Register" fontSize="24" fontWeight="900"
                        textAlignment="center" color="#949494" marginBottom="16" />

                    <!-- <StackLayout marginRight="12" orientation="horizontal"  marginLeft="12" borderRadius="12" height="40" backgroundColor="#2051D8"
                        color="white" marginBottom="16" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                                <Image src="~/assets/icons/icon_facebook.png" height="24" marginRight="16" />
                            <Label verticalAlignment="middle" horizontalAlignment="center" text="Login in with Facebook" marginTop="4" fontSize="14" color="white" />
                        </StackLayout>

                    <StackLayout marginRight="12" marginLeft="12" orientation="horizontal"  borderRadius="12" height="40" backgroundColor="white"
                        color="white" marginBottom="32" paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                            <Image src="~/assets/icons/icon_google.png" height="24" marginRight="16" />
                            <Label verticalAlignment="middle"  horizontalAlignment="center" text="Sign in with Google" marginTop="4" fontSize="14" color="black" />
                        </StackLayout>

                    <Label text="or" fontSize="24" fontWeight="900"
                        textAlignment="center" color="white" marginBottom="16" /> -->

                    <TextField height="38" v-model="textFieldValue.firstName"
                        hint="First Name" backgroundColor="white"
                        borderRadius="10" />
                        <Label  v-if="!!errorsMessages.ErrorFirstName" :text="errorsMessages.ErrorFirstName" fontSize="16" fontWeight="400"
                        textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" /> 

                    <TextField height="38" v-model="textFieldValue.lastName"
                        hint="Last Name" backgroundColor="white" borderRadius="10"
                        />
                        <Label  v-if="!!errorsMessages.ErrorLastName" :text="errorsMessages.ErrorLastName" fontSize="16" fontWeight="400"
                        textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />

                    <!-- <SelectInput :hint="hint" @toggleSelectDrawer="miFuncion" :drawerState="drawerState"/> -->
                    <DropDown paddingLeft="24" paddingRight="24" color="grey" marginBottom="4" marginLeft="14" marginRight="16" hint="Country" borderRadius="10" selectedIndex="0" :items="items_selectPicker" backgroundColor="white" height="36"  />

                    <TextField  tabTextFontSize="50" class="textbox" height="38"  v-model="textFieldValue.email" hint="Email"
                        backgroundColor="white" borderRadius="10" marginBottom="6"/>
                        <Label  v-if="!!errorsMessages.ErrorEmail" :text="errorsMessages.ErrorEmail" fontSize="16" fontWeight="400"
                        textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />


                    <TextField height="38" v-model="textFieldValue.phone" hint="Phone #"
                        backgroundColor="white" borderRadius="10"
                        marginBottom="16" />
                        <Label  v-if="!!errorsMessages.ErrorPhone" :text="errorsMessages.ErrorPhone" fontSize="16" fontWeight="400"
                        textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" />

                    <Button borderRadius="16" marginTop="" fontSize="16"
                        text="Register" backgroundColor="red" width="200"
                        height="40" fontWeight="900" color="white"
                        marginBottom="32" @tap="processCreateUser"/>

                        


                    <FlexboxLayout justifyContent="center">
                        <StackLayout>
                        <Label text="" backgroundColor="red" width="50"  marginTop="12" marginRight="8" verticalAlignment="bottom" height="3"/>
                        </StackLayout>
                        <Label text="Already Register?" color="black"
                            marginRight="8" />
                        <Label text="Login" textDecoration="underline"
                            fontWeight="900" color="black" @tap="$navigator.navigate('/login-aplication')" />
                        <StackLayout>
                    <Label text="" backgroundColor="red" width="50" verticalAlignment="bottom" marginLeft="8" marginTop="12" height="3"/>
                        </StackLayout>
                    </FlexboxLayout>

                </StackLayout>
            </FlexboxLayout>
            
         <!-- </MultiDrawer> -->
    </Page>
</template>

<script>
import { apiPost } from '~/resource/http';
import cache from '~/store/cache/cache.android'
import SelectInput from "~/components/components/menuDrawer/selectInput";
import SelectDrawer from "~/components/components/menuDrawer/selectDrawer";
    

  export default {
    components: {
        SelectInput,
        SelectDrawer
    //CustomTextField
  },
      data(){
          return {
            drawerState:false,
            hint:'Country',
              items_selectPicker:[
                    {description:"Australia",      id:1},
                    {description:"Belgium",      id:1},
                    {description:"Bulgaria",       id:1},
                    {description:"Canada",       id:1},
                    {description:"Switzerland",      id:1},
                    {description:"China",       id:1},
                    {description:"CzechRepublic",id:1},
                    {description:"Germany",       id:1},
                    {description:"Spain",     id:1},
                    {description:"Ethiopia",       id:1},
                    {description:"Croatia",       id:1},
                    {description:"Hungary",       id:1},
                    {description:"Italy",      id:1},
                    {description:"Jamaica",       id:1},
                    {description:"Romania",       id:1},
                    {description:"Russia",       id:1},
                    {description:"United State",       id:1}
              ]
              ,textFieldValue:{
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                country:'1'
              },
              errorsMessages:{
                ErrorFirstName:'',
                ErrorLastName:'',
                ErrorEmail:'',
                ErrorPhone:'',
                ErrorCountry:''
              },
          }

      },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
        changeHint(hintName){
            this.hint = hintName
        },
        miFuncion(event){
            console.log("ebente",event);
            this.drawerState = event
        },
        close(event){

             console.log("pepe",event);
            this.drawerState = event
        },
        processCreateUser(){       
             const body = 
                                    
              {
    "name": "Asd",
    "middle_name": "Asd",
    "last_name": "Asd",
    "gender_id": "1",
    "date_of_birth": "1983-01-07",
    "email": "As11aa1aaa1a2211aasda123d@gmail",
    "password": "N/A",
    "address": "N/A",
    "telephone": "Asd",
    "country_id": "1"
        }
            //  const body = 
                                    
            //         {
            //     "name":this.textFieldValue.firstName,
            //     "middle_name":this.textFieldValue.firstName,
            //     "last_name":this.textFieldValue.lastName,
            //     "gender_id":"1",
            //     "date_of_birth":"1983-01-07",
            //     "email":this.textFieldValue.email,
            //     "password":"N/A",
            //     "address":"N/A",
            //     "telephone":this.textFieldValue.phone,
            //     "country_id":'1' }
            
           apiPost(body,'/register')
            .then(this.onSuccess)
            .catch(this.onError)
    
        },
        onSuccess(response){
             if(response.message === "User Registered"){
                //savee token and id and email
                const token = response.data.token
                cache.set("userProfile",JSON.stringify(response.data))
                this.$navigator.navigate('/verification-code')

             }
            //navigate('/home')
        },
        onError(error){
        this.errorsMessages.ErrorEmail =
        (
        error.statusCode === 422 
        //&& 
        //error.content === "User already exists"
        )
        ?  JSON.parse(error.content).message
        : ''
                             
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
