<template>
  <AbsoluteLayout   marginTop="16"   marginLeft="16">
   
     <StackLayout
      top="0"
      left="0"
      width="100%"
      height="173"
      padding="10"
      backgroundColor="#838383"
      borderRadius="20"

      class="box-shadow"
    >
      <StackLayout>
      <FlexboxLayout
        >
          <Image
            src="~/assets/icons/icon_details.png"
            height="14"
            marginRight="4"
          />

          <Label
            color="white"
            fontSize="14"
            fontWeight="900"
            :text="data.text"
            
          />
        </FlexboxLayout>
    </StackLayout>
    
    <GridLayout columns="*,*" rows="*">
      <StackLayout col="0" row="0"  width="33%">
        
        <Label
            color="white"
            fontSize="16"
            fontWeight="500"
            :text="`Sets: ${data.sets} `"
             marginTop="16"></Label>
        
        <Label
            color="white"
            fontSize="16"
            fontWeight="500"
            :text="`Reps: ${data.minReps} - ${data.reps}`"
            marginBottom="16"
             marginTop="4">
            </Label>
        
              <Button borderRadius="8" marginTop="" fontSize="16"
                    text="Log" backgroundColor="red" width="180"
                    height="28" fontWeight="900" color="white"
                    marginBottom="32" @tap="toggleSwitchMenu"/>
        
        
        </StackLayout> <StackLayout borderRadius="8" width="55%" col="1" row="0" backgroundColor="red">

        </StackLayout>

    </GridLayout>


    </StackLayout>

    <StackLayout
      v-if="showLogs"
      top="173"
      left="0"
      width="90%"
      height="auto"
      padding="10"
      marginRight="16"
      marginLeft="16"
      backgroundColor="#ACACAC"
      class="detail-sets box-shadow"
    >
    
      <StackLayout  >
        
       <FlexboxLayout marginLeft="8" >
        <Label 
            marginBottom="16"
            marginTop="4"
            color="white"
             fontSize="14"
            fontWeight="500"
            paddingTop="4"
            text="Sets 1: "/>
        <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        hint="Reps #"
        backgroundColor="white"
        height="18"
        width="33%"
      /> <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        backgroundColor="white"
        height="18"
        hint="Weight"

        width="33%"
      />
        </FlexboxLayout>

           <FlexboxLayout marginLeft="8" >
        <Label 
            marginBottom="16"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="500"
            paddingTop="4"
            text="Sets 2: "/>
       <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        hint="Reps #"
        backgroundColor="white"
        height="18"
        width="33%"
      /> <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        backgroundColor="white"
        height="18"
        hint="Weight"

        width="33%"
      />
        </FlexboxLayout>

        <FlexboxLayout  marginLeft="8">
        <Label 
            marginBottom="16"
            marginTop="4"
            color="white"
         fontSize="14"
            fontWeight="500"
            paddingTop="4"
            text="Sets 3: "/>
        <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        hint="Reps #"
        backgroundColor="white"
        height="18"
        width="33%"
      /> <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        backgroundColor="white"
        height="18"
        hint="Weight"

        width="33%"
      />
        </FlexboxLayout>

        <FlexboxLayout marginLeft="8" >
        <Label 
            marginBottom="16"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="500"
            paddingTop="4"
            text="Sets 4: "/>
       <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        hint="Reps #"
        backgroundColor="white"
        height="18"
        width="33%"
      /> <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="8"
        marginRight="8"
        borderRadius="12"
        backgroundColor="white"
        height="18"
        hint="Weight"

        width="33%"
      />
        </FlexboxLayout>
        
        

        
        </StackLayout>
        
        
       <Button borderRadius="8" marginTop="8" fontSize="16"
                    text="Complete" backgroundColor="red" width="180"
                    height="28" fontWeight="900" color="white"
                    marginBottom="4" @tap="$navigator.navigate('/home')"/>
        
       <FlexboxLayout marginTop="6" justifyContent="space-between" paddingLeft="4" paddingRight="4"> 
      <StackLayout marginRight="8" marginLeft="8">
          <Label 
            marginBottom="0"
            marginTop="4"
            color="white"
            fontSize="16"
            fontWeight="500"
            paddingTop="4"
                     text="Max Weight"
              />

               <Label 
            marginBottom="4"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="300"
            paddingTop="4"
            class="label-cardProgramResult"
                     :text="data.maxWeight"
              />
      </StackLayout>
      <StackLayout>
          <Label 
            marginBottom="0"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="500"
            paddingTop="4"
                     text="Max Reps"
              />

               <Label 
            marginBottom="4"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="300"
            class="label-cardProgramResult"
            paddingTop="4"
            text-align="center"
            
                     :text="data.maxReps"
              />
      </StackLayout>
      <StackLayout>
          <Label 
            marginBottom="0"
            marginTop="4"
            color="white"
            fontSize="14"
            fontWeight="500"
            paddingTop="4"
                     text="Date"
              />

               <Label 
            marginBottom="4"
            marginTop="4"
            color="white"
            fontSize="14"
            class="label-cardProgramResult"
            fontWeight="300"
            paddingTop="4"
            text-align="center"
                     :text="data.completeDate"
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
    return {
      showLogs:false
    };
  },
  methods:{
    toggleSwitchMenu() {
      this.showLogs = !this.showLogs
    }


  }

  

 
  
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