<template>
  <div class="input-add-postit">
    <v-btn class="add-postit" color="rgb(245, 246, 252)" block style="text-transform: none;font-family: Quicksand;font-weight: bold;font-size: 1rem" @click="addpostit">
      <font-awesome-icon icon="fa-regular fa-pen-to-square" style="color: #163268;" />
      <span style="color: #163268;">&nbsp;&nbsp;&nbsp;&nbsp;Add my Post-it!</span>
    </v-btn>
  </div>
</template>

<script>
import '@/assets/fonts/fonts.css'
import { ipcRenderer } from "electron"
export default {
  name: "AddPostit",
  methods:{
    addpostit(){
      ipcRenderer.send('load-postit-window');
    }
  }
}
</script>

<style scoped>
.input-add-postit {
  position: relative;
  display: flex;
  align-items: center;
}
.add-postit{
  transform: scale(1);
  box-shadow: 4px 4px 7px #d9d9d9, -4px -4px 7px rgb(245, 246, 252);
  transition: all .3s;
}
.add-postit:active{
  box-shadow: inset 4px 4px 7px #d9d9d9, inset -4px -4px 7px rgb(245, 246, 252);
  transition: all .3s;
  transform: scale(.95);
}
</style>