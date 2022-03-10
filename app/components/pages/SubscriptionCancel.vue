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
    <StackLayout marginLeft="16" marginTop="16" marginRight="16">
      <DropDown
        paddingLeft="24"
        paddingRight="24"
        color="grey"
        marginBottom="4"
        hint="Reason for cancelation"
        borderRadius="10"
        selectedIndex="0"
        :items="reason_items"
        backgroundColor="white"
        height="36"
      />

      <TextView
        class="comment-TextView"
        editable="true"
        borderRadius="16"
        hint="Comments"
        width="100%"
        color="grey"
        backgroundColor="white"
        height="128 "
      />

      <FlexboxLayout
        marginTop="16"
        backgroundColor="transparent"
        justifyContent="center"
      >
        <Button
          borderRadius="16"
          fontSize="20"
          text="Cancel Subscription"
          backgroundColor="red"
          width="240"
          height="48"
          fontWeight="900"
          color="white"
          marginBottom="8"
        />
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      reason_items: ["Reason for cancelation", "Australia", "Belgium"],
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