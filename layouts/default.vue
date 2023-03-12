// https://nuxt.com/docs/guide/directory-structure/layouts#enabling-the-default-layout
<template>
    <div class="layout-default">
        <header>
            <menu>
                <NuxtLink to="/">Mini Blog</NuxtLink>
                <NuxtLink to="/">Acerca de mí</NuxtLink>
            </menu>
        </header>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .layout-default {
        @apply min-h-full;
        header {
            @apply sticky absolute top-0 bg-white z-10;
            menu {
                @apply m-auto flex justify-between items-center w-full max-w-5xl px-4 py-6;
            }
            .brand {
                @apply font-bold text-2xl;
            }
        }
    }
</style>