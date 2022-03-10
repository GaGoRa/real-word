<template>
  <AbsoluteLayout marginLeft="16" marginTop="8" marginRight="16">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      :backgroundColor="data.color"
      borderRadius="16"
      padding="16"
    >
      <Label
        color="white"
        fontSize="16"
        fontWeight="900"
        horizontalAlignment="left"
        textWrap="true"
        :text="data.tittle"
      />

      <Label
        color="white"
        fontSi352ze="14"
        horizontalAlignment="left"
        textWrap="true"
        :text="data.text"
      />

      <FlexboxLayout justifyContent="space-between">
        <Label
          color="white"
          fontSize="20"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :text="`Monthly ${data.mount}`"
        />
        <StackLayout>
          <Button
            borderRadius="8"
            fontSize="14"
            text="Cancel Subscription"
            backgroundColor="red"
            width="152"
            height="31"
            fontWeight="800"
            color="white"
            @tap="$navigator.navigate('/subscription-cancel')"
          />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </AbsoluteLayout>
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