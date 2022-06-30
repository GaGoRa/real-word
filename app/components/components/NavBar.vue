<template>
  <StackLayout
      marginTop="16"
      marginBottom="16"
      backgroundColor="transparent"
    >
      <FlexboxLayout
        marginTop="32"
        class="bg-label"
        justifyContent="flex-start"
      >
        <StackLayout marginLeft="32" marginRight="40">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
        </StackLayout>
        <StackLayout
          width="75%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="12"
        >
          <Label
            textAlignment="center"
            :text="data.title"
            fontSize="24"
            color="white"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
</template>
<script>



export default {
  props:{
    data:{
      type:Object,
      default:{}
    },
  },
  data() {
    return {
      
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