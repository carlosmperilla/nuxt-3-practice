// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // https://nuxt.com/docs/getting-started/routing
    pages: true, // Para la configuración de las paginas.
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Miniblog',
            htmlAttrs: {
              lang: 'es',
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {
                hid: 'description',
                name: 'description',
                content: 'Miniblog - Blog Personal',
              },
              { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
          },
    },
    runtimeConfig: {
      public: {
        apiBaseUrl: '', // Definida en Varitables de entorno (producción) o .env (desarrollo) 
      }
    }
})
