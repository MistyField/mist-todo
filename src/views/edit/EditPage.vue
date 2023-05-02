<template>
<v-app>
  <v-main class="container">
      <v-card class="type-tab" style="width: 60vw;border-radius: 5px">
        <v-tabs
            v-model="tab"
            align-tabs="center"
            grow
            centered
            color="#163268"
            background-color="rgba(245, 246, 252,25%)"
        >
          <v-tab :value="1"><font-awesome-icon icon="fa-regular fa-calendar" style="font-size: 1.5rem" /><span>&nbsp;Todo</span></v-tab>
          <v-tab :value="2"><font-awesome-icon icon="fa-regular fa-note-sticky" style="font-size: 1.5rem" /><span>&nbsp;Post it</span></v-tab>
        </v-tabs>
      </v-card>
  </v-main>
  <page-footer></page-footer>
</v-app>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "EditPage",
  components: { PageFooter},
  data: () => ({
    tab: null,
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
  font-size: 1.5rem;
  text-transform: none;
}
.type-tab{
  background-color: rgba(245, 246, 252,25%);
}
</style>
<style src="./scrollbar.css"></style>