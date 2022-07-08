<template>
  <StackLayout marginBottom="12">
    <FlexboxLayout
     @tap="open"
      marginTop="16"
      backgroundColor="transparent"
      justifyContent="left"
    >
      <Label
        textAlignment="center"
        :text="faq.title"
        fontSize="22"
        color="#1B2631"
        marginLeft="16"
        fontWeight="900"
        paddingTop="0"
      />

      <StackLayout marginLeft="8">
        <Image
          src="~/assets/icons/icon_ionic-ios-arrow-down.png"
          height="24"
          width="16"
          :ref="`arrow${faq.id}`"
          :id="`arrow${faq.id}`"
        />
      </StackLayout>
    </FlexboxLayout>
    <!-- <TextView v-if="faq.open" editable="false"> -->
      <Label backgroundColor="transparent" marginLeft="18" fontSize="18" v-if="faq.open" :html="faq.text" />
      <!-- <FormattedString>
        <Span :text="faq.text" />
      </FormattedString> -->
    <!-- </TextView> -->
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
    return {
      faq: this.data,
    };
  },
  methods: {
    open(){
      this.faq.open = !this.faq.open
      let v = 'arrow'+this.faq.id
      let h = this.$refs[v].nativeView
      let rotate = 0

      if(this.faq.open){
        rotate = -180
      }else{
        rotate = 0
      }
      h.animate({
        rotate: rotate,
        duration: 200
      })
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