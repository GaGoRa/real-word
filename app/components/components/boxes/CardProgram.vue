<template>

    <StackLayout padding="16" paddingBottom="8">
      <StackLayout 
        padding="16"
        backgroundColor="#B9B9B9"
        borderRadius="20"
        class="box-shadow"
      >

        <StackLayout>
          <FlexboxLayout>
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

        <StackLayout>
          <GridLayout columns="*,*" rows="*,auto">
            <StackLayout  col="0" paddingRight="8" row="0">
            
              <Label
                color="#FFFFFF"
                fontSize="16"
                fontWeight="500"
                :text="`Sets: ${data.sets} `"
                marginTop="16"
              />
              
              <Label
                color="#FFFFFF"
                fontSize="16"
                fontWeight="500"
                :text="`Reps: ${data.repetitions}`"
                marginBottom="16"
                marginTop="4"
              />
              
              <Button 
                borderRadius="8" 
                fontSize="16"
                :text="!data.completed ? 'Log':'Edit'" 
                :backgroundColor="!data.completed ? 'red':'#388E3C'" 
                width="180"
                height="28" 
                fontWeight="900" 
                color="#FFFFFF"
                @tap="toggleSwitchMenu" 
              />
            </StackLayout>
            <!--  -->
            <StackLayout   col="1" row="0">
              <AbsoluteLayout  width="100%"  >
                <StackLayout
                  height="120"
                  width="100%"
                  top="0"
                  left="0"
                >
                  <image
                    ref="imagevideo"
                    width="100%"
                    minHeight="250"
                    borderRadius="10"
                    :src="imagevideo"
                    stretch="aspectFill"
                  />
                </StackLayout>
                <FlexboxLayout
                  @tap="onTapOpenVideo"
                  justifyContent="center"
                  alignItems="center"
                  padding="16"
                  height="120"
                  width="100%"
                  top="0"
                  left="0"
                >
                  <image
                    width="20%"
                    src="res://iconplay"
                    stretch="aspectFit"
                  />
                </FlexboxLayout>
              </AbsoluteLayout >
            </StackLayout>

            <StackLayout
              v-if="showLogs"
              col="0"
              row="2"
              colSpan="2"
              padding="10"
              marginTop="16"
              borderTopWidth="1"
              borderColor="rgba(0,0,0,.4)"
            >
              <StackLayout  width="100%">
                <GridLayout 
                  v-for="(i, key) in sets"
                  :key="`exercice-${key}`" 
                  columns="auto, *, *" 
                  rows="*"
                >
                  <StackLayout  paddingRight="16" col="0">
                    <Label 
                      marginBottom="16"
                      marginTop="4"
                      color="#FFFFFF"
                      fontSize="14"
                      fontWeight="500"
                      paddingTop="4"
                      :text="`Sets ${i.set}:`"
                    />
                  </StackLayout>
                  <StackLayout  col="1">
                    <TextField
                      color="#949494"
                      marginBottom="6"
                      marginLeft="8"
                      marginRight="0"
                      borderRadius="12"
                      v-model="i.repetitions"
                      hint="Reps #"
                      backgroundColor="#FFFFFF"
                      height="32"
                      keyboardType="number"
                    /> 
                  </StackLayout>
                  <StackLayout  col="2">
                    <TextField
                      color="#949494"
                      marginBottom="6"
                      marginLeft="8"
                      marginRight="0"
                      borderRadius="12"
                      v-model="i.weight"
                      backgroundColor="#FFFFFF"
                      height="32"
                      hint="Weight"
                      keyboardType="number"
                    />
                  </StackLayout>
                </GridLayout>
              </StackLayout>
            
              <Button 
                borderRadius="8" 
                marginTop="8" 
                fontSize="16"
                :text="!data.completed ? 'Complete':'Save'" 
                :backgroundColor="!data.completed ? 'red':'#388E3C'" 
                width="180"
                height="28" 
                fontWeight="900" 
                color="#FFFFFF"
                @tap="onTapLog"
              />
            
              <FlexboxLayout 
                borderTopWidth="1"
                borderColor="rgba(0,0,0,.4)"
                marginTop="16" 
                justifyContent="space-between" 
                paddingLeft="4" paddingRight="4"
              > 
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

          </GridLayout>
        </StackLayout>


      </StackLayout>
      <StackLayout
        marginTop="-24"
        width="100%"
        v-if="data.completed"
      >
        <image 
          horizontalAlignment="right"
          width="40"
          height="40"
          src="~/assets/icons/Icon feather-check-circle.png"  
        />
        
      </StackLayout>
    </StackLayout>

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
    imagevideo:{
      default: 'ress://eskeleton'
    }
  },
  data() {
    return {
      showLogs:false, 
      sets: [],
      setsList:[]
    };
  },
  mounted(){
    console.log('pr', this.data)
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
    },
    onTapOpenVideo(){
      this.$navigator.modal('/view_video',
        { fullscreen: true, 
          id:'viewvideo',
          props:{
            video: this.data.video
          } 
        })
    },
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