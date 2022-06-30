<template>
  <Page
    actionBarHidden="true"
    class="page-home"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:VideoPlayer="nativescript-videoplayer"
  >
    <!-- <ActionBar
      marginTop="16"
      height="64"
      title=""
      backgroundColor="transparent"
      flat="true"
    >
      <StackLayout>
        <FlexboxLayout
          justifyContent="space-between"
          paddingRight="24"
          width="100%"
        >
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.back()"
          />
          <Image src="~/assets/icons/burger_menu_icon.png" height="24" />
        </FlexboxLayout>
      </StackLayout>
    </ActionBar> -->
    
    <StackLayout marginTop="32"  >
    <NavBarBurgerMenu/>

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
            color="white"
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
            src="~/assets/videos/pexels-tima-miroshnichenko-5319759.mp4"
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
            color="white"
            fontSize="20"
            fontWeight="400"
            text="DETAILS"
          />
        </FlexboxLayout>

        <HtmlView   marginLeft="16" row="3" col="0" :html="textValue.description" />
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
            color="white"
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
            color="white"
            marginBottom="8"
            @tap="processPressButtomPlay"
          />
        </FlexboxLayout>

        <StackLayout col="0" row="6" marginTop="16" >
         
         <StackLayout  v-if="subscriptionState" >
            <CardExercise
              v-for="(item, key) in exercises"
              :key="`exercise-${key}`"
              :data="item"
              marginBottom="12"
            />
          </StackLayout>
            <StackLayout  v-else>
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
import { apiGet, apiPost } from "~/resource/http";
import { dataTest, apiMock } from "~/resource/mockdataPrograms.js"

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
      loadingState:true,
      subscriptionState:false,
      buttomPlay:{
        registered:true,
      },
      textValue:{
        description:'',
        title:"arm Blaster"
      },
      subscriptions: [
        {
          name: "Gold Subscription",
          amount: "$25.32",
          color: "#EAB813",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
          url: '/pay-subscription'

        },
        {
          name: "One Time Purchase",
          amount: "$199.42",
          color: "#838383",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
          url: false
       },
      ],
      exercises: [
        {
          completed: true,
          day: "1",
          color: "#838383",
          body: "Legs",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
          url:'/day-exercise'
        },
        {
          completed: false,
          day: "2",
          color: "#838383",
          body: "Arms",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        },
        {
          completed: false,
          day: "2",
          color: "#838383",
          body: "Back",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        },
      ],
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

    const response =  await apiGet(`/package`)

    this.subscriptions = response.data
     
    // this.$refs.listView.nativeView.refresh();
    // apiGet(`/program_detail?program_id=${this.id}`)
    // .then(this.onSuccess)
    // .catch(this.onError)

    apiMock(dataTest.package_was_not_purchased)
    .then(await this.onSuccess)
    .catch(this.onError)


  },
  methods:{

   async onSuccess(res){
      console.log("res",res);
       this.textValue.description = res.description
       this.textValue.title = res.name
      if (!res.hasOwnProperty('status_package')) {
          this.subscriptionState = false
          await apiGet('/package')
          .then(this.getSubscriptions)
          .catch(this.onError)
      }else{
        this.subscriptionState = true
        this.buttomPlay.registered = res.status_program.status
        if(res.status_package.status){

            if(res.status_program.status){
              this.exercises = this.getExercises(res.details, '/day-exercise')
            }else{
              this.exercises = this.getExercises(res.details, undefined)
            } 
        }else{
             //si se vencio sa sub
          this.exercises = this.getExercises(res.details,'/pay-subscription')
          
        }

     
      }
    
       this.loadingState = false

    },
    onError(err){
      console.log("Have Error",err);
    },
    getExercises(res,url){

        
        return res.map((exe)=>({
          id:exe.id,
          completed: exe.status,
          day: exe.number,
          body: exe.muscular_group,
          text: exe.description,
          url:url,
          props:{data:res}
        }))


    },
    getSubscriptions(res){
      this.subscriptions = res[0].map((sub)=>({
          id:sub.id,
          tittle: sub.name,
          mount:  `$${sub.amount}`,
          color: true,
          text: sub.description,
          url: '/pay-subscription',
          props:{},
          stripe_id:sub.stripe_id
      }))
    },
    processPressButtomPlay(){

        this.onSuccessPressButtom()
        // apiPost('',body)
        // .then(this.onSuccessPressButtom)
        // .catch(this.onError)
    },
    onSuccessPressButtom(){
      this.buttomPlay.registered = !this.buttomPlay.registered
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
