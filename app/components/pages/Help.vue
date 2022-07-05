<template>
  <Page class="seccion-register-bg-invert">
    <!-- <ActionBar
      marginTop="16"
      title=""
      backgroundColor="transparent"
      flat="true"
    >
      <FlexboxLayout
        marginTop="32"
        class="bg-label"
        justifyContent="flex-start"
      >
        <StackLayout marginRight="64">
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
        </StackLayout>
        <StackLayout
          width="100%"
          backgroundImage="~/assets/icons/Group_403.png"
          class="bg-label"
          height="12"
        >
          <Label
            textAlignment="center"
            text="Help"
            fontSize="22"
            color="#FFFFFF"
            fontWeight="900"
            paddingTop="0"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>
 -->
    <StackLayout :marginTop="getMarginOS">
   <NavBar :data="navbar" :ismenu="false" />

    <ScrollView>
      <StackLayout marginRight="16" marginTop="16" marginLeft="16">
        <TextField
          height="38"
          v-model="textFieldValue"
          hint="Search"
          backgroundColor="#FFFFFF"
          borderRadius="10"
          marginButtom="16"
          @returnPress="buscar"
        />

        <HelpComponent
          v-for="(item, key) in items_FAQ"
          :key="`help-${key}`"
          :data="item"
          v-show="!loading"
        />
        <ActivityIndicator 
          marginTop="16"
          :busy="loading" 
        />
      </StackLayout>
    </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HelpComponent from "~/components/components/HelpComponent.vue";
import { apiPost,apiGet} from '~/resource/http';
export default {
  components: {
    HelpComponent,
    NavBar
  },
  data() {
    return {
      navbar:{
        title:"History"
      },
      frequentlyaskedquestion: [], 
      loading: true, 
      textFieldValue: null,
      // items_FAQ: [
      //   {
      //     title: "How to register?",
      //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      //     open: false,
      //   },
      //   {
      //     title: "How to register?",
      //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      //     open: false,
      //   },
      //   {
      //     title: "How to register?",
      //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      //     open: false,
      //   },

      //   {
      //     title: "How to register?",
      //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      //     open: false,
      //   },
      // ],
    };
  },
  computed:{
    getMarginOS(){
      return global.isIOS ? '0' : '32' 
    },

    items_FAQ(){
      let arr = []
      this.frequentlyaskedquestion.forEach((e)=>{
        arr.push({
          id: e.id,
          title: e.question,
          text: e.answer,
          open: false,
        })
      })
      return arr
    }
  },
  async mounted(){
    this.frequentlyaskedquestion = await apiGet("/frequentlyaskedquestion")
    this.loading = false
    console.log(frequentlyaskedquestion)
  },
  methods:{
    async buscar(){
      console.log('buscando')
      this.loading = true
      if(this.textFieldValue){
        this.frequentlyaskedquestion = await apiGet(`/frequentlyaskedquestion?search=${this.textFieldValue}`)
      }else{
        this.frequentlyaskedquestion = await apiGet(`/frequentlyaskedquestion`)
      }
      console.log('buscando',this.frequentlyaskedquestion)
      this.loading = false
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