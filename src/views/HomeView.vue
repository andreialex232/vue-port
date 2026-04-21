<script lang="ts" setup>
    import Hero from '@/components/Hero.vue';
    import About from '@/components/About.vue';
    import Contact from '@/components/Contact.vue';
    import Projects from '@/components/Projects.vue';
    import OtherProjects from '@/components/OtherProjects.vue';
    import Techstack from '@/components/Techstack.vue';

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
        ogImage: '@/assets/images/social_media_cover3.webp',
        ogImageAlt: () => t('meta.ogImageAlt'),
        ogSiteName: 'Alex Vătui Portfolio',

        twitterCard: 'summary_large_image',
        twitterTitle: () => t('meta.twitterTitle'),
        twitterDescription: () => t('meta.twitterDescription'),
        twitterImage: '@/assets/images/social_media_cover3.webp',

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