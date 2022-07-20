<template>
  <AbsoluteLayout
      @tap=" data.url ? $navigator.navigate(data.url,{props:data.props}) : '' "
   >
    <ImageCacheIt
      :class="data.class || ''"
      :width="data.width"
      :height="data.height"
      :src="data.img"
      :stretch="aspect"
      borderRadius="20"
      horizontalAlignment="center"
    ></ImageCacheIt>
    <FlexboxLayout
      top="0"
      left="0"
      :width="data.width"
      :height="data.height"
      alignItems="flex-end"
      justifyContent="center"
    >
      <Label
        :color="data.colorText"
        fontSize="26"
        fontWeight="900"
        horizontalAlignment="center"
        :text="data.text"
        marginBottom="16"
        marginLeft="8"
        textWrap="true"
      />
    </FlexboxLayout>
  </AbsoluteLayout>
</template>
<script>
// import {GetImageCache} from "../../../resource/helper"
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      url:"",
    };
  },
  computed:{
    aspect(){
      if(global.isIOS){
        return 'aspectFill'
      }
      return 'none'
    }
  },
  mounted(){
    //  const response = GetImageCache()
    //  console.log(response, "response");
  },
  methods:{}
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