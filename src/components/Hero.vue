<script lang="ts" setup>
    import videoSource from "@/assets/videos/ninety-dark.mp4"; 
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";
    import { ref, onMounted, watch } from "vue";
    import { useI18n } from "vue-i18n";

    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    const kindOfDev = ref(null);
    let devKindTl: gsap.core.Timeline | null = null;
    const { t, locale, tm } = useI18n()

    const initAnimation = ():void => {
        if(devKindTl) {
            devKindTl.kill()
            gsap.set(kindOfDev.value, {
                text: ""
            })
        }

        const roles = tm('hero.devRoles') as string[];

        devKindTl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to(kindOfDev.value, { text: roles[0], ease: "none", duration: 1.2 })
        .to({}, { duration: 2 })
        .to(kindOfDev.value, { duration: 0.8, text: "", ease: "power2.inOut" })
        .to(kindOfDev.value, { duration: 1.2, text: roles[1], ease: "none" })
        .to({}, { duration: 2 })
        .to(kindOfDev.value, { duration: 0.8, text: "", ease: "power2.inOut" });

        ScrollTrigger.create({
            trigger: ".video-container",
            start: "top center",
            onEnter: () => devKindTl?.play(),
            onEnterBack: () => devKindTl?.play(),
            onLeave: () => devKindTl?.pause(),
            onLeaveBack: () => devKindTl?.pause(),
            id: "heroTextTrigger"
        });
    }

    onMounted(() => {
        initAnimation()
    });

    watch(locale, () => {
        initAnimation()
    });
</script>

<template>
    <header class="video-container tracking-tighter relative h-dvh w-full overflow-hidden">
        <video
            fetchpriority="high"
            class="absolute -z-10 w-full h-full object-cover pointer-events-none" 
            :src="videoSource"
            playsinline autoplay loop muted preload="auto"
            aria-hidden="true"
            title="Background atmospheric video">
        </video>

        <section class="font-primary py-12 md:py-20 grid h-full w-full grid-cols-12 grid-rows-6 md:grid-rows-4 px-6 md:px-12">
            
            <div class="pt-20 md:pt-0 col-span-12 row-start-1 text-center">
                <h1 class="uppercase font-secondary tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-nume leading-none">
                    alex 
                    <span class="-mr-[0.15em]">v</span>
                    <span class="-mr-[0.15em]">ă</span>
                    <span>tui</span>
                </h1>
            </div>

            <div class="text-xl sm:text-2xl md:text-3xl row-start-3 md:row-start-2 col-start-2 col-span-8 md:col-start-1 md:col-span-3 lg:col-start-3 lg:col-span-3 text-left self-center">
                <div 
                    ref="kindOfDev" 
                    aria-live="polite"
                    class="text-lg sm:text-restrest h-[1.2em] flex items-end leading-none"></div>
                <p class="text-4xl italic sm:text-rest font-medium">{{ $t('hero.devSuffix') }}</p>
            </div>

            <div class="mt-20 md:mt-0 flex flex-col text-xl sm:text-2xl md:text-3xl row-start-4 md:row-start-3 col-start-5 md:col-start-6 col-span-7 lg:col-start-8 lg:col-span-3 items-end self-center">
                <p class="text-lg sm:text-restrest">{{ $t('hero.locationPrefix') }}</p>
                <address class="not-italic text-4xl italic text-dan sm:text-rest font-medium">{{ $t('hero.locationName') }}</address>
            </div>

            <p class="text-base md:text-xl pt-10 font-secondary row-start-6 md:row-start-4 text-center col-span-12 self-end md:self-auto">
                {{ $t('hero.status') }}
            </p>
        </section>
    </header>
</template>

<style scoped>
/* Ensure the GSAP text doesn't cause layout shift */
.text-restrest {
    display: block;
}
</style>