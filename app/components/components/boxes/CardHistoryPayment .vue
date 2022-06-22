
<template>
  <StackLayout padding="12" borderRadius="12" marginTop="16" backgroundColor="white" class="box-shadow " marginLeft="24" marginRight="24">
  
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
            :text="` $${data.mount}`"
            horizontalAlignment="center"
            />
          
            </StackLayout>

             <FlexboxLayout width="50%">
               
                 <Image src="~/assets/icons/btn_icon_plus.png" height="40" />
                 
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