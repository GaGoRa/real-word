<template>
  <Page  
    class="seccion-register-bg-invert" 
    actionBarHidden="true"
  >
    <StackLayout :marginTop="getMarginOS"  >
      
      <NavBarBurgerMenu
        :isBell="false"
        :ismenu="true" 
        :program_id="data.program_id" />
            
      <StackLayout
        col="0"
        row="0"
        marginTop="0"
        backgroundColor="transparent"
        backgroundImage="~/assets/icons/background_label.png"
        class="bg-label"
      >
        <Label
          marginLeft="24"
          color="#FFFFFF"
          fontSize="24"
          fontWeight="900"
          :text="`${data.day}`"
        />
      </StackLayout>

      <HtmlView backgroundColor="transparent" marginLeft="24"
        color="black"
        fontSize="24"
        marginTop="4"
        marginBottom="0"
        fontWeight="900" 
        :html="data.text" 
      />

      <ScrollView>
        <StackLayout>
          <CardProgram
            v-for="(item, key) in data.props.data"
            :key="`exercise-${key}`"
            :data="item"
            :program_days_id="data.id"
            :subscription_programs_id="status_program_id"
            :imagevideo="data.image"
          />
        </StackLayout>
      </ScrollView>
    </StackLayout>        
  </Page>
</template>

<script>
import NavBarBurgerMenu from "../components/NavBar/NavBarBurgerMenu.vue";
import CardProgram from "~/components/components/boxes/CardProgram.vue";

    export default {
          components:{CardProgram,
         NavBarBurgerMenu
    },
      props:{
        data:{
          type:Object,
          default:{}
        },
        status_program_id:{
          type: Number
        }
      },
      data() {
      return {
        day:{
            day:"1",
            bodyPart:"Legs",
            exercise:[
              {
                text: "Squat",
                sets: 4,
                reps: 15,
                minReps: 10,
                maxWeight:0,
                maxReps:0,
                completeDate:'12/10/2022'

              },{
                text: "Squat",
                sets: 4,
                reps: 15,
                minReps: 10,
                maxWeight:0,
                maxReps:0,
                completeDate:'12/10/2022'

            },
            ] ,
                    

                }
            };
      },
      mounted(){
         console.log('pageDay this data',this.data)
      },
      computed:{
         getMarginOS(){
      return global.isIOS ? '0' : '32' 
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