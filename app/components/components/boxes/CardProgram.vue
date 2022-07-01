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
              color="#FFFFFF"
              fontSize="14"
              fontWeight="900"
              :text="data.title"
              
            />
          </FlexboxLayout>
      </StackLayout>
      
      <GridLayout columns="*,*" rows="*">
        <StackLayout col="0" row="0"  width="33%">
          
          <Label
            color="#FFFFFF"
            fontSize="16"
            fontWeight="500"
            :text="`Sets: ${data.sets} `"
            marginTop="16"></Label>
          
          <Label
            color="#FFFFFF"
            fontSize="16"
            fontWeight="500"
            :text="`Reps: ${data.repetitions}`"
            marginBottom="16"
            marginTop="4">
          </Label>
          
          <Button borderRadius="8" marginTop="" fontSize="16"
              :text="!data.completed ? 'Log':'Edit'" :backgroundColor="!data.completed ? 'red':'#388E3C'" width="180"
              height="28" fontWeight="900" color="#FFFFFF"
              marginBottom="32" @tap="toggleSwitchMenu" />
        </StackLayout> 

        <StackLayout borderRadius="8" width="55%" col="1" row="0" backgroundColor="silver">
            <VideoPlayer
              :src="`https://realworld.uscreativity.com/storage/${data.video}`"
              autoplay="true"
              height="100%"
              fill="true"
            >
            </VideoPlayer>
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
    
      <StackLayout>
        <FlexboxLayout marginLeft="8" 
          v-for="(i, key) in sets"
          :key="`exercice-${key}`"
        >
            <Label 
              marginBottom="16"
              marginTop="4"
              color="#FFFFFF"
              fontSize="14"
              fontWeight="500"
              paddingTop="4"
              :text="`Sets ${i.set}:`"
            />
            <TextField
              color="#949494"
              marginBottom="6"
              marginLeft="8"
              marginRight="8"
              borderRadius="12"
              v-model="i.repetitions"
              hint="Reps #"
              keyboardType="number"
              backgroundColor="#FFFFFF"
              height="18"
              width="33%"
              key
            /> 
            <TextField
              color="#949494"
              marginBottom="6"
              marginLeft="8"
              marginRight="8"
              borderRadius="12"
             v-model="i.weight"
              backgroundColor="#FFFFFF"
              height="18"
              hint="Weight"
              keyboardType="number"
              width="33%"
            />
        </FlexboxLayout>
      </StackLayout>
        
        
       <Button borderRadius="8" 
        marginTop="8" 
        fontSize="16"
        :text="!data.completed ? 'Complete':'Save'" 
        :backgroundColor="!data.completed ? 'red':'#388E3C'" 
        width="180"
        height="28" 
        fontWeight="900" 
        color="#FFFFFF"
        marginBottom="4" 
        @tap="onTapLog"/>
        
      <FlexboxLayout marginTop="6" justifyContent="space-between" paddingLeft="4" paddingRight="4"> 
        <Label 
          marginBottom="0"
          marginTop="4"
          color="#FFFFFF"
          fontSize="16"
          fontWeight="500"
          paddingTop="4"
          text="Max Weight"
        />
        <Label 
          marginBottom="0"
          marginTop="4"
          color="#FFFFFF"
          fontSize="14"
          fontWeight="500"
          paddingTop="4"
          text="Max Reps"
        />
        <Label 
          marginBottom="0"
          marginTop="4"
          color="#FFFFFF"
          fontSize="14"
          fontWeight="500"
          paddingTop="4"
          text="Date"
        />
      </FlexboxLayout>
      <StackLayout>
        <FlexboxLayout
          v-for="(i, key) in setsList"
          :key="`list-${key}`"
           marginTop="6" justifyContent="space-between" paddingLeft="4" paddingRight="4"> 
          <Label 
            marginBottom="4"
            marginTop="4"
            color="#FFFFFF"
            fontSize="14"
            fontWeight="300"
            paddingTop="4"
            class="label-cardProgramResult"
            :text="i.maxweight"
          />
          <Label 
            marginBottom="4"
            marginTop="4"
            color="#FFFFFF"
            fontSize="14"
            fontWeight="300"
            class="label-cardProgramResult"
            paddingTop="4"
            text-align="center"
            :text="i.maxreps"
          />
          <Label 
            marginBottom="4"
            marginTop="4"
            color="#FFFFFF"
            fontSize="14"
            class="label-cardProgramResult"
            fontWeight="300"
            paddingTop="4"
            text-align="center"
            :text="i.date"
          />
        </FlexboxLayout>
      </StackLayout>
     


    </StackLayout>
    <StackLayout
      top="0"
      left="0"
      width="100%"
      v-if="data.completed"
    >
    <image 
      horizontalAlignment="right"
      width="40"
      height="40"
      src="~/assets/icons/Icon feather-check-circle.png"  />
      
    </StackLayout>
     
    
  </AbsoluteLayout>
</template>
<script>
import { apiPost } from '~/resource/http';

export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    program_days_id:{
      type: Number
    },
    subscription_programs_id:{
      type: Number
    },
  },
  data() {
    return {
      showLogs:false, 
      sets: [],
      setsList:[]
    };
  },
  mounted(){
    for (var i = 0; i < this.data.sets; i++) {
      let num = i+1
      let index = this.data.log.findIndex((e)=> e.set == num)
      let repetitions = ''
      let weight = ''

      if(index != -1){
        repetitions = this.data.log.find((e)=> e.set == num).repetitions
         weight = this.data.log.find((e)=> e.set == num).weight
      }
      this.sets.push({
        set:         num,
        repetitions: repetitions,
        weight:      weight,
      })
    }
    this.setsList = this.data.list
    this.$forceUpdate()
    console.log('s', this.sets)
  },
  computed:{
    
  },
  methods:{
    toggleSwitchMenu() {
      this.showLogs = !this.showLogs
    },
    async onTapLog(){
      console.log('ddedfs',this.data)
      console.log('program_days_id', this.program_days_id)
      console.log('subscription_programs_id', this.subscription_programs_id)
      const data = await apiPost({
        program_days_id : this.program_days_id, 
        program_day_routines_id : this.data.id,
        subscription_programs_id : this.subscription_programs_id ,
        data: this.sets
      },'/create_log')
this.data = data.data
      this.setsList = data.data.list
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