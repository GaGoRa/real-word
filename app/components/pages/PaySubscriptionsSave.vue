<template>
  <Page
  backgroundColor="white"
    class=""
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
    <StackLayout  marginRight="24" >
      <GridLayout marginTop="24" columns="*" rows="auto,auto,auto,auto,auto,auto,auto">
         <StackLayout
          col="0"
          row="0"
          marginTop="4"
          backgroundImage="~/assets/icons/background_label.png"
          class="bg-label"
        >
          <Label
            marginLeft="24"
            color="#FFFFFF"
            fontSize="24"
            fontWeight="900"
            text="Gold Subscription"
          />
        </StackLayout>
          <StackLayout  col="0"
          row="1">
        <FlexboxLayout
          marginTop="16"
          marginBottom="14"
        >
          <Image
            marginLeft="24"
            src="~/assets/icons/icon_details.png"
            height="24"
          />

          <Label
            paddingTop="2"
            marginLeft="8"
            color="#FFFFFF"
            fontSize="17"
            fontWeight="400"
            text="DETAILS"
          />
        </FlexboxLayout>
        </StackLayout>

        <TextView col="0"  marginLeft="24" row="2" marginBottom="24" editable="false">
          <FormattedString>
            <Span
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            />
          </FormattedString>
        </TextView>
        
        <FlexboxLayout row="3" col="0" marginBottom="16" justifyContent="center" >
           <StackLayout>
            <Label 

              padding="14"
                marginRight="8"
              color="#FFFFFF"
              fontSize="16"
              fontWeight="500"
              text="Monthly"
            />
          </StackLayout>

          <Label
              marginRight="8"
              color="#FFFFFF"
              fontSize="32"
              fontWeight="900"
              text="$27.99"
            />
        </FlexboxLayout>

      <StackLayout   marginRight="16" marginLeft="16" col="0" row="4">
      
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Card holder Name"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="16"
        hint="Credit Card #"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
      />
      <StackLayout>
          <FlexboxLayout >
          <TextField
        color="#949494"
        marginBottom="6"
        marginLeft="14"
        marginRight="8"
        hint="Expiration Date"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
        width="50%"
      />
        <TextField
        color="#949494"
        marginBottom="6"
        marginLeft=""
        marginRight="16"
        hint="CVV"
        borderRadius="10"
        backgroundColor="#FFFFFF"
        height="36"
        width="50%"
      />

      
        <!-- Bottoms-->

        

        </FlexboxLayout>

      
           
          <FlexboxLayout marginLeft="16" > 
              <Label  marginRight="8"
              color="#FFFFFF"
              fontSize="14"
              fontWeight="500" text="Save credit card for future purchases"></Label>


          </FlexboxLayout>
          <FlexboxLayout 
         marginTop="16" marginLeft="16" paddingBottom="8" marginBottom="16" justifyContent="space-between">
             <StackLayout width="45%" orientation="horizontal"   borderRadius="12" height="40" backgroundColor="#000000"
                     paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                            <Image src="~/assets/icons/btn_apple.png" padding="4" height="40"  margin="0" />
                        
                    </StackLayout>

                      <StackLayout width="45%"   orientation="horizontal"  borderRadius="12" height="40" backgroundColor="#F7BE37"
                    paddingLeft="32" paddingRight="32" class="stack-layout-btn">
                        <Image padding="4" src="~/assets/icons/btn_paypal.png"  height="32" margin="0" />
                        
                    </StackLayout>
                    </FlexboxLayout>
              
              <FlexboxLayout > 
               <Label
              marginRight="8"
              color="#FFFFFF"
              fontSize="16"
              fontWeight="500"
              marginLeft="16"
              text="By clicking on Purchase you accept terms & Conditions"
            />

          </FlexboxLayout>


      </StackLayout>
        
       
        </StackLayout>

        
        <StackLayout col="0" row="5">
                   
       <Button
        borderRadius="12"
        marginTop="16"
        fontSize="16"
        text="Purchase"
        backgroundColor="red"
        width="200"
        height="40"
        fontWeight="900"
        color="#FFFFFF"
        marginBottom="32"
        @tap="$navigator.navigate('/home')"
      />
        </StackLayout>

       

       
      </GridLayout>
       </StackLayout>
  </Page>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      }
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