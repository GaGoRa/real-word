<template>
  <StackLayout
      marginTop="16"
      marginBottom="16" 
      backgroundColor="transparent"
    >
      <FlexboxLayout
        :marginTop="getMarginOS"
        class="bg-label"
        justifyContent="flex-start"
      >
        <StackLayout marginLeft="32" marginRight="40">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="tapBack"
          />
        </StackLayout>
        <StackLayout
          width="75%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="12"
        >
          <Label
            textAlignment="center"
            :text="data.title"
            fontSize="24"
            color="#FFFFFF"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
</template>
<script>

import {hideKeyboard} from '../../resource/helper'

export default {
  props:{
    data:{
      type:Object,
      default:{}
    },
  },
  computed:{
    getMarginOS(){
      return global.isIOS ? '0' : '32' 
  }
  },
  data() {
    return {
      
    };
  },
  methods: {

      tapBack(){
        hideKeyboard()
        if(this.data.optionsNavigate){
          this.$navigator.navigate(this.data.optionsNavigate.url)
        }else{
          this.$navigator.back()

        }
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