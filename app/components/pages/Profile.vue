<template>
  <Page class="page-home">
    <ActionBar
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
            text="Profile"
            fontSize="24"
            color="white"
            fontWeight="900"
            paddingTop="2"
          />
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

    <StackLayout marginRight="24" backgroundColor="blue" marginLeft="24">
      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
    </StackLayout>
    <StackLayout marginRight="24" marginTop="32" marginLeft="24">
      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="General Information?"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="First Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Middle Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Last Name"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Date of birth"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Gender"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="Contact Information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Phone #"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Email"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Address"
        borderRadius="10"
        backgroundColor="white"
        height="36"
      />

      <Label
        marginLeft="16"
        marginTop="8"
        color="white"
        text="Fitness information"
        fontWeight="900"
        fontSize="16"
        textAlignment="left"
      />

      <Button
        borderRadius="16"
        marginTop="32"
        fontSize="16"
        text="Save"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="white"
        marginBottom="32"
        @tap="$navigator.navigate('/home')"
      />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
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