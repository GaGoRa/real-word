<template>
    <StackLayout
      :class="`box-shadow-bottom ${data.class}` || 'box-shadow-bottom'"
      :backgroundColor="data.color"
      borderRadius="20"
      @tap=" data.url ?  data.url : ''
      "
      width="250"
      height="auto"
      padding="8"
    >
   
      <Label
        :color="data.colorText"
        fontSize="18"
        fontWeight="900"
        marginLeft="8"
        horizontalAlignment="left"
        :text="data.title"
        marginBottom="8"
      />
      
  <HtmlView backgroundColor="transparent"  color="black"  marginLeft="8"  marginBottom="4" :html="data.text" />

  
   <image alignSelf="center" v-if="data.img"
      width="160"
      height="120"
      :src="data.img" stretch="aspectFill"
      borderRadius="20"
      marginBottom="16"
      />
    
     
    </StackLayout>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
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