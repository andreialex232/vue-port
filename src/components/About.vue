<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useAbout } from '@/composables/useAbout.ts';
    import gsap from 'gsap';
    import videoSource from "@/assets/videos/cv_optimized.mp4";
    import posterForVideo from "@/assets/images/poster_for_video_cv.png";
    import { fadeIn } from '@/utils/animations';

    const { aboutText } = useAbout();
    const videoWord = ref(null);
    const isVideoVisible = ref(false);

    function deactivateVideoButton () {
        isVideoVisible.value = !isVideoVisible.value;
    }

    const getVideoCv = () => {
    const tl = gsap.timeline();

    tl.to(".desktop-video-side > div", { // Targets the text container
        x: window.innerWidth,
        duration: 0.6,
        ease: "power2.in"
    })
    .to({}, { duration: 0 }) // This is your "pause for a second"
    .fromTo(".video-section", 
        { x: window.innerWidth }, // Start position (offscreen left)
        { 
            x: 0,                   // End position (center/original)
            duration: 0.8, 
            ease: "power2.out",
            onStart: () => {
                // Ensure the video section is visible when animation starts
                gsap.set(".video-section", { opacity: 1 });
            }
        }
    );
}

    const handleGettingVideoCv = () => {
        getVideoCv();
        deactivateVideoButton();
    }

    const initAboutCardsAnimation = (data: any[]) => {
        const isMobile = window.matchMedia("(max-width:1024px)").matches;
        
        for(let i = 0; i < data.length; i++) {
            const selector = isMobile ? `.mobile_card_${i}` : `.card_${i}`;
            const n = (i % 2 === 0) ? -30 : 30;
            fadeIn(selector, 'x', n)
        }
    }
    
    onMounted(() => {
        initAboutCardsAnimation(aboutText.value);
        fadeIn(".desktop-video-side", 'y');

        gsap.set(".video-section", {
            x: window.innerWidth * 2
        })

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
            v-for="(item, index) in aboutText"
            :key="item.title"
            :class="`mobile_card_${index} font-secondary grid grid-cols-1 gap-4 p-4`">
            <article class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                <h3 class="text-xl font-bold ">{{ item.title }}</h3>
                <p class="text-md">{{ item.description }}</p>
            </article>
        </div>
    </section>

    <section aria-labelledby="desktop-heading" class="lg:mt-30 xl:pt-20 pl-6 h-dvh pt-20 desktop-section hidden lg:flex bg-secondary text-primary w-dvw lg:mb-40 xl:pb-30 font-secondary">
        <div class="flex-1 flex flex-col justify-center items-center">
            <div class="w-full max-w-2xl">
                <header class="flex justify-center items-start h-16 bg-secondary text-primary font-secondary">
                    <h2 id="desktop-heading" class="text-primary font-secondary text-4xl 2xl:text-5xl font-bold">Core & Context</h2>
                </header>
                
                <div 
                    v-for="(item, index) in aboutText"
                    :key="item.title"
                    :class="[`card_${index}`, 'font-secondary', 'grid', 'grid-cols-1', 'gap-4', 'p-4']">
                    <article class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                        <h3 class="text-xl font-bold">{{ item.title }}</h3>
                        <p class="text-md">{{ item.description }}</p>
                    </article>
                </div>
            </div>
        </div>

<aside aria-label="Alternative content format" class="relative desktop-video-side flex-1 flex flex-col justify-center items-center overflow-hidden">
    
    <div class="text-center w-fit">
        <div class="uppercase text-rest font-semibold lg:-translate-x-16 2xl:-translate-x-32 w-fit">
            do you
        </div>

        <div class="text-restrest w-fit mx-auto">
            prefer a
        </div>

        <div class="lg:pl-35 relative flex uppercase gap-3 text-rest font-semibold justify-center mt-4">
            <img loading="lazy" @click="handleGettingVideoCv" class="cursor-pointer lg:w-[60px] xl:w-[72px] bg-secondary z-100" src="../assets/svgs/video-player.svg" role="button" width="60" height="60" alt="" aria-hidden="true">
            <p class="z-50 lg:text-5xl xl:text-rest" ref="videoWord">video</p>
        </div>

        <div class="text-restrest mt-2 lg:translate-x-16 2xl:translate-x-32 w-fit ml-auto">
            instead?
        </div>

        <div class="mt-8">
            <button @click="handleGettingVideoCv" :disabled="isVideoVisible" class="btn" aria-label="Yes please, show me the video version">Yes please</button>
        </div>
    </div>

    <section class="z-100 video-section absolute inset-0 flex flex-col justify-center items-center px-8 lg:px-12 2xl:px-20">
        <div v-if="isVideoVisible" class="w-full max-w-6xl flex flex-col items-center">
            <h3 class="lg:text-2xl text-2xl font-bold pb-4 self-start">Let's Discuss the Logic: A Portfolio Introduction</h3>
            <video
                :poster="posterForVideo"
                class="object-cover w-full h-auto shadow-2xl rounded-xl border border-primary/20"
                playsinline="true"
                preload="none"
                type="video/mp4"
                controls 
                :src="videoSource">
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
</aside>
    </section>


</template>

<style scoped>
/* Ensure the parent can contain the absolute child */
.desktop-video-side {
    overflow: hidden; /* Prevents scrollbars during animation */
    position: relative;
}

/* Hide the video initially */
.video-section {
    position: absolute;
    opacity: 0; 
}
</style>