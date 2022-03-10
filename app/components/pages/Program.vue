<template>
  <Page
    class="page-home"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:VideoPlayer="nativescript-videoplayer"
  >
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
            @tap="$navigator.back()"
          />
          <Image src="~/assets/icons/burger_menu_icon.png" height="24" />
        </FlexboxLayout>
      </StackLayout>
    </ActionBar>
    <ScrollView>
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
            text="Arm Blaster"
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
        <TextView row="3" col="0" editable="false">
          <FormattedString>
            <Span
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            />
          </FormattedString>
        </TextView>

        <FlexboxLayout
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
        </FlexboxLayout>

        <FlexboxLayout
          col="0"
          row="5"
          marginTop="8"
          backgroundColor="transparent"
          justifyContent="center"
        >
          <Button
            borderRadius="16"
            marginTop=""
            fontSize="20"
            text="Stop"
            backgroundColor="red"
            width="200"
            height="48"
            fontWeight="900"
            color="white"
            marginBottom="8"
          />
        </FlexboxLayout>

        <StackLayout col="0" row="6" marginTop="16" marginRight="16">
          <StackLayout v-if="true">
            <CardSubscriptionProgram
              v-for="(item, key) in subscriptions"
              :key="`subscription-${key}`"
              :data="item"
              marginBottom="16"
            />
          </StackLayout>
          <StackLayout v-else>
            <CardExercise
              v-for="(item, key) in exercises"
              :key="`exercise-${key}`"
              :data="item"
              marginBottom="12"
            />
          </StackLayout>
        </StackLayout>
      </GridLayout>
    </ScrollView>
  </Page>
</template>
<script>
import CardSubscriptionProgram from "~/components/components/boxes/CardSubscriptionProgram.vue";
import CardExercise from "~/components/components/boxes/CardExercise.vue";
export default {
  components: {
    CardSubscriptionProgram,
    CardExercise,
  },
  data() {
    return {
      program: [
        {
          img: "~/assets/images/File_010.JPG",
          text: " ",
          width: "100%",
          colorText: "#949494",
          height: 248,
        },
      ],
      subscriptions: [
        {
          tittle: "Gold Subscription",
          mount: "$25.32",
          color: "#EAB813",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        },
        {
          tittle: "One Time Purchase",
          mount: "$199.42",
          color: "#838383",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
        },
      ],
      exercises: [
        {
          completed: true,
          day: "1",
          color: "#838383",
          body: "Legs",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
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