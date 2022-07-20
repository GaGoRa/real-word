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
        <StackLayout marginRight="64" @tap="onBack">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            
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
            text="Address"
            fontSize="24"
            color="#FFFFFF"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

   
    <StackLayout marginRight="24" marginTop="32" marginLeft="24">
      
      <TextField
        
        marginLeft="14"
        marginRight="16"
        v-model="address"
        hint="Address"
        backgroundColor="#FFFFFF"
         class="form_input" 
      /> 
        <Label  
                  v-if="!!errorsMessages.address" :text="errorsMessages.address" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                />

      <TextField
        class="form_input" 
        marginLeft="14"
        marginRight="16"
        v-model="city"
        hint="City"
        backgroundColor="#FFFFFF"
      />
 <Label  
                  v-if="!!errorsMessages.city" :text="errorsMessages.city" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                />
      <TextField
        v-model="getTextState"
        class="form_input" 
        marginLeft="14"
        marginRight="16"
        :hint="state"
        @tap="onTapState"
        backgroundColor="#FFFFFF"
        editable="false"
      />
      <Label  
                  v-if="!!errorsMessages.state" :text="errorsMessages.state" 
                  fontSize="16" 
                  fontWeight="400"
                  textAlignment="left" 
                  color="red" 
                  marginLeft="32" 
                  marginTop="0" 
                  marginBottom="0" 
                />
     
      <TextField
        
        marginLeft="14"
        marginRight="16"
        v-model="postal_code"
        hint="Zip code"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        class="form_input" 
         keyboardType="number"
      />
         <Label  
          v-if="!!errorsMessages.postal_code" :text="errorsMessages.postal_code" 
          fontSize="16" 
          fontWeight="400"
          textAlignment="left" 
          color="red" 
          marginLeft="32" 
          marginTop="0" 
          marginBottom="0" 
        />

      <StackLayout v-if="loading" marginTop="16" marginBottom="16"  marginRight="16" >
         
                <ActivityIndicator :busy="loading"  />
                </StackLayout>


      <Button
        borderRadius="16"
        marginTop="32"
        fontSize="16"
        text="Save"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="#FFFFFF"
        marginBottom="32"
        @tap="onSave"
      />

    </StackLayout>
  </Page>
</template>

<script>
import { apiPost,apiGet} from '~/resource/http';
import { ApplicationSettings } from '@nativescript/core';
import { hideKeyboard} from '../../resource/helper'
export default {
  props:{
    package:{
      type: Object,
      default:{
        id: 0, 
        name: ''
      }
    },
    price:{
      type: Object,
      default:{
        id: 1, 
        recurrence:{description:''}
      }
    }
  },
  components:{
    
  },
  data() {
    return {
      address:'',
      state_id:'',
      city:'',
      postal_code:'',
      states: [],
      state: 'Staste',
      loading: false,
      errorsMessages:{
        address:'',
        city:'',
        state:'',
        postal_code:'',
        }
    };
  },
  async mounted(){
    const response = await apiGet('/get_state')
    this.states = response.data
  },
  methods:{
    onBack(){
       this.$navigator.back()
      // setTimeout(()=>{
      //   this.$modal.close()
      // },500)
    },
    async onSave(){
      hideKeyboard()
     this.errorsMessages={
        address:'',
        city:'',
        state:'',
        postal_code:'',
        }
      this.loading = true
      let data = {
        address: this.address,
        state_id: this.state_id,
        city: this.city,
        postal_code: this.postal_code,
      }
      try {
        const response = await apiPost(data,'/update_address')
  
          let c = JSON.parse( ApplicationSettings.getString('userProfile',"{}"))
          c.user = response.data
           this.loading = false
          ApplicationSettings.setString("userProfile",JSON.stringify(c))
           
          this.$navigator.navigate('/pay-subscription',{ 
              props: { 
                package: this.package,
                price: this.price
              },
            })
        
      } catch (err) {
        this.loading = false
        hideKeyboard()
        const error = JSON.parse(err.content)  
        if(!!error.address){
          this.errorsMessages.address = error.address[0]
        }
        if(!!error.city){
          this.errorsMessages.city = error.city[0]
        }
        if(!!error.postal_code){
          this.errorsMessages.postal_code = error.postal_code[0]
        }
        if(!!error.state_id){
          this.errorsMessages.state_id = error.state_id[0]
        }
        
      }
    },
    async onTapState(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.states, 
                          key: 'name',
                          value: this.state_id
                        } })

      this.state_id = data.id
      this.state = data.name

    }
  },

  computed:{
    getTextState(){
      if(this.state_id){
        return this.state
        }else{
          return ''
        }
    },

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