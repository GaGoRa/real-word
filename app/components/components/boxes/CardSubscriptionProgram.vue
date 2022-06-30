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
        
        borderRadius="16"
        padding="12"
      >
        <FlexboxLayout justifyContent="space-between">
          <Label
            color="black"
            fontSize="20"
            fontWeight="900"
            horizontalAlignment="left"
            textWrap="true"
            :text="data.name"
          />
          <!-- <Label
            color="white"
            fontSize="20"
            fontWeight="900"
            textWrap="true"
            :text="data.amount"
          /> -->
        </FlexboxLayout>

        <HtmlView color="black" fontSize="24" marginLeft="8" marginTop="8" :html="data.description" />

        <FlexboxLayout justifyContent="space-around">
          <StackLayout
            v-for="(price, key) in data.prices"
            :key="`package-${key}`"
            borderWidth="1"
            borderColor="white"
            :backgroundColor="data.color ? '#EAB813' : '#838383'"
            borderRadius="10"
            @tap="redirect(data, price)"
            padding="16">
            <label textWrap fontSize="14" horizontalAlignment="center" :text="`Subscription ${price.recurrence.description}`" />
            <label textWrap fontWeight="900" fontSize="16" horizontalAlignment="center" :text="price.amount" />
          </StackLayout>
        </FlexboxLayout>

        <!-- <Label
          color="white"
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
    redirect(packagedata, price){
      const cach = JSON.parse(cache.get("userProfile")) 

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
        console.log(this.data)
        this.$navigator.navigate('/pay-subscription', { props: { 
            package: packagedata,
            price: price
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