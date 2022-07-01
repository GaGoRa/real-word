<template>
  <Page
    actionBarHidden="true"
    class="page-home"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:VideoPlayer="nativescript-videoplayer"
  >

    
    <StackLayout marginTop="32"  >
    <NavBarBurgerMenu/>

    <!-- <label @tap="onTapN" text="jols"/> -->

    <StackLayout v-if="loadingState" marginTop="32"  marginRight="16" >
      <GridLayout marginTop="24" columns="*" rows="*,*,*">

        <image class="animation-pulse" backgroundColor="transparent" col="0" row="1" src="~/assets/images/eskeleton_circle.png"  />

      </GridLayout>
    </StackLayout>


    <ScrollView width="100%" v-else>
      <GridLayout marginTop="24" columns="*" rows="*,*,*,*,*,*,*">
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
            color="#FFFFFF"
            fontSize="24"
            fontWeight="900"
            :text="textValue.title"
          />
        </StackLayout>
        <StackLayout
          col="0"
          row="1"
          marginLeft="8"
          marginTop="16"
          backgroundColor="transparent"
          paddingRight="8"
        > 
          <VideoPlayer 
            :src="`${baseUrl}/storage/${video}`"
            autoplay="false"
            height="300"
            fill="true"
          >
          </VideoPlayer>
        </StackLayout>

        <FlexboxLayout
          col="0"
          row="2"
          marginTop="8"
          backgroundColor="transparent"
        >
          <Image
            marginLeft="24"
            src="~/assets/icons/icon_details.png"
            height="24"
          />

          <Label
            paddingTop="2"
            marginLeft="8"
            color="#FFFFFF"
            fontSize="20"
            fontWeight="400"
            text="DETAILS"
          />
        </FlexboxLayout>

        <HtmlView  marginTop="8" marginLeft="16" row="3" col="0" :html="textValue.description" />
        <!-- <TextView row="3" col="0" editable="false">
          <FormattedString>
            <Span
              :text="textValue.description"
            />
          </FormattedString>
        </TextView> -->

        <!-- <FlexboxLayout
          col="0"
          row="4"
          marginTop="8"
          backgroundColor="transparent"
          justifyContent="center"
        >
          <Label
            marginRight="8"
            color="#FFFFFF"
            fontSize="16"
            fontWeight="900"
            text="Add to My Programs"
          />

          <Image src="~/assets/icons/btn_icon_plus.png" height="40" />
        </FlexboxLayout> -->

        <FlexboxLayout
          col="0"
          row="5"
          marginTop="8"
          backgroundColor="transparent"
          justifyContent="center"
          
          
        >
          <Button
          v-if="subscriptionState"
            borderRadius="16"
            marginTop=""
            fontSize="20"
            :text="buttomPlay.registered ? 'Stop' : 'Start'  "
            :backgroundColor="buttomPlay.registered ? 'red' : 'green'"
            width="200"
            height="48"
            fontWeight="900"
            color="#FFFFFF"
            marginBottom="8"
            @tap="processPressButtomPlay"
            />
            <StackLayout v-else>
            </StackLayout>
           
        </FlexboxLayout>  
      
        <StackLayout col="0" row="6"> 

          <Label textWrap="true"  v-if="!!buttomPlay.message" :text="buttomPlay.message" fontSize="16" fontWeight="600"
            textAlignment="center" :color="buttomPlay.registered ? 'green' :'red'" marginLeft="32" marginRight="32" marginTop="0" marginBottom="0" />

         <StackLayout  marginTop="16" marginRight="16"  v-if="subscriptionState" >
            <CardExercise
              v-for="(item, key) in exercises"
              :key="`exercise-${key}`"
              :data="item"
              :status_program_id="status_program_id"
              marginBottom="12"
            />
          </StackLayout>
            <StackLayout v-else>
              <CardSubscriptionProgram
                v-for="(item, key) in dataPackage"
                :key="`subscription-${key}`"
                :data="item"
              />
            </StackLayout>

        </StackLayout>
      </GridLayout>
    </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import CardSubscriptionProgram from "~/components/components/boxes/CardSubscriptionProgram.vue";
import CardExercise from "~/components/components/boxes/CardExercise.vue";
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue"
import { apiGet, apiPost,baseUrl } from "~/resource/http";
import { Dialogs } from "@nativescript/core";
export default {
  components: {
    CardSubscriptionProgram,
    CardExercise,
    NavBarBurgerMenu
  },

  props:{
    id:{
      type:String,
      default:"0"
    }
  },
  watch:{
    async subscriptions(to){
      await this.$forceUpdate()
    }
  },
  data() {
    return {
      video:'',
      baseUrl:baseUrl,
      loadingState:false,
      subscriptionState:false,
      subscription_id:null,
      program_id:null,
      status_id:"1",
      is_active:"1",
      status_program_id:null,


      buttomPlay:{
        registered:false,
        message:"",
      },
      textValue:{
        description:'',
        title:"arm Blaster"
      },
      subscriptions: [],

      exercises: [],
    };
  },
  computed:{
    dataPackage(){
      let arr = []

      this.subscriptions.forEach((e)=>{
        e.color = '#EAB813'
        arr.push(e)
      })

      return arr
    }
  },
  async created(){
    try {
      this.loadingState = true
      const res = await apiGet(`/program_detail?program_id=${this.id}`)
      //console.log("detalle",res)
      this.textValue.description = res.date.description
      this.textValue.title = res.date.name
      this.video = res.date.video

      if(res.date.status_package === null){
        const packageData =  await apiGet('/package')
        this.subscriptions = packageData.data
      }else{
        this.subscriptionState = true


        this.subscription_id = res.date.status_package.subscription_id
        this.program_id= res.date.id

        if(res.date.status_package.status){


            if(res.date.status_program === null){
              this.exercises = this.getExercises(res.date.details, false)
            }else{
              this.buttomPlay.registered = true
              this.status_program_id = res.date.status_program.id
              this.exercises = this.getExercises(res.date.details, '/day-exercise')
              
            } 
        }else{
             //si se vencio sa sub
          this.exercises = this.getExercises(res.date.details,'/pay-subscription')
        }

      }

      this.loadingState = false

      // console.log('this.exercises',this.exercises)

    } catch (error) {
      console.log('error',error);
      this.onError(error)
    }
   
  },
  methods:{

  onSuccess(res){
    console.log('res',res);

    },
    onError(err){
      Dialogs.alert({
              title: "Error Message",
              message: "Have a error , please try again",
              okButtonText: "OK"
          }).then( ()=> {
              console.log("Error",new Error(err));
          });
    },
    getExercises(res,url){
      // console.log('res', res)
        return res.map((exe)=>({
          id:exe.id,
          completed: exe.status,
          day: exe.number,
          body: exe.muscular_group,
          text: exe.description || "<p></p>",
          url:url,
          props:{data:exe.exercise}
        }))


    },
    
     processPressButtomPlay(){

      if(!this.buttomPlay.registered){

        const body = {
                "subscription_id":this.subscription_id,
                "program_id":this.program_id,
                "status_id":this.status_id,
                "is_active":this.is_active
            }
         apiPost(body,'/register_user_program')
         .then(this.onSuccessPressButtom)
         .catch(this.onError)
       }else{

          const body ={
               "status_program_id": this.status_program_id
            }


         apiPost(body,'/cancel_user_program')
         .then( (res) => this.onSuccessPressButtom({...res,status:!res.status}))
         .catch(this.onError)

       }

    },
    onSuccessPressButtom(res){

      this.buttomPlay.registered = res.status
      this.buttomPlay.message = res.message

       await this.$forceUpdate()
    },
    onTapN(){
      // console.log('info')
      // this.$navigator.navigate('/day-exercise')
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
