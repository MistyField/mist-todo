<template>
  <v-app>
    <v-main>
      <main>
        <div class="container">
            <p style="font-family: Quicksand;font-weight: bolder;font-size: 2.5rem;text-align: center;color: #163268;user-select: none">{{ gettime }}</p>
          <v-btn color="rgb(245, 246, 252)" block style="text-transform: none;font-family: Quicksand;font-weight: bold;font-size: 1rem">
            <font-awesome-icon icon="fa-regular fa-calendar" style="color: #163268;" />
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
export default {
  name: 'App',
  components: {
    PageFooter,
    AddTodo,
    AddPostit
  },
  data() {
    return {
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
      setInterval(this.getTime, 200);
    },

  },
  mounted() {
    this.currentTime();
  },
}
</script>

<style>
v-app {
  min-height: 100vh;
}
main {
  display: grid;
  width: 100vw;
  padding: 10vh 0;
  align-items: start;
  justify-items: center;
  background:linear-gradient(135deg, #E0C3FC 0%,#8EC5FC 100%);
}
.container {
  width: 60%;
  max-width: 700px;
  border-radius: 30px;
  padding: 48px 28px;
  background-color: rgba(245, 246, 252,50%);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
h1 {
  font-family: Quicksand;
  margin: 1.5rem 0;
  font-size: 2rem;
  color: #163268;
  text-align: center;
  user-select: none;
}
</style>
