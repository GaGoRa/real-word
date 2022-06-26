<template>
  <StackLayout marginTop="4" marginLeft="24" marginRight="24"> 
       <TextField  tabTextFontSize="50" class="textbox" height="38"  v-model=".email" hint="Email"
                    backgroundColor="white" borderRadius="10" marginBottom="6"/>
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
    return {};
  },
  methods: {
   
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