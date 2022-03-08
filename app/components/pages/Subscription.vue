<template>
  <Page class="seccion-register-bg-invert">
    <ActionBar
      marginTop="16"
      title=""
      backgroundColor="transparent"
      flat="true"
      marginBottom="16"
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
          height="14"
        >
          <Label
            textAlignment="center"
            text="Subscription"
            fontSize="24"
            color="white"
            fontWeight="900"
            paddingTop="0"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

    <StackLayout>
      <CardSubscription
        v-for="(item, key) in subscriptions"
        :key="`subscription-${key}`"
        :data="item"
        marginBottom="16"
      />
    </StackLayout>
  </Page>
</template>

<script>
import CardSubscription from "~/components/components/boxes/CardSubscription.vue";
export default {
  components: {
    CardSubscription,
  },
  data() {
    return {
      subscriptions: [
        {
          tittle: "Gold Subscription",
          mount: "$27.99",
          color: "#EAB813",
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