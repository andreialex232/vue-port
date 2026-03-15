<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useAbout } from '@/composables/useAbout.ts';
    import gsap from 'gsap';

    const { aboutText } = useAbout();
    const videoWord = ref(null);

    onMounted(() => {
        const tl = gsap.timeline()


        gsap.to(videoWord.value, {
            x: -300,
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "power2.inOut"
        })
    })

</script>

<template>
    <section class="grid grid-cols-12 bg-secondary text-primary h-dvh w-dvw font-secondary ">
        <!-- Core and context section -->
        <div class="flex flex-col justify-center gap-10 col-start-2 col-end-6">

            <div class="font-bold text-3xl">
                <h2>Core & Context</h2>
            </div>

            <article
                class="flex flex-col gap-2 justify-start"
                :key="item.title"
                v-for="item in aboutText">
                <h3 class="text-2xl font-semibold">
                    {{ item.title }}
                </h3>
                <p class="text-xl">
                    {{ item.description }}
                </p>
            </article>
        </div>


        <!-- VIDEO PREFERENCE SECTION -->
        <div class="col-start-6 col-end-13 flex flex-col justify-center align-center place-items-center">
            <div class="mr-75 uppercase text-rest font-semibold col-start-1">
                do you
            </div>
            <div class="mr-25 text-restrest col-start-2">
                prefer a
            </div>
            <div class="relative ml-25 flex uppercase gap-3 text-rest font-semibold col-start-3">
                <img class="bg-secondary z-100" src="../assets/svgs/video-icon.svg" width="72px" alt="">
                <p 
                    class=""
                    ref="videoWord">video</p>
            </div>
            <div class="ml-75 text-restrest col-start-4">
                instead?
            </div>
            <div class="mt-8 col-start-2">
                <button class="btn">Yes please</button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>