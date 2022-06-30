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
            color="white"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

    <!-- <StackLayout marginRight="24" backgroundColor="blue" marginLeft="24">
      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
    </StackLayout> -->
    <StackLayout marginRight="24" marginTop="32" marginLeft="24">
      <!-- <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      /> -->
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        v-model="address"
        hint="Address"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        :hint="state"
        @tap="onTapState"
        borderRadius="10"
        backgroundColor="white"
        editable="false"
        height="36"
      />

      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        v-model="city"
        hint="City"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        v-model="postal_code"
        hint="Postal Code"
        borderRadius="10"
        backgroundColor="white"
        height="36"
        keyboardType="number"
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
        
      />

    </StackLayout>
  </Page>
</template>

<script>
import { apiPost,apiGet} from '~/resource/http';

export default {
  components:{
    
  },
  data() {
    return {
      address:'',
      state_id: 0 ,
      city:'',
      postal_code:'',
      states: [],
      state: 'State'
    };
  },
  async mounted(){
    const response = await apiGet('/get_country')
    this.states = response.data

  },
  methods:{
    onBack(){
      // this.$navigator.back()
      // setTimeout(()=>{
      //   this.$modal.close()
      // },500)
    },
    async onTapState(){
      
      const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                        props:{ 
                          data: this.states, 
                          key: 'description',
                          value: this.state_id
                        } })

      this.state_id = data.id
      this.state = data.description

    }
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