<template>
  <v-alert
      v-model="alert"
      text="text"
      type="error"
      variant="outlined"
      border="top"
  >
    <p>{{this.errContent}}</p>
    <v-btn icon @click="closeAlarm"><font-awesome-icon icon="fa-solid fa-xmark" style="color:#999;" /></v-btn>
  </v-alert>
</template>

<script>
import {EventBus} from "@/utils/EventBus";
export default {
  name: "PostItAlert",
  data(){
    return{
      errContent:'',
      alert: false,
    }
  },
  methods:{
    closeAlarm(){
      this.alert = false;
    },
  },
  created() {
    EventBus.$on('toggle-alert-postit', (showAlert,err_code) => {
      if (err_code === 'empty-title'){
        this.errContent = 'The title of Post-it should not be empty.'
        this.alert = showAlert;
      }
      if (showAlert===false){
        this.alert = showAlert;
      }
    });
  },
}
</script>

<style scoped>
p{
  text-align: center;
  margin: 0;
  font-size: 0.8rem;
  font-family: Quicksand,Smileysans,"PingFang SC", "Microsoft Yahei", sans-serif;
  font-weight: bold;
  user-select: none;
  display: inline-block;
}
.v-alert{
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.v-btn{
  display: inline-block;
}
::v-deep .v-icon{
  align-self: center;
}
</style>