<template>
    <div class="container">
        <AboutMe/>
        <div class="content">
            <main>
                <ArticleCard
                    v-for="article in getArticles"
                    :key="article.slug"
                    :="article"
                />
            </main>
        </div>
    </div>
</template>

<script setup>
    // Nuxt importa automaticamente al componente.
    // Mientras este en /components
    // https://nuxt.com/docs/guide/concepts/auto-imports
    // import AboutMe from '~/components/AboutMe.vue'
    const config = useRuntimeConfig()
    const hostName = config.public.apiBaseUrl

    const url = `${hostName}/.netlify/functions/articles`

    const { data: { value: { articles }}} = await useAsyncData('articles', () => $fetch(url), {
        pick: ['articles'],
        transform(data) {
            // Para respuestas JSON no parseadas
            if (typeof data === 'string') {
                return JSON.parse(data)
            }
            return data
        }
    })

    const getArticles = computed(() => {
        return articles.map((a) => ({
            // Hacemos copia de los datos en a
            ...a,
            // Sobreescribimos author, date y cover.
            // Para tener un acceso más directo a los datos.
            author: a['author-name'][0],
            date: new Date(a.updated),
            cover: a.cover[0]?.thumbnails.large.url,
        }))
    })    
</script>

<style lang="scss">
    .container {
        @apply m-auto;
    }
    .container .content {
        @apply flex flex-col justify-center items-center sm:p-2 md:p-4 lg:p-8 xl:p-16;
            main {
                @apply max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
            }
    }
</style>