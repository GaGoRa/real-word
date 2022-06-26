<template>
<ScrollView  scrollBarIndicatorVisible="false">
  <StackLayout marginTop="4" marginLeft="24" marginRight="24"> 
       <StackLayout @tap="myFuncion" 
            v-for="(item, key) in data"
              :key="`recomended-${key}`"
              :data="item"
                borderBottomWidth="1" borderBottomColor="#E5E5E5" >
            <label marginTop="4" marginBottom="4" color="black" horizontalAlignment="center" fontSize="24" fontWeight="600" :text="item.description" /> 
       </StackLayout>
  </StackLayout>
          </ScrollView> 
</template>
<script>
export default {
  props: {
     data: {
      type: Object,
      default: [
        {
            "id": 1,
            "description": "Femenino",
            "created_at": "2022-03-17T18:40:21.000000Z",
            "updated_at": "2022-03-17T18:40:21.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "description": "Masculino",
            "created_at": "2022-03-17T20:23:06.000000Z",
            "updated_at": "2022-03-17T20:23:06.000000Z",
            "deleted_at": null
        },
        {
            "id": 1,
            "description": "Femenino",
            "created_at": "2022-03-17T18:40:21.000000Z",
            "updated_at": "2022-03-17T18:40:21.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "description": "Masculino",
            "created_at": "2022-03-17T20:23:06.000000Z",
            "updated_at": "2022-03-17T20:23:06.000000Z",
            "deleted_at": null
        },{
            "id": 1,
            "description": "Femenino",
            "created_at": "2022-03-17T18:40:21.000000Z",
            "updated_at": "2022-03-17T18:40:21.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "description": "Masculino",
            "created_at": "2022-03-17T20:23:06.000000Z",
            "updated_at": "2022-03-17T20:23:06.000000Z",
            "deleted_at": null
        },{
            "id": 1,
            "description": "Femenino",
            "created_at": "2022-03-17T18:40:21.000000Z",
            "updated_at": "2022-03-17T18:40:21.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "description": "Masculino",
            "created_at": "2022-03-17T20:23:06.000000Z",
            "updated_at": "2022-03-17T20:23:06.000000Z",
            "deleted_at": null
        },{
            "id": 1,
            "description": "Femenino",
            "created_at": "2022-03-17T18:40:21.000000Z",
            "updated_at": "2022-03-17T18:40:21.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "description": "Masculino",
            "created_at": "2022-03-17T20:23:06.000000Z",
            "updated_at": "2022-03-17T20:23:06.000000Z",
            "deleted_at": null
        }
    ],
    },
  },
  data() {
    return {};
  },
  methods: {
    myFuncion(){
      console.log('AHORAA SI');
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