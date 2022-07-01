
<template>
  <StackLayout padding="12" borderRadius="12" marginTop="16" 
  :backgroundColor="data.color" 
  :class=" !!data.class ? `box-shadow ${data.class}` : 'box-shadow'"
   marginLeft="24" marginRight="24"
   :width=" data.width ? data.width: '336' "
   height="87"
   @tap=" !!data.props ? getFile(data.props.url)  : null "
   >
  <!-- $navigator.navigate('/pdf-view',{props:{data:data.props}}) -->
    <FlexboxLayout
      flexDirection="column"
    >
      <StackLayout
      left="0"
      bottom="0"
      marginBottom="0"
       >
        <FlexboxLayout
        justifyContent="space-between"
          >
            <Label
            color="#8E8B8B"
            fontSize="18"
            fontWeight="900"
            :text="data.subscription"
            /> 
               <Label
                color="#8E8B8B"
                fontSize="12"
                fontWeight="900"
                :text="data.date"
              />  
        </FlexboxLayout>
        </StackLayout>
        <StackLayout marginTop="0" paddingTop="0" orientation="horizontal" > 
        

          <StackLayout   width="50%" horizontalAlignment="center">
          
            <Label
            color="#8E8B8B"
            fontSize="24"
            fontWeight="900"
            :text="!!data.mount ? ` ${data.mount}` : '' "
            horizontalAlignment="center"
            />
          
            </StackLayout>

             <FlexboxLayout width="50%">
               
                 <Image v-if="!!data.typeCard" :src=" data.typeCard === 'VISA' ? '~/assets/icons/Icon awesome-cc-visa.png' : ''"  height="24" marginRight="4" />
                 
                 <Label
                color="#8E8B8B"
                fontSize="14"
                marginRight="32"
                marginLeft="14"
                paddingTop="4"
                fontWeight="500"
                :text="data.card"
              />  
              </FlexboxLayout>
        </StackLayout>

    </FlexboxLayout>
     

       

  </StackLayout>
</template>
<script>
import {getFileResource} from '../../../resource/http'

export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    errorsMessage:{
      errorMessage:''
    }
  },
  data() {
    return {};
  },
  methods: {
    
    getFile(url){
      getFileResource(url)
      .then(this.onSuccess)
      .catch(this.onError)
    },
    onSuccess(res){
      console.log("File Open")
    },
      onError(err){
      console.log('Hava a error ',err);
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