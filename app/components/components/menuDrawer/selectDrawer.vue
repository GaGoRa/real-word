<template>
<ScrollView  scrollBarIndicatorVisible="false">
  <StackLayout marginTop="4" marginLeft="24" marginRight="24"> 
       <StackLayout @tap="myFuncion" 
            v-for="(item, key) in data"
              :key="`recomended-${key}`"
              :data="item"
                borderBottomWidth="1" borderBottomColor="#E5E5E5" >
            <abel id="value" ref="value" marginTop="4" marginBottom="4" color="black" horizontalAlignment="center" fontSize="24" fontWeight="600" :text="item.description" /> 
       </StackLayout>
  </StackLayout>
          </ScrollView> 
</template>
<script>
export default {
  props: {
     data: {
      type: Array,
      default: [{}],
    },
  }, 
  data() {
    return {
      hint:''
    };
  },
  methods: {
    
    myFuncion(){
       console.log('this.$refs.myDiv.nativeView',this.$refs.value.nativeView);
      this.$emit('changeHint',this.hint)
      this.$emit('toggleSelectDrawerClose',false)
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