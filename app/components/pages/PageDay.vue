<template>
    <Page class="seccion-register-bg-invert" actionBarHidden="true">
        <StackLayout marginTop="32"  marginRight="16" >
            <NavBarBurgerMenu/>
             <StackLayout
          col="0"
          row="0"
          marginTop="4"
          backgroundColor="transparent"
          backgroundImage="~/assets/icons/background_label.png"
          class="bg-label"
        >
          <Label
            marginLeft="24"
            color="white"
            fontSize="24"
            fontWeight="900"
            :text="`Day ${day.day} - ${day.bodyPart}`"
          />
        </StackLayout>
            <CardProgram
              v-for="(item, key) in day.exercise"
              :key="`exercise-${key}`"
              :data="item"
              marginBottom="12"
            />
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
        ],
                    

                }
            };
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