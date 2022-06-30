<template>
  <AbsoluteLayout marginLeft="16">
    <image
    :class="data.class || ''"
      :width="data.width"
      :height="data.height"
      :src="data.img"
      stretch="aspectFill"
      borderRadius="20"
      @tap=" data.url ? $navigator.navigate(data.url,{props:data.props}) : ''
      "
    ></image>
    <FlexboxLayout
      top="0"
      left="0"
      :width="data.width"
      :height="data.height"
      alignItems="flex-end"
      justifyContent="center"
    >
      <Label
        :color="data.colorText"
        fontSize="32"
        fontWeight="900"
        horizontalAlignment="center"
        :text="data.text"
        marginBottom="16"
      />
    </FlexboxLayout>
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
  methods:{}
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