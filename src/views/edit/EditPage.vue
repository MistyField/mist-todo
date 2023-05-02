<template>
<v-app>
  <v-main class="container" style="padding: 10vh 0;">
      <v-card class="type-tab" style="width: 60vw;border-radius: 5px;box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px rgb(245, 246, 252);">
        <v-tabs
            v-model="tab"
            align-tabs="center"
            grow
            centered
            color="#163268"
            background-color="rgba(245, 246, 252,25%)"
        >
          <v-tab key="todo"><font-awesome-icon icon="fa-regular fa-calendar" style="font-size: 1.5rem" /><span style="font-size: 1.5rem;font-weight: bold;">&nbsp;Todo</span></v-tab>
          <v-tab key="post-it"><font-awesome-icon icon="fa-regular fa-note-sticky" style="font-size: 1.5rem" /><span style="font-size: 1.5rem;font-weight: bold;">&nbsp;Post it</span></v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" style="background-color: rgba(245, 246, 252,50%);">
          <v-tab-item key="todo">
            <v-tabs
                v-model="subtab"
                align-tabs="center"
                grow
                centered
                color="#163268"
                background-color="rgba(245, 246, 252,10%)"
            >
              <v-tab key="unfinished"><font-awesome-icon icon="fa-solid fa-table-list" style="font-size: 1rem" /><span style="font-size: 1rem;font-weight: bold;">&nbsp;Unfinished</span></v-tab>
              <v-tab key="completed"><font-awesome-icon icon="fa-regular fa-calendar-check" style="font-size: 1rem" /><span style="font-size: 1rem;font-weight: bold;">&nbsp;Completed</span></v-tab>
            </v-tabs>
            <v-tabs-items v-model="subtab" style="background-color: rgba(245, 246, 252,50%);">
              <v-tab-item key="unfinished">
                <v-card flat color="rgba(245, 246, 252,25%)" class="d-flex flex-row justify-center align-center bordered">
                  <v-card-text>
                    <div>
                      <h1 style="font-family: Opensans,Smileysans;font-weight: bold;font-size: 1rem;color: #163268">吃饭</h1>
                    </div>
                    <v-list-item-subtitle style="font-family: Quicksand;font-weight: bold;">10hr left</v-list-item-subtitle>
                  </v-card-text>
                  <v-card-actions class="d-flex flex-column justify-center align-center" style="height: 100%;">
                    <v-btn class="align-self-end"><span style="font-weight: bold;color: #163268">I'm done</span></v-btn>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item key="completed">
                <v-card flat color="rgba(245, 246, 252,25%)">
                  <v-card-text>
                    <div>
                      <h1 style="font-family: Opensans,Smileysans;font-weight: bold;font-size: 1rem;color: #163268;font-style: italic;text-decoration:line-through;">run</h1>
                    </div>
                  </v-card-text>
                </v-card>
                <v-card flat color="rgba(245, 246, 252,25%)">
                  <v-card-text>
                    <div>
                      <h1 style="font-family: Opensans,Smileysans;font-weight: bold;font-size: 1rem;color: #163268;font-style: italic;text-decoration:line-through;">run</h1>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tab-item>
          <v-tab-item key="post-it">
            <v-card flat color="rgba(245, 246, 252,25%)" class="d-flex flex-row justify-center align-center">
              <v-card-text>
                <div>
                  <h1 style="font-family: Opensans,Smileysans;font-weight: bold;font-size: 1rem;color: #163268">吃饭</h1>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex flex-column justify-center align-center" style="height: 100%;">
                <v-btn class="align-self-end"><span style="font-weight: bold;color: #163268">Edit</span></v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
  </v-main>
  <page-footer></page-footer>
</v-app>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import '@/assets/fonts/fonts.css'

export default {
  name: "EditPage",
  components: { PageFooter},
  data: () => ({
    tab: null,
    subtab:null,
  }),
}
</script>

<style scoped>
::-webkit-scrollbar { display: none; }
v-app {
  min-height: 100vh;
}
.container{
  background:linear-gradient(0deg,#fff 3%,hsla(0,0%,80%,0)),linear-gradient(0deg, #E0C3FC 0%,#8EC5FC 100%);
  animation: rotate-gradient 15s ease-in-out infinite;
  min-width: 100vw;
  display: grid;
  align-items: start;
  justify-items: center;
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
.type-tab{

}
span{
  font-family: Quicksand;
  text-transform: none;
}
.type-tab{
  background-color: rgba(245, 246, 252,25%);
}
</style>
<style src="./scrollbar.css"></style>