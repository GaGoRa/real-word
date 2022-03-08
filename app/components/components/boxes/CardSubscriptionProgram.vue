<template>
  <AbsoluteLayout marginLeft="16" marginTop="8">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      :backgroundColor="data.color"
      borderRadius="16"
      padding="12"
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

      <Label
        color="white"
        fontSize="14"
        horizontalAlignment="left"
        textWrap="true"
        :text="data.text"
      />
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