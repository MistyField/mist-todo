import Vue from 'vue'
import PostIt from "@/views/post_it/PostIt.vue";
import vuetify from '@/plugins/vuetify'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope,faUpload,faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faWeibo } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope,faGithub,faWeibo,faUpload,faXmark)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
    vuetify,
    render: h => h(PostIt)
}).$mount('#app')