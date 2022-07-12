<template>
  <Page
    actionBarHidden="true"
    class="page-home">

    <GridLayout 
      :marginTop="getMarginOS" 
      width="100%"  
      columns="*" 
      rows="auto,auto,*">

       <NavBarBurgerMenu 
        :isBell="false" 
        :ismenu="true"
        routeBack="/home"
        row="0"
      /> 
     

      <StackLayout row="1"
        marginTop="4"
        backgroundColor="transparent"
        backgroundImage="~/assets/icons/background_label.png"
        class="bg-label"
        paddingTop="2"
        paddingBottom="2"
      >
        <Label
          horizontalAlignment="left"
          color="#FFFFFF"
          fontSize="20"
          fontWeight="900"
          width="80%"
          marginLeft="16"
          :text="textValue.title"
        />
      </StackLayout>

      <StackLayout row="2">
        <ScrollView >
          <StackLayout>
            <StackLayout>
              <AbsoluteLayout  width="100%"  >
                <StackLayout
                  padding="16"
                  height="250"
                  width="100%"
                  top="0"
                  left="0"
                >
                  <ImageCacheIt
                    ref="imagevideo"
                    width="100%"
                    minHeight="250"
                    borderRadius="25"
                    :src="imagevideo"
                    stretch="aspectFill"
                  />
                  
                   <WebView 
                    v-if="false"
                    width="100%"
                    minHeight="250"
                    background="#242522"
                    :src="baseUrl+'/storage/'+video" 
                  />
                </StackLayout>
                <FlexboxLayout
                v-if="true"
                  @tap="onTapOpenVideo"
                  justifyContent="center"
                  alignItems="center"
                  padding="16"
                  height="250"
                  width="100%"
                  rorate="90"
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

            <StackLayout v-if="textValue && textValue.description">

              <FlexboxLayout
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

              <Label 
                textWrap 
                backgroundColor="transparent"  
                marginTop="8" 
                marginLeft="16" 
                :text="textValue.description" 
              />
              
            </StackLayout>

            <StackLayout row="4"> 
              <FlexboxLayout
                marginTop="8"
                backgroundColor="transparent"
                justifyContent="center"
                v-if="subscriptionState"
              >

                <StackLayout v-if="loadingState"  marginBottom="16" marginTop="16"  marginRight="16" >
                <ActivityIndicator 
                  :busy="loadingState" 
                    />
                </StackLayout>

                <Button
                  v-else
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
                  
                  
              </FlexboxLayout>
              <Label 
                textWrap="true"  
                v-if="!!buttomPlay.message" 
                :text="buttomPlay.message" 
                fontSize="16" fontWeight="600"
                textAlignment="center" 
                :color="buttomPlay.registered ? 'green' :'red'" 
                marginLeft="32" 
                marginRight="32" 
                marginTop="0" 
                marginBottom="0" 
              />

              <StackLayout  
                marginTop="16" 
                v-if="subscriptionState" >
                <CardExercise
                  v-for="(item, key) in dataPackageExercise"
                  :key="`exercise-${key}`"
                  :data="item"
                  :status_program_id="status_program_id"
                  :programButtom="buttomPlay.registered "
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

          </StackLayout>
        </ScrollView>
       
      </StackLayout>

    </GridLayout>
    
  </Page>
</template>
<script>
import CardSubscriptionProgram from "~/components/components/boxes/CardSubscriptionProgram.vue";
import CardExercise from "~/components/components/boxes/CardExercise.vue";
import NavBarBurgerMenu from "~/components/components/NavBar/NavBarBurgerMenu.vue"
import { apiGet, apiPost,baseUrl } from "~/resource/http";
import { Dialogs } from "@nativescript/core";
import { DEFAULT_POPULAR_PROGRAMS} from "../../resource/constans"
import  CardImage  from "../components/boxes/cardImage.vue"
export default {
  components: {
    CardSubscriptionProgram,
    CardExercise,
    NavBarBurgerMenu,
    CardImage
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
      showvideo: false,
      video:'',
      imagevideo:'res://eskeleton',
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
        title:""
      },
      subscriptions: [],
      exercises: [],
    };
  },
  computed:{

       getMarginOS(){
      return global.isIOS ? '0' : '32' 
    },
      
    dataPackage(){
      let arr = []
      this.subscriptions.forEach((e)=>{
        e.program_id = this.id
        e.color = '#EAB813'
        arr.push(e)
      })
      return arr
    },
    dataPackageExercise(){
      let arre = []

      this.exercises.forEach((e)=>{
        e.program_id = this.id
        arre.push(e)
      })

      return arre
    }
  },
  async created(){
    await this.createMain()
  },
  mounted(){
  },
  methods:{
    videoCompleted(){
      console.log('readyToPLayback');
    },
    onTapOpenVideo(){

      this.$navigator.modal('/view_video',
        { fullscreen: true, 
          id:'viewvideo',
          props:{
            video: this.video
          } 
        })
    },
    async createMain(){
      try {
        this.loadingState = true
        const res = await apiGet(`/program_detail?program_id=${this.id}`)
        //console.log("detalle",res)
        this.program_id= String(res.date.id)

        this.textValue.description = res.date.description
        this.textValue.title = res.date.name
        this.video = res.date.video
        this.imagevideo = this.baseUrl+'/storage/'+res.date.image


        if(res.date.status_package === null){
          const packageData =  await apiGet('/package')
          this.subscriptions = packageData.data
        }else{
          this.subscriptionState = true
          this.subscription_id = String(res.date.status_package.subscription_id)
          if(res.date.status_package.status){
            if(res.date.status_program === null){
              this.exercises = this.getExercises(res.date.details, false)
            }else{
              if(res.date.status_program.status){
              this.buttomPlay.registered = true
              this.status_program_id = String(res.date.status_program.id)
              this.exercises = this.getExercises(res.date.details, '/day-exercise')
              }else{
                this.buttomPlay.registered = false
                this.exercises = this.getExercises(res.date.details, false)
                this.status_program_id = String(res.date.status_program.id)
              }
            } 
          }else{
               //si se vencio sa sub
            this.exercises = this.getExercises(res.date.details,'/pay-subscription')
          }
        }
        this.$forceUpdate()
        this.loadingState = false
      } catch (error) {
        console.log('error',error);
        this.onError(error)
      }
    },
    onSuccess(res){
      // console.log('res',res);
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
          text: exe.description || "",
          url:url,
          image: this.imagevideo,
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
    async onSuccessPressButtom(res){
      console.log("onSuccessPressButtom",res);
      this.buttomPlay.registered = res.status
      this.buttomPlay.message = res.message
      // this.$navigator.navigate('/program',{props:{id:this.id},clearHistory:true})
        // this.$refs.SliderPrincipal.nativeView.refresh()
        await this.createMain()
        //await this.$forceUpdate()
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
