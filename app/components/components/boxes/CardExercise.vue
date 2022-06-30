<template>
  <AbsoluteLayout marginLeft="16" marginTop="8">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      completed:true
      :backgroundColor="data.completed ? '#838383' : '#EAB813' "
      borderRadius="16"
      padding="16"
      class="box-shadow"
      @tap="data.url 
        ? $navigator.navigate(data.url, {props:data.props}) 
       : alertDialog(alertDialogState.alertMessage)"
    >
      <FlexboxLayout justifyContent="space-between">
        <Label
          color="white"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="`Day ${data.day}`"
        />
        <Label
          color="white"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="data.body"
        />
      </FlexboxLayout>

        <HtmlView color="white" fontSize="24" marginLeft="16" :html="data.text" />

      <!-- <Label
        color="white"
        fontSize="14"
        horizontalAlignment="left"
        textWrap="true"
        :text="data.text"
      /> -->
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
  },
  data() {
    return {
      alertDialogState:{
          alertMessage:"Please press the 'start' button, to start the program.",
      }
    };
  },
  methods:{
    alertDialog(text){
            Dialogs.alert({
              message: text,
              okButtonText: 'OK',
              theme:5
      }).then(()=>{
  
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