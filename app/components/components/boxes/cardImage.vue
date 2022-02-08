<template>                
<AbsoluteLayout 
  marginLeft="16"
>
  <image
    :width="data.width"
    :height="data.height"
    :src="data.img" 
    stretch="aspectFill"
    borderRadius="20"
  ></image>
  <FlexboxLayout
    top="0"
    left="0"
    :width="data.width"
    :height="data.height"
    alignItems="flex-end"
    justifyContent="center"
  >
    <Label 
      color="white" 
      fontSize="32" 
      fontWeight="900" 
      horizontalAlignment="center" 
      :text="data.text"/>
  </FlexboxLayout>
</AbsoluteLayout>
                   
                        
                    
</template>
<script>
    export default {
        props:{
            data:{
                type: Object,
                default: {}
            }
        },
        data() {
            return {
              
            };
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