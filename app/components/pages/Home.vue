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
          <Image src="~/assets/icons/burger_menu_icon.png" height="24" />
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
export default {
  components: {
    cardImage,
  },
  data() {
    return {
      empty: [
        {
          img: "~/assets/images/background_white.JPG",
          text: "Add Program",
          width: "100%",
          colorText: "#949494",
          height: 173,
        },
      ],
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
        {
          img: "~/assets/images/background_white.JPG",
          text: "Add Program",
          width: "100%",
          colorText: "#949494",
          height: 173,
          url: "/add-programs",
        },
      ],
      drawerState: false,
    };
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