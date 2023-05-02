<template>
  <v-app>
    <TodoAlert></TodoAlert>
    <TodoSuccess></TodoSuccess>
    <v-main>
      <main>
        <div class="container">
            <p style="font-family: Quicksand;font-weight: bolder;font-size: 2.5rem;text-align: center;color: #163268;user-select: none">{{ gettime }}</p>
          <v-btn @click="openEdit" class="view-all" color="rgb(245, 246, 252)" block style="text-transform: none;font-family: Quicksand;font-weight: bold;font-size: 1rem">
            <font-awesome-icon icon="fa-regular fa-bookmark" style="color: #163268;" />
            <span style="color: #163268;">&nbsp;&nbsp;&nbsp;&nbsp;View your Todos and Post-its!</span>
          </v-btn>
            <h1>🥳Add your Todo!</h1>
            <AddTodo></AddTodo>
            <h1>🤩Add your Post-it!</h1>
            <AddPostit></AddPostit>
        </div>
      </main>
    </v-main>
    <PageFooter></PageFooter>
  </v-app>
</template>

<script>
import '@/assets/fonts/fonts.css'
import AddTodo from "@/components/AddTodo.vue";
import AddPostit from "@/components/AddPostit.vue";
import PageFooter from "@/components/PageFooter.vue";
import TodoAlert from "@/components/TodoAlert.vue";
import TodoSuccess from "@/components/TodoSuccess.vue";
import {ipcRenderer} from "electron";
export default {
  name: 'App',
  components: {
    TodoSuccess,
    TodoAlert,
    PageFooter,
    AddTodo,
    AddPostit
  },
  data() {
    return {
      alert: false,
      gettime: "",
    };
  },
  methods: {
    getTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      var mm =
          new Date().getMonth() > 9
              ? new Date().getMonth() + 1
              : new Date().getMonth() === 9
                  ? new Date().getMonth() + 1
                  : '0' + (new Date().getMonth() + 1);
      var dd = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
      let hh = new Date().getHours();
      let mf =
          new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss =
          new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
    },
    currentTime() {
      setInterval(this.getTime, 1000);
    },
    openEdit(){
      ipcRenderer.send('load-edit-window');
    }
  },
  mounted() {
    this.currentTime();
  },
}
</script>

<style>
::-webkit-scrollbar { display: none; }
v-app {
  min-height: 100vh;
}
main {
  display: grid;
  width: 100vw;
  padding: 10vh 0;
  align-items: start;
  justify-items: center;
  background:linear-gradient(0deg,#fff 3%,hsla(0,0%,80%,0)),linear-gradient(0deg, #E0C3FC 0%,#8EC5FC 100%);
  animation: rotate-gradient 15s ease-in-out infinite;
}
@keyframes rotate-gradient {
  0% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(0deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  5% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(18deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  10% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(36deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  15% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(54deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  20% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(72deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  25% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(90deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  30% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(108deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  35% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(126deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  40% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(144deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  45% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(162deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  50% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(180deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  55% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(198deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  60% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(216deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  65% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(234deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  70% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(252deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  75% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(270deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  80% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(288deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  85% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(306deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  90% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(324deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  95% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(342deg, #E0C3FC 0%,#8EC5FC 100%);
  }
  100% {
    background: linear-gradient(0deg,#fff 3%,hsla(0,0%,90%,0)),linear-gradient(360deg, #E0C3FC 0%,#8EC5FC 100%);
  }
}
.container {
  width: 60%;
  max-width: 700px;
  border-radius: 30px;
  padding: 48px 28px;
  background-color: rgba(245, 246, 252,25%);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px rgb(245, 246, 252);
}
h1 {
  font-family: Quicksand;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #163268;
  text-align: center;
  user-select: none;
}
.view-all{
  transform: scale(1);
  box-shadow: 4px 4px 7px #d9d9d9, -4px -4px 7px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
}
.view-all:active{
  box-shadow: inset 4px 4px 7px #d9d9d9, inset -4px -4px 7px rgb(245, 246, 252);
  transition: all ease-in-out .3s;
  transform: scale(.95);
}
</style>
