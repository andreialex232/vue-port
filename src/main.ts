/* import { createApp } from 'vue' */
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import './style.css'
import i18n from './i18n'

import App from './App.vue'
import { routes } from './router'

const GTM_ID = 'GTM-PTQZVXPF'

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, head }) => {

        const pinia = createPinia();

        app.use(pinia);
        app.use(i18n);

        // Defer GTM initialization to not block FCP
        if (typeof window !== 'undefined') {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => injectGTM(head), { timeout: 2000 });
            } else {
                (window as any).addEventListener('load', () => injectGTM(head), { once: true });
            }
        }
    }
)

function injectGTM(head: any) {
    head?.push({
        script: [
            {
                key: 'gtm-init',
                innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}')`,
            },
        ],
        noscript: [
            {
                key: 'gtm-noscript',
                innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            },
        ],
    })
}

/* const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app') */
