<template>
  <Page 
    id="viewvideo"
    ref="viewvideo"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:VideoPlayer="nativescript-videoplayer" 
    background="#242522" 
    actionBarHidden="true" >

    <AbsoluteLayout height="100%" width="100%">

      
      <WebView 
        :top="medidas.top"
        :left="medidas.left"
        :height="medidas.height" 
        background="#242522"
        :width="medidas.width" 
        :src="vid" 
       
      />
          



        <StackLayout 
          top="32"
          left="0" 
          width="100%"
          paddingRight="16"
        >

          <image
            width="35"
            height="35"
            src="res://icontimes"
            stretch="aspectFill"
            horizontalAlignment="right"
            @tap="closeModal"
          />
          
        </StackLayout>
      

    </AbsoluteLayout>


  </Page>
</template>

<script>
import { baseUrl } from "~/resource/http";

export default {
  props:['video'],
  data() {
    return {
    };
  },
  watch:{
    vid(to){
      this.$forceUpdate()
    }
  },
  computed:{
    vid(){
      return baseUrl+'/storage/'+this.video
    },
    medidas(){
      if(global.isIOS){
        return {
          top: 100,
          left: 0,
          height: 300,
          width: '100%',
        }
      }
      return {
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }
    }
  },
  methods:{
    closeModal(){
      this.$modal.close()
    }
  }
};
</script>

<style scoped>
  .modalPage{
    background: rgba(0,0,0,.4);
  }
</style>
