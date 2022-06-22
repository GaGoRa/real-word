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
          <Image
            src="~/assets/icons/Icon feather-arrow-left-circle.png"
            height="40"
            width="40"
            @tap="$navigator.navigate('/home')"
          />
          <Image src="~/assets/icons/burger_menu_icon.png" height="24" />
        </FlexboxLayout>
      </StackLayout>
    </ActionBar>
    <ScrollView>
      <GridLayout marginTop="24" columns="*" rows="*,*">
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
            text="Recommended For You"
          />
        </StackLayout>
        <StackLayout
          marginLeft="8"
          col="0"
          row="1"
          marginTop="16"
          backgroundColor="transparent"
          paddingRight="24"
        >
          <cardImage
            v-for="(item, key) in recommendated_programs"
            :key="`recommendated-${key}`"
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
      recommendated_programs: [
        {
          img: "~/assets/images/File_010.JPG",
          text: "ANIMAL",
          width: "100%",
          height: 192,
          url: "/program",
          colorText: "white",
        },
        {
          img: "~/assets/images/SQUAT.JPG",
          text: "LEG DESTRUCTION",
          width: "100%",
          height: 192,
          url: "/program",
          colorText: "white",
        },
        {
          img: "~/assets/images/File_014.JPG",
          text: "ANIMAL",
          width: "100%",
          height: 192,
          url: "/program",
          colorText: "white",
        },
        {
          img: "~/assets/images/File_010.JPG",
          text: "LEG DESTRUCTION",
          width: "100%",
          height: 192,
          url: "/program",
          colorText: "white",
        },
      ],
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