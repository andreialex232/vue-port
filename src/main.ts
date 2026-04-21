/* import { createApp } from 'vue' */
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import './style.css'
import i18n from './i18n'

import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router }) => {

        const pinia = createPinia();

        app.use(pinia);
        app.use(i18n);
    }
)

/* const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app') */
