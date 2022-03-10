<template>
  <StackLayout marginBottom="12">
    <FlexboxLayout
      marginTop="16"
      backgroundColor="transparent"
      justifyContent="left"
    >
      <Label
        textAlignment="center"
        :text="faq.title"
        fontSize="22"
        color="white"
        marginLeft="16"
        fontWeight="900"
        paddingTop="0"
      />
      <StackLayout marginLeft="8">
        <Image
          src="~/assets/icons/icon_ionic-ios-arrow-down.png"
          height="24"
          width="16"
          @tap="faq.open = !faq.open"
        />
      </StackLayout>
    </FlexboxLayout>
    <TextView v-if="faq.open" editable="false">
      <FormattedString>
        <Span :text="faq.text" />
      </FormattedString>
    </TextView>
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
  methods: {},
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