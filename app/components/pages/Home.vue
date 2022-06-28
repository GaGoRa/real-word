<template>
  <Page class="page-home">
    <ActionBar
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
          <Image src="~/assets/icons/bell_icon.png" height="24" />
          <BurgerMenu />
        </FlexboxLayout>
      </StackLayout>
    </ActionBar>
    <ScrollView>
      <GridLayout columns="*" rows="*,*,*,*,*,*,*,*">
        <FlexboxLayout
          col="0"
          row="0"
          marginTop="28"
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
            color="white"
            fontSize="14"
            textDecoration="underline"
            horizontalAlignment="center"
            @tap="$navigator.navigate('/popular-programs')"
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
            color="white"
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
            color="white"
            fontSize="14"
            horizontalAlignment="center"
            textDecoration="underline"
            @tap="$navigator.navigate('/recommended-programs')"
            text=" View All"
          />
        </StackLayout>

        <FlexboxLayout
          col="0"
          row="6"
          marginTop="8"
          backgroundColor="transparent"
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
          marginLeft="8"
          col="0"
          row="7"
          marginTop="16"
          backgroundColor="transparent"
          paddingRight="24"
        >
          <cardImage
            v-for="(item, key) in myprograms"
            :key="`recomended-${key}`"
            :data="item"
            marginBottom="16"
          />

        </StackLayout>
      </GridLayout>
    </ScrollView>
  </Page>
</template>
<script>
import cardImage from "~/components/components/boxes/cardImage";
import BurgerMenu from "~/components/components/menuDrawer/burgerMenu.vue";
import CardProgram from "~/components/components/boxes/CardProgram.vue";
import { apiGet ,baseUrl } from "~/resource/http";
import cache from "~/store/cache/cache.android";
import {DEFAULT_POPULAR_PROGRAMS,DEFAULT_RECOMMENDATED,DEFAULT_MY_PROGRAMS,
} from "../../resource/constans"

export default {
  components: {
    cardImage,
    BurgerMenu,
    CardProgram,
  },
  data() {
    return {
      loading:false,
      poular_programs: [
        {
          img: "~/assets/images/File_010.JPG",
          text: "ARM BLASTER",
          width: 275,
          colorText: "white",
          height: 192,
          url: "/program",
        },
        {
          img: "~/assets/images/File_010.JPG",
          text: "ARM BLASTER",
          width: 275,
          colorText: "white",
          url: "/program",
          height: 192,
        },
        {
          img: "~/assets/images/File_010.JPG",
          text: "ARM BLASTER",
          width: 275,
          colorText: "white",
          url: "/program",
          height: 192,
        },
      ],
      recommended: [
        {
          img: "~/assets/images/File_014.JPG",
          text: "ARM BLASTER",
          width: 275,
          height: 96,
          url: "/program",
          colorText: "white",
        },
        {
          img: "~/assets/images/SQUAT.JPG",
          text: "ARM BLASTER",
          width: 275,
          height: 96,
          url: "/program",
          colorText: "white",
        },
        {
          img: "~/assets/images/File_014.JPG",
          text: "ARM BLASTER",
          width: 275,
          height: 96,
          url: "/program",
          colorText: "white",
        },
      ],
      myprograms: [
        {
          img: "~/assets/images/File_000.JPG",
          text: "ARM BLASTER",
          width: "100%",
          colorText: "white",
          url: "/program",
          height: 173,
        },
        {
          img: "~/assets/images/IMG_2215.JPG",
          text: "ARM BLASTER",
          width: "100%",
          colorText: "white",
          url: "/program",
          height: 173,
        },
        {
          img: "~/assets/images/File_019.JPG",
          text: "ARM BLASTER",
          width: "100%",
          colorText: "white",
          url: "/program",
          height: 173,
        },
        
      ],
     
    };
  },
  methods:{
    onSuccess(res){
      console.log("!!res[2].length",!!res[0].length);
      this.poular_programs = !!res[0].length ? this.generateImageCard(res[0]): DEFAULT_POPULAR_PROGRAMS
      this.recommended = !!res[1].length ? this.generateImageCard(res[1]) : DEFAULT_RECOMMENDATED
      this.myprograms = !!res[2].length ?  this.generateImageCard(res[2]) : DEFAULT_MY_PROGRAMS


    },
    onError(err){
        console.log('err',err);
                    alert({
              cancelable:true,
              message: "Sorry have Error",
              okButtonText: "OK",
              theme:5
      }).then(() => {
            console.log("error" , err);
          });
    },

     generateImageCard(res){
         return res.map( (res) => ({
          img: `${baseUrl}/storage/${res.image}`, 
          text: `${res.name}`,
          width: 275,
          colorText: "white",
          height: 192,
          url: "/program",
          props:{id:res.id}
        }))
      
       

    },
  },
  created(){
    const dataCache = cache.get("userProfile")
    let data = JSON.parse(dataCache)
      apiGet(`/home_display?user=${data.user.id}`)
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