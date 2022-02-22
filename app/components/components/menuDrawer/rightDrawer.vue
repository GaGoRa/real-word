<template>                
<AbsoluteLayout>
    <StackLayout marginLeft="24" marginRight="24">
        <StackLayout marginTop="32" marginBottom="32" backgroundColor="red" >
            <Label  text="Menu"  fontSize="24" color="white"  fontWeight="900"/>
        </StackLayout>
        <Label  text="Profile"  fontSize="16"  @tap="$navigator.navigate('/profile')" marginBottom="16" fontWeight="900" />
        <Label  text="Payments"  fontSize="16"  @tap="$navigator.navigate('/payments')" marginBottom="16" fontWeight="900" />
        <Label  text="Purchase History"  fontSize="16"  @tap="$navigator.navigate('/purchase-history')" marginBottom="16" fontWeight="900" />
        <Label  text="Subscription"  fontSize="16"  @tap="$navigator.navigate('/subscription')" marginBottom="16" fontWeight="900" />
        <Label  text="help"  fontSize="16"  @tap="$navigator.navigate('/help')" marginBottom="16" fontWeight="900" />
        <Label  text="Logout"  fontSize="16"  @tap="$navigator.navigate('/logout')" marginBottom="16" fontWeight="900" />


    </StackLayout>

</AbsoluteLayout>
                   
                        
                    
</template>
<script>
    export default {
        props:{
            data:{
                type: Object,
                default: {}
            }
        },
        data() {
            return {
              
            };
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