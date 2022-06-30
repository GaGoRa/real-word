<template>
  <AbsoluteLayout  @tap="redirect" marginLeft="16" marginTop="8">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      :backgroundColor="data.color ? '#EAB813' : '#838383'"
      borderRadius="16"
      padding="12"
     
      class="box-shadow"
    >
      <FlexboxLayout justifyContent="space-between">
        <Label
          color="white"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="data.tittle"
        />
        <Label
          color="white"
          fontSize="20"
          fontWeight="900"
          textWrap="true"
          :text="data.mount"
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

import cache from "~/store/cache/cache.android";
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
  methods:{
    redirect(){
      const user = JSON.parse(cache.get("userProfile")) 
      console.log(user)
      if(
        !user.address ||
        !user.email ||
        !user.state_id ||
        !user.city ||
        !user.postal_code
      ){
        console.log('debe completar su direccion')
        this.$navigator.navigate('/address_complete')
      }else{
        this.$navigator.navigate('/pay-subscription')
      }

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