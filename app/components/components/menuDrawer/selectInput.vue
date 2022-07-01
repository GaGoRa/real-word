<template>
 <StackLayout>
    <StackLayout marginRight="12" marginLeft="12" orientation="horizontal"  borderRadius="12" height="40" backgroundColor="#FFFFFF"
                    color="#FFFFFF" marginBottom="0" paddingLeft="16" paddingRight="32" class="stack-layout-btn" @tap="toggleSelectDrawer">
                        <Label verticalAlignment="middle"  horizontalAlignment="center" :text="hint" marginTop="4"  fontSize="12" color="black" />
                    </StackLayout>
 
 </StackLayout>

</template>
<script>
import SelectDrawer from "~/components/components/menuDrawer/selectDrawer";

export default {
  components: {
    SelectDrawer
  },
  props: {
     hint: {
      type: String,
      default: '',
    },
     drawerState: {
      default: false,
    },
  },
  data() {
    return {
        selectDrawerState: false
    };
  },
  methods: {
     toggleSelectDrawer(){
        this.$emit('toggleSelectDrawer','bottom')
        this.drawerState = true
    }
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