<template>
  <Page class="page-home">
      <ActionBar marginTop="16"
            height="64" title="" backgroundColor="transparent" flat="true">
            <StackLayout  >
            <FlexboxLayout justifyContent="space-between" paddingRight="24" width="100%" >
                <Image src="~/assets/icons/bell_icon.png" height="24" />
                <Image src="~/assets/icons/burger_menu_icon.png" height="24" />
            </FlexboxLayout>
            </StackLayout>
                
        </ActionBar>
         <ScrollView marginLeft="24" >
            <GridLayout columns="*" rows="*,*,*,*,*,*,*,*">
                 <StackLayout col="0" row="0" marginTop="28"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="24" fontWeight="900"
                        text="Popular programs"/>
                </StackLayout>
               <ScrollView col="0" row="1" scrollBarIndicatorVisible="false"
                    orientation="horizontal">
                    <GridLayout class="m-5" columns="auto auto auto">
                        <StackLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img1.jpg"
                            height="150" width="275" marginRight="32"
                            col="0" >

                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                            </StackLayout>
                        <StackLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img2.jpg"
                            height="150" width="275" marginRight="32"
                            col="1" >
                            
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                            </StackLayout>
                        <StackLayout borderRadius="20" class="bg"
                           backgroundImage="~/assets/images/img3.jpg"
                            height="150" width="275" marginRight="32"
                            col="2" >
                            </StackLayout>
                    </GridLayout>
                </ScrollView>
                <StackLayout col="0" row="2" marginTop="4" marginBottom="16"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="16" textDecoration="underline"
                        horizontalAlignment="center" text="View all"/>
                </StackLayout>
                <StackLayout col="0" row="3" marginTop="4"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="24" fontWeight="900"
                        text="Recommended For You"
                        backgroundColor="transparent"/>
                        

                </StackLayout>
                <ScrollView col="0" row="4" scrollBarIndicatorVisible="false"
                    orientation="horizontal">
                    <GridLayout marginTop="16" columns="auto auto auto ">
                        <StackLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img4.jpg"
                            height="124" width="264" col="0" marginRight="20">
                            
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                            </StackLayout>
                        <StackLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img5.jpg"
                            height="124" width="264" marginRight="20"
                            col="1" >
                            
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                            </StackLayout>
                        <StackLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img6.jpg"
                            height="124" width="264" marginRight="20"
                            col="2" >
                            
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                            
                        </StackLayout>
                    </GridLayout>
                </ScrollView>

                <StackLayout col="0" row="5" marginTop="16" marginBottom="16"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="16" horizontalAlignment="center"
                        textDecoration="underline" text=" View All" />
                </StackLayout>

                <StackLayout col="0" row="6" marginTop="16"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="24" fontWeight="900"
                        text="My programs" />
                </StackLayout>
                <StackLayout col="0" row="7" marginTop="16" backgroundColor="red" paddingRight="24">
                    <StackLayout borderRadius="20" class="bg"
                        backgroundImage="~/assets/images/img7.jpg"
                        height="150" width="100%" marginBottom="16" col="0" >
                        
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                     </StackLayout>
                    <StackLayout borderRadius="20" class="bg"
                        backgroundImage="~/assets/images/img8.jpg"
                        height="150" width="100%" marginBottom="16" col="1" >
                        
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                        </StackLayout>
                    <StackLayout borderRadius="20" class="bg" 
                        backgroundImage="~/assets/images/img1.jpg"
                        height="150" width="100%" marginBottom="16" col="2" >
                        
                             <Label color="white" fontSize="32" fontWeight="900" textDecoration="underline"
                            horizontalAlignment="center" text="Ejemplo"/>

                    </StackLayout>
                    
                </StackLayout>
            </GridLayout>
        </ScrollView> 
    </Page>
</template>
<script>
    export default {
        data() {
            return {};
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