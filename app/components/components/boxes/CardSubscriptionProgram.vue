<template>
  <AbsoluteLayout   >
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      padding="12"

    >
      <StackLayout
      width="100%"
        class="box-shadow"
        backgroundColor="#B9B9B9"
        borderRadius="16"
        padding="12"
      >
        <FlexboxLayout justifyContent="space-between">
          <Label
            color="#FFFFFF"
            fontSize="20"
            fontWeight="900"
            horizontalAlignment="left"
            textWrap="true"

            :text="data.name"
          />
          <!-- <Label
            color="#FFFFFF"
            fontSize="20"
            fontWeight="900"
            textWrap="true"
            :text="data.amount"
          /> -->
        </FlexboxLayout>

        <Label backgroundColor="transparent" color="#FFFFFF" fontSize="24" marginLeft="8" marginTop="8" :text="data.description" />

        <StackLayout >
          <FlexboxLayout 
            justifyContent="space-between"
            orientation="horizontal"
            v-for="(price, key) in data.prices"
            :key="`package-${key}`"
            class="box-shadow"
            :backgroundColor="data.color ? '#FFC107' : '#838383'"
            borderRadius="10"
            marginBottom="8"
            @tap="redirect(data, price)"
            padding="16">
            <label textWrap fontSize="14" horizontalAlignment="center" :text="`Subscription ${price.recurrence.description}`" />
            <label textWrap fontWeight="900" fontSize="16" horizontalAlignment="center" :text="`$${price.amount}`" />
          </FlexboxLayout >
        </StackLayout>

        <!-- <Label
          color="#FFFFFF"
          fontSize="14"
          horizontalAlignment="left"
          textWrap="true"
          :text="data.text"
        /> -->
      </StackLayout>
    </StackLayout>
  </AbsoluteLayout>
</template>
<script>
import { ApplicationSettings } from '@nativescript/core';
// import cache from "~/store/cache";
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
    redirect(packagedata, price){
      const cach = JSON.parse(ApplicationSettings.getString('userProfile',"{}")) 

      if(
        !cach.user.address ||
        !cach.user.state_id ||
        !cach.user.city ||
        !cach.user.postal_code
      ){

        this.$navigator.navigate('/address_complete', { props: { 
            package: packagedata,
            price: price
          } 
           })
      }else{
        this.$navigator.navigate('/pay-subscription', { props: { 
            package: packagedata,
            price: price,
            program_id:this.data.program_id
          } 
           })
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