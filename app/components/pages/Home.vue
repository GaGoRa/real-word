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
         <ScrollView  >
            <GridLayout columns="*" rows="*,*,*,*,*,*,*,*">
                 <FlexboxLayout   col="0" row="0" marginTop="28"
                    backgroundColor="transparent">
                    <Label marginLeft="24" color="white" fontSize="24" fontWeight="900"
                        text="Popular programs" marginRight="0"/>
                        <Image src="~/assets/icons/bars_label.png" height="24" />
                </FlexboxLayout>
               <ScrollView  col="0" row="1" scrollBarIndicatorVisible="false"
                    orientation="horizontal">
                    <GridLayout class="m-5" columns="auto auto auto">
                        <FlexboxLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img1.jpg"
                            height="150" width="275" marginRight="32"
                            col="0"  alignItems="flex-end" justifyContent="center" >

                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center"  text="ARM BLASTER"/>

                            </FlexboxLayout>
                        <FlexboxLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img2.jpg"
                            height="150" width="275" marginRight="32"
                            col="1"  alignItems="flex-end" justifyContent="center" >
                            
                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center"  text="ARM BLASTER"/>

                            </FlexboxLayout>
                        <FlexboxLayout borderRadius="20" class="bg"
                           backgroundImage="~/assets/images/img3.jpg"
                            height="150" width="275"  alignItems="flex-end" justifyContent="center" marginRight="32"
                            col="2" >
                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center"  text="ARM BLASTER"/>
                            </FlexboxLayout>
                    </GridLayout>
                </ScrollView>
                <StackLayout col="0" row="2" marginTop="4" marginBottom="16"
                    backgroundColor="transparent" >
                    <Label marginLeft="24" color="white" fontSize="14" textDecoration="underline"
                        horizontalAlignment="center" text="View all"/>
                         
                </StackLayout>
                <StackLayout col="0" row="3" marginTop="4"
                    backgroundColor="transparent" backgroundImage="~/assets/icons/background_label.png" class="bg-label">
                    <Label marginLeft="24" color="white" fontSize="24" fontWeight="900"
                        text="Recommended For You" 
                        
                        />
                </StackLayout>
                <ScrollView  col="0" row="4" scrollBarIndicatorVisible="false"
                    orientation="horizontal">
                    <GridLayout  marginLeft="5" marginTop="16" columns="auto auto auto ">
                        <FlexboxLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img4.jpg"
                            height="124" width="264" col="0" marginRight="20"  alignItems="flex-end" justifyContent="center" >
                            
                             <Label color="white" fontSize="32" fontWeight="900"
                            horizontalAlignment="center" text="ARM BLASTER"/>

                            </FlexboxLayout>
                        <FlexboxLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img5.jpg"
                            height="124" width="264" marginRight="20"
                            col="1"   alignItems="flex-end" justifyContent="center">
                            
                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center" text="ARM BLASTER"/>

                            </FlexboxLayout>
                        <FlexboxLayout borderRadius="20" class="bg"
                            backgroundImage="~/assets/images/img6.jpg"
                            height="124" width="264" marginRight="20"
                            col="2" alignItems="flex-end" justifyContent="center">
                            
                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center"  text="ARM BLASTER"/>

                            
                        </FlexboxLayout>
                    </GridLayout>
                </ScrollView>

                <StackLayout col="0" row="5" marginTop="16" marginBottom="8"
                    backgroundColor="transparent">
                    <Label color="white" fontSize="14" horizontalAlignment="center" 
                        textDecoration="underline" text=" View All" />
                </StackLayout>

                <FlexboxLayout col="0" row="6" marginTop="8"
                    backgroundColor="transparent" >
                         <Image marginLeft="24" src="~/assets/icons/bars_label.png" height="24" />
                    <Label  color="white" fontSize="24" fontWeight="900"
                        text="My programs"   marginRight="0"  paddingRight="0"/>
                </FlexboxLayout>
                <StackLayout marginLeft="24" col="0" row="7" marginTop="16" backgroundColor="transparent" paddingRight="24">
                    <FlexboxLayout borderRadius="20" class="bg"
                        backgroundImage="~/assets/images/img7.jpg"
                        height="150" width="100%" marginBottom="16" col="0"  alignItems="flex-end" justifyContent="center" >
                        
                             <Label color="white" fontSize="32" fontWeight="900"
                            horizontalAlignment="center" text="ANIMAL"/>

                     </FlexboxLayout>
                    <FlexboxLayout borderRadius="20" class="bg"
                        backgroundImage="~/assets/images/img8.jpg"
                        height="150" width="100%" marginBottom="16" col="1"  alignItems="flex-end" justifyContent="center" >
                        
                             <Label color="white" fontSize="32" fontWeight="900" 
                            horizontalAlignment="center"  text="ANIMAL"/>

                        </FlexboxLayout>
                    <FlexboxLayout borderRadius="20" class="bg" 
                        backgroundImage="~/assets/images/img1.jpg"
                        height="150" width="100%" marginBottom="16" col="2"  alignItems="flex-end" justifyContent="center" >
                        
                             <Label color="white" fontSize="32" fontWeight="900"
                            horizontalAlignment="center"  text="ANIMAL"/>

                    </FlexboxLayout>
                    
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