<template>
  <Page height="60%" borderRadius="50"  actionBarHidden="true" >
  
    <GridLayout width="100%"  columns="*" rows="*,auto">
      
      <!-- <DatePicker :date="date" @dateChange="dateChange" /> -->

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
  // props:['value'],
  data() {
    return {
      data: '',
    };
    
  },
  watch:{
    // date(to){

    // }
  },
  computed:{

    // date: {
    //   get: function () {
    //     // if(this.value == ){
    //       return this.value
    //     // }
    //     // return 0;
    //   },
    //   set: function (v) {
    //     return v;
    //   },
      
    // }
  },
  methods:{
    dateChange(value){
      // this.date = value
    },
    Selected(){
      // this.$modal.close('this.date')
    }
  }
};
</script>

<style scoped>
  .modalPage{
    background: rgba(0,0,0,.4);
  }
</style>