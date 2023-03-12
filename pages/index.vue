<template>
    <div class="container">
        <AboutMe/>
        <div class="content">
            <main>
                <ArticleCard
                    v-for="article in articles"
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
    const articles = reactive([
        {
            title: 'Post de prueba',
            slug: 'post-de-prueba',
            date: new Date(),
        }
    ])
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