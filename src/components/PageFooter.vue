<template>
  <v-footer class="d-flex flex-column">
    <div class="d-flex align-center">
      <span>Get connected with me!</span>
      <v-divider
          class="ms-3"
          inset
          vertical
          style="color: #163268"
      ></v-divider>
      <v-btn icon>
        <font-awesome-icon icon="fa-brands fa-github" @click="openGithub" style="color: #163268"/>
      </v-btn>
      <v-btn icon>
        <font-awesome-icon icon="fa-brands fa-weibo" @click="openWeibo" style="color: #163268"/>
      </v-btn>
      <v-btn icon>
        <font-awesome-icon icon="fa-solid fa-envelope" @click="openEmail" style="color: #163268"/>
      </v-btn>
    </div>
    <div class="text-center">
      <span>{{ new Date().getFullYear() }} - MistyField</span>
    </div>
  </v-footer>
</template>

<script>
const shell = require('electron').shell;
export default {
  name: "PageFooter",
  methods: {
    openGithub() {
      shell.openExternal('https://github.com/MistyField');
    },
    openWeibo() {
      shell.openExternal('https://weibo.com/u/5242849565');
    },
    openEmail() {
      shell.openExternal('mailto:zhiyuechen20@gmail.com');
    },
  }
}
</script>

<style scoped>
.v-footer{
  background-color: rgba(245, 246, 252,50%);
}
span{
  font-family: Quicksand;
  font-size: 0.8rem;
  color: #163268;
  user-select: none;
}
v-btn{
  transition-delay:0s;
  transition-duration: 0s;
}
</style>