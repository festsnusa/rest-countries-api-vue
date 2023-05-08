import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

library.add(faMoon, faSearch, faArrowLeft)

import './assets/main.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
