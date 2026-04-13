<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useAbout } from '@/composables/useAbout.ts';
    import gsap from 'gsap';

    const { aboutText } = useAbout();
    const videoWord = ref(null);

    onMounted(() => {
        const tl = gsap.timeline()


        gsap.to(videoWord.value, {
            xPercent: -155,
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "power1.inOut"
        })
    })

</script>

<template>
    <section aria-labelledby="mobile-heading" class="mt-10 mb-20 lg:hidden">
        <div class="flex justify-center items-center h-16 bg-secondary text-primary font-secondary">
            <h2 id="mobile-heading" class="text-primary font-secondary text-2xl font-bold mb-4">Core & Context</h2>
        </div>
        
        <div 
            v-for="item in aboutText"
            :key="item.title"
            class="font-secondary grid grid-cols-1 gap-4 p-4">
            <article class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                <h3 class="text-xl font-bold ">{{ item.title }}</h3>
                <p class="text-md">{{ item.description }}</p>
            </article>
        </div>
    </section>

    <section aria-labelledby="desktop-heading" class="hidden lg:flex bg-secondary text-primary w-dvw pb-30 font-secondary">
        <div class="flex-1 flex flex-col justify-center items-center px-8">
            <div class="w-full max-w-2xl">
                <header class="flex justify-center items-center h-16 bg-secondary text-primary font-secondary mb-4">
                    <h2 id="desktop-heading" class="text-primary font-secondary text-2xl font-bold">Core & Context</h2>
                </header>
                
                <div 
                    v-for="item in aboutText"
                    :key="item.title"
                    class="font-secondary grid grid-cols-1 gap-4 p-4">
                    <article class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                        <h3 class="text-xl font-bold">{{ item.title }}</h3>
                        <p class="text-md">{{ item.description }}</p>
                    </article>
                </div>
            </div>
        </div>

        <aside aria-label="Alternative content format" class="flex-1 flex flex-col justify-center items-center">
            <div class="text-center w-fit">
                
                <div class="uppercase text-rest font-semibold lg:-translate-x-16 2xl:-translate-x-32 w-fit">
                    do you
                </div>

                <div class="text-restrest w-fit mx-auto">
                    prefer a
                </div>

                <div class="relative flex uppercase gap-3 text-rest font-semibold justify-center mt-4">
                    <img class="lg:w-[60px] xl:w-[72px] bg-secondary z-100" src="../assets/svgs/video-player.svg" width="60" height="60" alt="" aria-hidden="true">
                    <p class="lg:text-5xl xl:text-rest" ref="videoWord">video</p>
                </div>

                <div class="text-restrest mt-2 lg:translate-x-16 2xl:translate-x-32 w-fit ml-auto">
                    instead?
                </div>

                <div class="mt-8">
                    <button class="btn" aria-label="Yes please, show me the video version">Yes please</button>
                </div>
            </div>
        </aside>
    </section>
</template>

<style scoped>

</style>