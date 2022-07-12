<template>
  <AbsoluteLayout marginLeft="16" marginTop="8" :class="data.class" :width="!data.text ? 350 : 'auto'" :height="!data.text ? 120 : 'auto'"  marginRight="16">
    <StackLayout
      top="0"
      left="0"
      :width=" data.text ? '100%' : '100%'"
      :height=" data.text  ? 'auto' : '100%'"
      :backgroundColor=" data.color ? data.color: '#EAB813'"
      borderRadius="16"
      padding="16"
    >
      <Label
        color="#FFFFFF"
        fontSize="24"
        fontWeight="900"
        horizontalAlignment="left"
        textWrap="true"
        :text="data.tittle"
      />

      <Label backgroundColor="transparent" color="#FFFFFF" fontSize="24" marginLeft="8" marginTop="8" :html="data.text ? data.text :''" />

      <FlexboxLayout justifyContent="space-between">
        <Label
          color="#FFFFFF"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="`${data.recurrence} ${data.mount}`"
        />
        <StackLayout>
          <Button
            v-if="data.status == 'active'"
            borderRadius="8"
            fontSize="14"
            text="Cancel Subscription"
            backgroundColor="red"
            width="152"
            height="31"
            fontWeight="800"
            color="#FFFFFF"
            @tap="onTapCancel"
          />
          <Label color="#FFFFFF"
          fontSize="13"
          fontWeight="900" v-if="data.status == 'canceled'" text="Subscription Canceled" />

          
          <!-- <Button
            v-if="data.status == 'canceled'"
            borderRadius="8"
            fontSize="14"
            text="Renew subscription"
            backgroundColor="#388E3C"
            width="152"
            height="31"
            fontWeight="800"
            color="#FFFFFF"
            @tap="onTapReanudar"
          /> -->
        </StackLayout>
      </FlexboxLayout>

    </StackLayout>
    <ActivityIndicator  color="red" marginTop="16" horizontalAlignment="center" verticalAlignment="center" :busy="isLoading"  />
  </AbsoluteLayout>
</template>
<script>

import { apiPost } from '~/resource/http';
export default {
  props: {
    data: {
      type: Object,
      default: {},
      isLoading: false
    },
  },
  data() {
    return {};
  },
  methods:{
    async onTapCancel(){
      
      const data = await apiPost({package_id: this.data.package_id},'/subscription/cancel_subscription')
      this.isLoading = true
      setTimeout(()=>{
        this.$emit('onCancel', true)
        this.isLoading = false

      }, 3000)
        
    },
    async onTapReanudar(){
      
      const data = await apiPost({package_id: this.data.package_id},'/subscription/reanudar_subscription')

      console.log(data)
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