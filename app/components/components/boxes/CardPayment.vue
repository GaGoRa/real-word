<template>
  <AbsoluteLayout borderRadius="20" marginTop="16" backgroundColor="red" marginLeft="16">
  <!--  <image
      width="data.width"
      height="data.height"
      src=""
      stretch="aspectFill"
      borderRadius="20"
      @tap="$navigator.navigate(data.url)"
    ></image> -->

    <FlexboxLayout
      top="0"
      left="0"
      width="272"
      height="176"
      alignItems=""
      justifyContent="center"
      flexDirection="column"
    >
     <StackLayout>
      <Label
        color="#FFFFFF"
        fontSize="18"
        fontWeight="500"
        marginBottom="4"
        marginLeft="16"
        horizontalAlignment="start"
        :text="data.number"
      />
 </StackLayout>
      <StackLayout>
        <FlexboxLayout
        justifyContent="space-between"
        margin="14"
        >
        <StackLayout>
            <Label
            color="#FFFFFF"
            fontSize="14"
            fontWeight="500"
            :text="data.date"
      /> 
       </StackLayout>
        <StackLayout>
            <Label
                color="#FFFFFF"
                fontSize="14"
                fontWeight="500"
                :text="data.person"
      />  
      </StackLayout>
    </FlexboxLayout>

      </StackLayout>
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