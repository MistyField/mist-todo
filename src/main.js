import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPenToSquare,faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faCalendarCheck,faNoteSticky,faInfo,faEnvelope,faPlus,faXmark,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faWeibo } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faPenToSquare,faCalendar,faCalendarCheck,faNoteSticky,faInfo,faEnvelope,faGithub,faWeibo,faPlus,faXmark,faCircleExclamation)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-calendar', Calendar)
Vue.component('date-picker', DatePicker)

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
