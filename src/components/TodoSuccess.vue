<template>
  <v-alert
      v-model="success"
      text="text"
      type="success"
      variant="outlined"
      border="top"
  ><p>{{this.Content}}</p>
    <v-btn icon @click="closeAlert"><font-awesome-icon icon="fa-solid fa-xmark" style="color:#999;" /></v-btn></v-alert>
</template>

<script>
import {EventBus} from "@/utils/EventBus";
export default {
  name: "TodoSuccess",
  data(){
    return{
      Content:'',
      success: false,
    }
  },
  methods:{
    closeAlert(){
      this.success = false;
    },
  },
  created() {
    EventBus.$on('toggle-success', (showAlert,content) => {
      if (showAlert === true){
        this.Content = 'Your Todo "' + content + '" has been added.'
        this.success = showAlert;
      }
      if (showAlert===false){
        this.success = showAlert;
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