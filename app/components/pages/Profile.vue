<template>
  <Page class="page-home">
    <ActionBar
      marginTop="16"
      title=""
      backgroundColor="transparent"
      flat="true"
    >
      <FlexboxLayout
        marginTop="32"
        class="bg-label"
        justifyContent="flex-start"
      >
        <StackLayout marginRight="64">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
        </StackLayout>
        <StackLayout
          width="100%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="12"
        >
          <Label
            textAlignment="center"
            text="Profile"
            fontSize="24"
            color="white"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

    
    <StackLayout marginRight="24" marginTop="32" marginLeft="24">
        <Label  v-if="!!errorsMessage.errorMessage" :text="errorsMessage.errorMessage" fontSize="16" fontWeight="400"
                  textAlignment="left" color="red" marginLeft="32" marginTop="0" marginBottom="0" /> 

      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        v-model="textValue.firstName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="First Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.middleName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Middle Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.lastName"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Last Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.dateBirth"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Date of birth"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.gender"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Gender"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="Contact Information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        v-model="textValue.phone"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Phone #"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.email"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Email"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        v-model="textValue.address"
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Address"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />

      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="Fitness information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />

      <Button
        borderRadius="16"
        marginTop="32"
        fontSize="16"
        text="Save"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="white"
        marginBottom="32"
        @tap="proccessUpdateProfile"
      />
    </StackLayout>
  </Page>
</template>

<script>
import { mapMutations } from "vuex";
import { apiGet, apiPost } from '~/resource/http';
import cache from '~/store/cache/cache.android';

export default {
  data() {
    return {
      textValue:{
        firstName:'',
        middleName:'',
        lastName:'',
        dateBirth:'',
        gender:[{}],
        phone:'',
        email:'',
        adress:'',
      },
      errorsMessage:{
        errorMessage:""
      }
    };
  },
  created(){

    this.getDataUser()

     apiGet("/gender")
     .then( () =>this.onSuccessGender)
     .catch(this.onError)

  },
  methods:{
     ...mapMutations(["toggleSwitchMenu"]),
    onSuccessGender(res){
      this.gender = res[0]
    },
    onError(err){
      this.errorsMessage.errorMessage = "A ocurrido un error"
    },
    proccessUpdateProfile(){

      const dataCache = JSON.parse(cache.get("userProfile"))
      const body ={
            "user_id":dataCache.user.id,
            "name":this.textValue.firstName,
            "email":this.textValue.email,
            "middle_name":this.textValue.middleName,
            "last_name":this.textValue.lastName,
            "address":this.textValue.address,
            "gender_id":"2",
            "date_of_birth":"1983-01-07",
            "telephone":this.textValue.phone,
        }
        apiPost(body,"/update_user")
        .then(this.onSuccessUpdate)
        .catch(this.onError)
    },
    getDataUser(){
      const dataUser = JSON.parse(cache.get('userProfile')).user

      this.textValue = {
        firstName:dataUser.name,
        middleName:dataUser.middle_name,
        lastName:dataUser.last_name,
        dateBirth:dataUser.date_of_birth,
        gender:dataUser.gender,
        phone:dataUser.telephone,
        email:dataUser.email,
        adress:dataUser.address
      }
    },
    onSuccessUpdate(res){
      cache.set('userProfile',JSON.stringify(res.data))
      this.toggleSwitchMenu(false)
      this.$navigator.navigate('/home')
    }
  },

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