<template>
  <StackLayout marginTop="48" marginLeft="0">

    <FlexboxLayout
      marginTop="32"
      class="bg-label"
      marginBottom="32"
      justifyContent="flex-start"
    >
      <StackLayout
        marginRight="24"
        width="70%"
        backgroundImage="~/assets/icons/barra.png"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <Label
          marginLeft="24"
          color="#FFFFFF"
          fontSize="24"
          fontWeight="900"
          text="Community"
        />
      </StackLayout>
       
      <StackLayout marginRight="24">
        <Image
          src="~/assets/icons/Icon feather-arrow-right-circle - copia.png"
          height="40"
          width="40"
          @tap="tapCloseDrawer"
        /> 
      </StackLayout>
      
    </FlexboxLayout>
    <GridLayout columns="*" rows="auto, *">
      <StackLayout row="0" col="0">
        <Label  
          v-if="!!errorsMessage.errorMessage" 
          :text="errorsMessage.errorMessage" 
          fontSize="16" 
          fontWeight="400"
          textAlignment="left" 
          color="red" 
          marginLeft="32" 
          marginTop="0" 
          marginBottom="0" 
        /> 

        <TextField
          v-model="textValue.search"
          color="#949494"
          marginBottom="16"
          marginLeft="14"
          marginRight="16"
          hint="Search"
          borderRadius="10"
          backgroundColor="#FFFFFF"
          height="44"
          @textChange="onChangeFilter"
        />
      </StackLayout>
      <StackLayout row="1" col="0">
        <ScrollView >
          <StackLayout >
            <CardPost v-for="(item, key) in CardPosts"
              :key="`cardPost-${key}`"
              :data="item"
              marginBottom="16"
            />
          </StackLayout >
        </ScrollView >
      </StackLayout>

    </GridLayout>

  </StackLayout>
</template>
<script>
import { mapMutations } from "vuex";
import { apiGet } from "~/resource/http";
import { hideKeyboard} from '../../../resource/helper' 
import CardPost from "../boxes/cardPost.vue"

export default {
  components:{
    CardPost
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      textValue:{
        search:''
      },
      errorsMessage:{
        errorMessage:''
      },
      CardPosts:[{
         url:null,
         props:{},
         colorText:"black",
         title:'',
         text:"",
         color:"#a9a9a9",
         class: 'label_skeleton',
         img:''
  
  },
        {
         url:null,
         props:{},
         colorText:"black",
         title:'',
         text:"",
         color:"#a9a9a9",
         class: 'label_skeleton',
         img:''
        },
        {
         url:null,
         props:{},
         colorText:"black",
         title:'',
         text:"",
         color:"#a9a9a9",
         class: 'label_skeleton',
         img:''
        },
        ]
        ,CardPostsSearch:[]
      
    
    };
  },
  methods: {
    ...mapMutations(["toggleSwitchMenu"]),
    tapCloseDrawer(){
        hideKeyboard()
       this.toggleSwitchMenu(false)
    },
  
  onSuccess(res){
    this.CardPosts = this.getCardPost(res[0])
    this.CardPostsSearch = this.getCardPost(res[0])
  },
  onError(err){
    console.log("err",err);
    this.errorsMessage.errorMessage = "Have a error"
  },
  getCardPost(res){
    return res.map( data=>({
         url:null,
         props:{},
         colorText:"black",
         title:data.title,
         text:data.content,
         color:"#FFFFFF",
         class: '',
         img: data.banner_url

    }))
  },
   onChangeFilter(){
       
       let search = String(this.textValue.search).trim().toUpperCase()
       this.CardPosts =  this.CardPostsSearch.filter((Post)=>{
            let cardPost = String(Post.title).trim().toUpperCase();
            return !!cardPost.match(search)
      })
  }



  },
  computed:{
   
  },

  created(){
    apiGet("/blogpost")
    .then(this.onSuccess)
    .catch(this.onError)
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