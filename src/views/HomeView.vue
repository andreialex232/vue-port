<script lang="ts" setup>
    import { defineAsyncComponent } from 'vue';
    import Hero from '@/components/Hero.vue';
    import coverImg from '@/assets/images/social_media_cover3.webp';

    // Lazy-load below-fold components to reduce initial bundle
    const About = defineAsyncComponent(() => import('@/components/About.vue'));
    const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'));
    const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
    const OtherProjects = defineAsyncComponent(() => import('@/components/OtherProjects.vue'));
    const Techstack = defineAsyncComponent(() => import('@/components/Techstack.vue'));

    import { useHead, useSeoMeta } from '@unhead/vue';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();

    useSeoMeta({
        title: () => t('meta.title'),
        description: () => t('meta.description'),
        author: 'Alex Andrei Vătui',

        ogType: 'website',
        ogUrl: 'vatuialex.com',
        ogTitle: () => t('meta.ogTitle'),
        ogDescription: () => t('meta.ogDescription'),
        ogImage: coverImg,
        ogImageAlt: () => t('meta.ogImageAlt'),
        ogSiteName: 'Alex Vătui Portfolio',

        twitterCard: 'summary_large_image',
        twitterTitle: () => t('meta.twitterTitle'),
        twitterDescription: () => t('meta.twitterDescription'),
        twitterImage: coverImg,

        robots: 'index, follow'
    })

    useHead({
        htmlAttrs: {
            lang: () => locale.value
        },
        link: [
            {
                rel: 'canonical',
                href: 'https://vatuialex.com'
            }
        ]
    })
</script>

<template>
    <Hero></Hero>
    <main>
        <About></About>
        <Projects></Projects>
        <OtherProjects></OtherProjects>
        <Techstack></Techstack>
        <Contact></Contact>
    </main>
</template>

<style scoped>

</style>