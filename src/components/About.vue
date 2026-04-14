<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useAbout } from '@/composables/useAbout.ts';
    import gsap from 'gsap';
    import videoSource from "@/assets/videos/ninety-dark.mp4"

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
    
    onMounted(() => {
            gsap.set(".video-section", {
        x: window.innerWidth * 2
    })
        const tl = gsap.timeline()

        for (let i = 0; i < 3; i++) {
            const startingX = (i % 2 === 0) ? -20 : 20;

            gsap.fromTo(`.card_${i}`, 
            { 
                x: startingX, 
                opacity: 0 
            }, 
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power1.inOut",
                scrollTrigger: {
                    markers: false,
                    trigger: `.card_${i}`, 
                    start: "top 90%",    
                    toggleActions: "play none none none",
                }
            });
        }

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
            class="font-secondary grid grid-cols-1 gap-4 p-4">
            <article class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                <h3 class="text-xl font-bold ">{{ item.title }}</h3>
                <p class="text-md">{{ item.description }}</p>
            </article>
        </div>
    </section>

    <section aria-labelledby="desktop-heading" class="pl-6 h-dvh mt-10 desktop-section hidden lg:flex bg-secondary text-primary w-dvw pb-30 font-secondary">
        <div class="flex-1 flex flex-col justify-center items-center">
            <div class="w-full max-w-2xl">
                <header class="flex justify-center items-start h-16 bg-secondary text-primary font-secondary mb-10">
                    <h2 id="desktop-heading" class="text-primary font-secondary text-2xl font-bold">Core & Context</h2>
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
            <img class="lg:w-[60px] xl:w-[72px] bg-secondary z-100" src="../assets/svgs/video-player.svg" width="60" height="60" alt="" aria-hidden="true">
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
        <div class="w-full max-w-6xl; flex flex-col items-center">
            <h3 class="lg:text-2xl text-2xl font-bold pb-4 self-start">Let's Discuss the Logic: A Portfolio Introduction</h3>
            <video 
                class="w-full h-auto shadow-2xl rounded-xl border border-primary/20" 
                controls 
                :src="videoSource">
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Centers it perfectly */
    opacity: 0; 
}
</style>