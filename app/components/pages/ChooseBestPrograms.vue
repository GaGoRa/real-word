<template>
    <Page  class="seccion-register-bg-invert" actionBarHidden="true">
      <StackLayout v-if="loadingState" marginTop="32"  marginRight="16" >
      <GridLayout marginTop="24" columns="*" rows="*,*,*"> 
         <ActivityIndicator 
          marginTop="16"
          :busy="loadingState" 
            />
      </GridLayout>
    </StackLayout>
        <FlexboxLayout v-else flexDirection="column" justifyContent="center">

            <StackLayout marginRight="24" marginLeft="24">
                <FlexboxLayout   
                  marginRight="12"
                 flexDirection="column"
                 alignItems="flex-end" 
                 justifyContent="center" >
                     <Label text="SKIP" fontSize="16" marginRight="4" fontWeight="300"
                    color="#949494" />
                <Image @tap="tapSkipChooseProgram"
                
                src="~/assets/icons/icon_arrow_next.png" height="48" width="48" />
                </FlexboxLayout>

                <Label text="Let us help you"  horizontalAlignment="center" fontSize="24" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="4" />

                <Label textWrap="true" text="Choose the right program for you" fontSize="40" fontWeight="900"
                    textAlignment="center" color="#949494" marginBottom="16" />
                
                <TextField 
                  class="form_input"
                  marginBottom="6"
                  marginLeft="14" 
                  marginRight="16" 
                  :hint="gender" 
                  editable="false"
                  @tap="onTapGender"
                />
               
                <StackLayout v-if="!ios">
                      <TextField 
                        editable="false" 
                        @tap="onTapDataPicker" 
                         class="form_input"
                        marginBottom="6"
                        marginLeft="14"
                        marginRight="16" 
                        :hint="textValue.date_of_birth == '' ? 'Date of birth':fecha(textValue.date_of_birth)"
                      />
                </StackLayout>
         
          <StackLayout v-else marginRight="16" marginLeft="16"> 
            <GridLayout height="50" columns="*,*,*" >
              <TextField 
                col="0"
               
                marginLeft="0"
                marginRight="4" 
                v-model="date_of_birth.dia"
                textAlign="center"
                maxLength="2" 
                hint="00"
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
              <TextField 
                col="1"
               
                marginLeft="4"
                marginRight="4" 
                v-model="date_of_birth.mes"
                textAlign="center"
                hint="00"
                maxLength="2" 
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
              <TextField 
                col="2"
                
                marginLeft="4"
                marginRight="0" 
                v-model="date_of_birth.ano"
                textAlign="center"
                hint="0000"
                maxLength="4" 
                borderRadius="10" 
                backgroundColor="#FFFFFF" 
                class="form_input" 
                keyboardType="datetime"
              />
            </GridLayout >
            
          </StackLayout>

                 <TextField 
                  class="form_input"
                  marginBottom="6"
                  marginLeft="14" 
                  marginRight="16" 
                  :hint="experience" 
                  editable="false"
                  @tap="onTapExperience"
                />
                    <Label marginLeft="16" marginTop="8" color="#949494" text="What’s your main reason for joining?" fontSize="16" 
                    textAlignment="left"  />

                <TextField 
                  class="form_input"
                  marginBottom="6"
                  marginLeft="14" 
                  marginRight="16" 
                  :hint="reason" 
                  editable="false"
                  @tap="onTapReason"
                />

                <TextField 
                  class="form_input"
                  marginBottom="6"
                  marginLeft="14" 
                  marginRight="16" 
                  borderRadius="10" 
                  :hint="exercise" 
                  editable="false"
                  @tap="onTapExcersice"
                />
                   <Label  marginLeft="16" marginTop="8" color="#949494" text="How often do you want to work out?" fontSize="16" 
                    textAlignment="left" />

                    <TextField 
                  class="form_input"

                  marginBottom="6"
                  marginLeft="14" 
                  marginRight="16" 
                  :hint="frequency" 
                  editable="false"
                  @tap="onTapFrecuence"
                />
                  <StackLayout v-if="loading" marginTop="16" marginBottom="16"  marginRight="16" >
         
                <ActivityIndicator :busy="loading"  />
                </StackLayout>
                <Button borderRadius="16" marginTop="16" fontSize="16"
                    text="Save" backgroundColor="red" width="200"
                    height="40" fontWeight="900" color="#FFFFFF"
                    marginBottom="32" @tap="processUserUpdate"/>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import { apiPost,apiGet} from '~/resource/http';
import { ApplicationSettings ,isIOS,Dialogs} from '@nativescript/core';
import moment from 'moment'
import { hideKeyboard,getdateIOS} from '../../resource/helper'
import {  dateFormat_YYYYMMDD} from '../../resource/helper'
  export default {
      data(){
          return {

              items_selectPicker_gender:[
                  "Gender",
                  "Male",
                  "Felame",
                  "Undetermined",
              ],
              items_selectPicker_experience:[
                  "How experienced are you?",
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_reason:[
                  "Select one", 
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_where_exercise:[
                  "Where do you exercise",
                  "1",
                  "2",
                  "3",
              ],
              items_selectPicker_concurrence:[
                  "Select one",
                  "1",
                  "2",
                  "3",
              ],
            
            textValue:{
                gender_id: 0 ,
                date_of_birth:"",
                experience_id:"",
                reason_id:"",
                frequency_id:"",
                exercise_place_id:"",
            },
            gender: 'Gender',
            experience: "How experienced are you?",
            reason: "Select one",
            exercise: "Where do you exercise",
            frequency: "Select one",
            loadingState:true,
            loading:false,
            date_of_birth:{
            dia:15, 
            mes:12, 
            ano: 1991
      },
          }
      },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
      ios(){
      return global.isIOS

    },
    },
    
    filters: {
      datefilter: function (value) {
        return moment(value).format('MM-DD-YYYY')
      }
    },
    methods:{
        tapSkipChooseProgram(){
          hideKeyboard()
          this.$navigator.navigate('/home',{clearHistory:true})
        },
        processUserUpdate(){
              this.loading = true
           const dataCache = JSON.parse( ApplicationSettings.getString('userProfile',"{}"))

          const date_birthIOS = getdateIOS( this.date_of_birth.ano,this.date_of_birth.mes,this.date_of_birth.dia)


            let body = {
                    "user_id": dataCache.user.id ,
                    "gender_id":this.textValue.gender_id ,
                    "date_of_birth":dateFormat_YYYYMMDD(this.textValue.date_of_birth) ,
                    "experience_id":this.textValue.experience_id ,
                    "reason_id":this.textValue.reason_id ,
                    "frequency_id":this.textValue.frequency_id ,
                    "exercise_place_id":this.textValue.exercise_place_id 
                }
                 if(isIOS){
          body = {...body,
          date_of_birth:  dateFormat_YYYYMMDD(date_birthIOS)
          }
        }


            if (Object.keys(body).length !== 0){
           
              apiPost(body,"/update_user")
              .then(this.onSuccess)
              .catch(this.onError)
              
           }else{
            hideKeyboard()
            this.$navigator.navigate('/home',{clearHistory:true})
           }
        },
        onSuccess(res){
            this.loading = false
            hideKeyboard()
            ApplicationSettings.setString("userProfile",JSON.stringify(res.data))
            this.$navigator.navigate('/home',{clearHistory:true})


        },
        onError(err){
            hideKeyboard()
            this.loading = false
                alert({
                        title: "Error Message",
                        message: "there is an error to update",
                        okButtonText: "ok"
                    }).then(function () {
                        console.log("Error",err);
                    });
        },
        async onTapGender(){
          
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker_gender, 
                              key: 'description',
                              value: this.textValue.gender_id
                            } })

          this.textValue.gender_id = data.id
          this.gender = data.description

        },
        async onTapExperience(){
          
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker_experience, 
                              key: 'description',
                              value: this.textValue.experience_id
                            } })

          this.textValue.experience_id = data.id
          this.experience = data.description

        },
        async onTapReason(){
          
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker_reason, 
                              key: 'description',
                              value: this.textValue.reason_id
                            } })

          this.textValue.reason_id = data.id
          this.reason = data.description

        },

        async onTapExcersice(){
          
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker_where_exercise, 
                              key: 'description',
                              value: this.textValue.exercise_place_id
                            } })

          this.textValue.exercise_place_id = data.id
          this.exercise = data.description

        },
        async onTapFrecuence(){
          
          const data = await this.$navigator.modal('/list_select',{ frame: 'modalNavigator', 
                            props:{ 
                              data: this.items_selectPicker_concurrence, 
                              key: 'description',
                              value: this.textValue.frequency_id
                            } })

          this.textValue.frequency_id = data.id
          this.frequency = data.description

        },
        async  onTapDataPicker(){
          const data = await this.$navigator.modal('/date',{id:"mimodal",props:{value: this.textValue.date_of_birth  }})
          this.textValue.date_of_birth = data
          this.$forceUpdate()
        },
        fecha(value){
           return moment(value).format('MM/DD/YYYY')
        },
         alertDialog(err){
            Dialogs.alert({
              message: "Have a problem , close the app and try again",
              okButtonText: 'OK',
              theme:5
      }).then(()=>{
          console.log("Have a problem", err);
      });

          }
    },
    created (){
        const genderResource = apiGet("/gender")
        const experienceResource = apiGet("/experience")
        const exercisePlaceResource = apiGet("/exercise_place")
        const reasonResource = apiGet("/reason")
        const concurrenceResource = apiGet("/frequency")
       
       Promise.all([
            genderResource,
            experienceResource,
            exercisePlaceResource,
            reasonResource,
            concurrenceResource
            ]).then( (value )=>{
                this.items_selectPicker_gender = value[0][0]
                this.items_selectPicker_experience = value[1][0]
                this.items_selectPicker_reason = value[2][0]
                this.items_selectPicker_where_exercise = value[3][0]
                this.items_selectPicker_concurrence = value[4][0]
                  this.loadingState = false  
            }).catch(err =>{
              alertDialog(err)
                    console.log('err',err,typeof err);
            })
             
    }

     
  };


</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
