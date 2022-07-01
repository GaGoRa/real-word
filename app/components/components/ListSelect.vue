<template>
  <Page height="60%" borderRadius="50"  actionBarHidden="true" >
  
    <GridLayout width="100%"  columns="*" rows="*,auto">
      <ListPicker
        :items="datos"
        :selectedIndex="selectedIndex"
        @selectedIndexChange="selectedIndexChanged"
        row="0" col="0"
        height="300"
      />

      <Button
        borderRadius="16"
        marginTop="32"
        fontSize="16"
        text="Selected"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="#FFFFFF"
        marginBottom="32"
        row="1" col="0"
        @tap="Selected"
      />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  props:['data','key', 'value'],
  data() {
    return {
      // selectedIndex: this.value,
      selectedObject: {}
    };
  },
  watch:{
    data(to){
    }
  },
  computed:{
    datos(){
      let arr = []

      this.data.forEach((e)=>{
        arr.push(e[this.key])
      })

      return arr
    },
    selectedIndex: {
      get: function () {
        if(this.value){
          return this.data.findIndex((e)=>e.id == this.value)
        }
        return 0;
      },
      set: function (v) {
        return v;
      },
      
    }
  },
  methods:{
    selectedIndexChanged({value}){
      this.selectedIndex = value
      this.selectedObject = this.data.find((e,i)=>i == value)
    },
    Selected(){
      this.$modal.close(this.selectedObject)
    }
  }
};
</script>

<style scoped>
  .modalPage{
    background: rgba(0,0,0,.4);
  }
</style>