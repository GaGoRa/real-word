<template>
  <Page class="page-home" actionBarHidden="true">

    <StackLayout :marginTop="getMarginOS">
    <NavBarBurgerMenu :isBell="false"/>
    <ScrollView>
      <GridLayout marginTop="0" columns="*" rows="*,*">
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
            :text="data.title"
          />
        </StackLayout>
        <StackLayout
          marginLeft="8"
          col="0"
          row="1"
          marginTop="16"
          backgroundColor="transparent"
          paddingRight="8"
        >

            <Label  v-if="!!errorsMessage.errorMessage" :text="errorsMessage.errorMessage" fontSize="16" fontWeight="400"
                        textAlignment="center" color="red" marginLeft="32" marginTop="0" marginBottom="16" /> 

          

          <cardImage
            v-for="(item, key) in list_programs"
            :key="`list-${key}`"
            :data="item"
            marginBottom="16"
          />
        </StackLayout>
      </GridLayout>
    </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import cardImage from "~/components/components/boxes/cardImage";
import NavBarBurgerMenu from "../components/NavBar/NavBarBurgerMenu.vue";
import {DEFAULT_LIST_PROGRAMS} from "../../resource/constans"
import { apiGet,baseUrl } from "~/resource/http";
import helMixin from "~/mixins/help.js"
export default {
mixins:[helMixin],
  components: {
    cardImage,
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
      errorsMessage:{
        errorMessage:''
      },
      list_programs: DEFAULT_LIST_PROGRAMS,
    };
  },
  created()
  {

  apiGet(`/home_display?${this.data.params.key}=${this.data.params.value}`)
  .then(this.onSuccess)
  .catch(this.onError)

  },
  methods:{
    onSuccess(res){
      this.list_programs = !!res.data.length ? this.generateImageCard(res.data,"100%",192): DEFAULT_LIST_PROGRAMS

    },
    onError(res){
      this.errorsMessage.errorMessage = "Hava a error" + res
    },
     generateImageCard(res,width,height){
         return res.map( (res) => ({
          img: `${baseUrl}/storage/${res.image}`, 
          text: `${res.name}`,
          width: width,
          colorText: "#FFFFFF",
          height: height,
          url: "/program",
          props:{id:res.id}
        }))
      
       

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