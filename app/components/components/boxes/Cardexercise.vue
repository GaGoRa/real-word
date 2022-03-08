<template>
  <AbsoluteLayout marginLeft="16" marginTop="8">
    <StackLayout
      top="0"
      left="0"
      width="100%"
      height="auto"
      backgroundColor="#838383"
      borderRadius="16"
      padding="16"
    >
      <FlexboxLayout justifyContent="space-between">
        <Label
          color="white"
          fontSize="16"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :day="`Day ${data.day}`"
        />
        <Label
          color="white"
          fontSize="16"
          fontWeight="900"
          horizontalAlignment="left"
          textWrap="true"
          :body="data.body"
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