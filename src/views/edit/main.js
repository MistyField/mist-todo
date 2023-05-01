import Vue from 'vue'
import EditPage from "@/views/edit/EditPage.vue";
import vuetify from '@/plugins/vuetify'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faNoteSticky,faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faWeibo } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope,faGithub,faWeibo,faNoteSticky,faCalendar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
    vuetify,
    render: h => h(EditPage)
}).$mount('#app')