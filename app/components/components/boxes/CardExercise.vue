<template>
  <AbsoluteLayout marginLeft="16" marginTop="8">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      :backgroundColor="data.completed ? '#EAB813' : '#838383'  "
      borderRadius="16"
      padding="16"
      class="box-shadow"
      @tap="data.url 
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

        <HtmlView color="#FFFFFF" fontSize="24" marginLeft="16" :html="data.text" />

    
    </StackLayout>
  </AbsoluteLayout>
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
    }
  },
  data() {
    return {
      alertDialogState:{
          alertMessage:"Please press the 'start' button, to start the program.",
      }
    };
  },
  mounted(){
    // console.log('Card this.data',this.data)
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