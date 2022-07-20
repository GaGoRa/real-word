<template>
  <StackLayout 
    paddingLeft="16" 
    paddingRight="16"
    paddingBottom="16" 
  >

    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      :backgroundColor="colorCard"
      borderRadius="16"
      padding="16"
      class="box-shadow"
      @tap="programButtom
        ? $navigator.navigate(data.url, { props: { data:data, status_program_id: status_program_id} }) 
       : alertDialog()"
    >
      <FlexboxLayout justifyContent="space-between">
        <Label
          color="#FFFFFF"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="`${data.day}`"
        />
        <Label
          color="#FFFFFF"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="data.body"
        />
      </FlexboxLayout>

        <Label 
          textWrap
          backgroundColor="transparent" 
          color="#FFFFFF" 
          fontSize="12" 
          marginLeft="16" 
          :text="data.text" />

    
    </StackLayout>

  </StackLayout>
</template>
<script>
import { Dialogs } from '@nativescript/core'
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    status_program_id:{
      type: Number
    },
    programButtom:{}
  },
  data() {
    return {
      alertDialogState:{
          alertMessage:"Please press the 'start' button, to start the program.",
      }
    };
  },
  computed:{
    colorCard(){
      if(this.programButtom){
        if(this.data.completed){
          return '#EAB813'
        }else{
          return '#00ACC1'
        }
      }
      return '#B9B9B9'
    }
  },
  mounted(){
  },
  methods:{
    alertDialog(){
            Dialogs.alert({
              message: this.alertDialogState.alertMessage,
              okButtonText: 'OK',
              theme:5
      }).then(()=>{
          console.log("Please press the 'start' button, to start the program.");
      });

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