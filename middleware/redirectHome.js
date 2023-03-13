// Redirige a Home
// https://nuxt.com/docs/migration/plugins-and-middleware
export default defineNuxtRouteMiddleware((to, from) => {
    return navigateTo('/')
})