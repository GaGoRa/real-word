<template>
  <Page class="page-home"  actionBarHidden="true">
    
    <StackLayout :marginTop="getMarginOS">
      <NavBarBurgerMenu :isBell="true" :ismenu="true" />
    <ScrollView>
      <GridLayout  columns="*" rows="*,*,*,*,*,*,*,*">
        <FlexboxLayout
          col="0"
          row="0"
          marginTop="8"
          marginBottom="8"
          backgroundColor="transparent"
        >
          <Label
            marginLeft="24"
            color="#949494"
            fontSize="24"
            fontWeight="900"
            text="Popular programs"
            marginRight="0"
          />
          <Image
            src="~/assets/icons/bars_label.png"
            height="24"
            @tap="$refs.drawer.open(right)"
          />
        </FlexboxLayout>
        <!-- Populars Programs -->
        <ScrollView
          col="0"
          row="1"
          scrollBarIndicatorVisible="false"
          orientation="horizontal"
        >
          <StackLayout class="m-5" orientation="horizontal">
            <cardImage
              v-for="(item, key) in poular_programs"
              :key="`popular-${key}`"
              :data="item"
              marginLeft="18"
            />
          </StackLayout>
        </ScrollView>
        <StackLayout
          col="0"
          row="2"
          marginTop="4"
          marginBottom="16"
          backgroundColor="transparent"
        >
          <Label
            marginLeft="24"
            color="#FFFFFF"
            fontSize="14"
            textDecoration="underline"
            horizontalAlignment="center"
            @tap="$navigator.navigate('/list-programs',
            {props:
            {data:
            getPropsListProgram('popular','all','Popular programs')
            }
            
            })"
            text="View all"
          />
        </StackLayout>
        <StackLayout
          col="0"
          row="3"
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
            text="Recommended For You"
          />
        </StackLayout>
        <!-- Recomendated for you -->
        <ScrollView
          col="0"
          row="4"
          scrollBarIndicatorVisible="false"
          orientation="horizontal"
        >
          <StackLayout class="m-5" marginTop="16" orientation="horizontal">
            <cardImage
              v-for="(item, key) in recommended"
              :key="`recomended-${key}`"
              :data="item"
              marginLeft="18"
            />
          </StackLayout>
        </ScrollView>

        <StackLayout
          col="0"
          row="5"
          marginTop="16"
          marginBottom="8"
          backgroundColor="transparent"
        >
          <Label
            color="#FFFFFF"
            fontSize="14"
            horizontalAlignment="center"
            textDecoration="underline"
            @tap="$navigator.navigate('/list-programs',{props:{data:
            getPropsListProgram('recommended','all','Recommended For You')}})"
            text=" View All"
          />
        </StackLayout>

        <FlexboxLayout
          col="0"
          row="6"
          marginTop="8"
        >
          <Image
            marginLeft="24"
            src="~/assets/icons/bars_label.png"
            height="24"
          />
          <Label
            color="#949494"
            fontSize="24"
            fontWeight="900"
            text="My programs"
            marginRight="0"
            paddingRight="0"
          />
        </FlexboxLayout>
        <!-- My programs Programs -->

        <StackLayout
          paddingLeft="8"
          col="0"
          row="7"
          marginTop="16"
          paddingRight="8"
        >
          <cardImage
            v-for="(item, key) in myprograms"
            :key="`recomended-${key}`"
            :data="item"
            marginBottom="16"
            horizontalAlignment="center"
            marginLeft="8"
          />

        </StackLayout>
      </GridLayout>
    </ScrollView>
    </StackLayout>

  </Page>
</template>
<script>
import cardImage from "~/components/components/boxes/cardImage.vue";
import BurgerMenu from "~/components/components/menuDrawer/burgerMenu.vue";
import BellMenu from "~/components/components/menuDrawer/bellMenu.vue";
import CardProgram from "~/components/components/boxes/CardProgram.vue";
import { apiGet ,baseUrl } from "~/resource/http";
import NavBarBurgerMenu from "../components/NavBar/NavBarBurgerMenu.vue";
import RightDrawer from "~/components/components/menuDrawer/rightDrawer";
import LeftDrawer from "~/components/components/menuDrawer/leftDrawer";
import { ApplicationSettings , } from '@nativescript/core';
import * as application from "@nativescript/core/application";
import help from '~/mixins/help'

import {DEFAULT_POPULAR_PROGRAMS,DEFAULT_RECOMMENDATED,DEFAULT_MY_PROGRAMS_LOADING, getDefaultMyPrograms
} from "../../resource/constans"

export default {
  mixins:[help],
  components: {
    RightDrawer,
    LeftDrawer,
    NavBarBurgerMenu,
    cardImage,
    BurgerMenu,
    CardProgram,
    BellMenu
  },
  computed:{
    // getMarginOS(){ //enviado a mixin
    //   return global.isIOS ? '0' : '0' 
    // }
  },
  data() {
    return {
      loading:false,
      poular_programs:DEFAULT_POPULAR_PROGRAMS,
      recommended: DEFAULT_RECOMMENDATED,
      myprograms: DEFAULT_MY_PROGRAMS_LOADING,
     
    };
  },
  methods:{

    onSuccess(res){
      this.poular_programs = !!res.data.popular.length ? this.generateImageCard(res.data.popular,275,192): DEFAULT_POPULAR_PROGRAMS
      this.recommended = !!res.data.recommended.length ? this.generateImageCard(res.data.recommended,275,96) : DEFAULT_RECOMMENDATED
      this.myprograms = !!res.data.my_programs.length ?  this.generateImageCard(res.data.my_programs,'90%',192) : getDefaultMyPrograms({data:this.getPropsListProgram('todos','all','Add programs')})

    },
    onError(err){
                    alert({
              cancelable:true,
              message: "Sorry have Error , please retry login",
              okButtonText: "OK",
              theme:5
      }).then(() => {
            ApplicationSettings.remove("userProfile")
            if (application.android) {
                application.android.foregroundActivity.finish();
              } else {
                 exit(0);
                    }
            console.log("error se elimino datos de usuario se neceita re login" , err);
          });
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
    getIdUser(){
      return JSON.parse(ApplicationSettings.getString('userProfile',"{}")).user.id
    },
    getPropsListProgram(key,value,title){
      return {
          params:{
            key:key,
           value:value},
          id:this.getIdUser(),
          title:title
      }
    } 
  },
  created(){

      apiGet(`/home_display`)
      .then(this.onSuccess)
      .catch(this.onError)

  },
  mounted(){
  },
   
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