<script lang="ts" setup>
    import video from "@/assets/videos/ninety-dark.mp4";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import TextPlugin from "gsap/TextPlugin";
    import { ref, onMounted } from "vue";
    gsap.registerPlugin(TextPlugin); 
    gsap.registerPlugin(ScrollTrigger);
    const kindOfDev = ref(null);

    onMounted(() => {
        // Switching from creative to front end animation
        const devKindTl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to(kindOfDev.value, {
            text: "Front End",
            ease: "none",
            duration: 1.2
        })
        .to({}, {
            duration: 2
        })
        .to(kindOfDev.value, {
            duration: 0.8,
            text: "",
            ease: "power2.inOut"
        })
        .to(kindOfDev.value, {
            duration: 1.2,
            text: "Creative",
            ease: "none"
        })
        .to({}, {
            duration: 2
        })
        .to(kindOfDev.value, {
            duration: 0.8,
            text: "",
            ease: "power2.inOut"
        })


        // stops the animation if its not on the screen
        ScrollTrigger.create({
            trigger: ".video-container",
            start: "top center",
            onEnter: () => { devKindTl.play() },
            onEnterBack: () => { devKindTl.play() },
            onLeave: () => { devKindTl.pause() },
            onLeaveBack: () => { devKindTl.pause() }
        })
    })
</script>

<template>
    <header class="video-container tracking-tighter relative h-dvh w-dvw">
        <video 
            class="absolute -z-10 w-full h-full object-cover pointer-events-none" 
            :src="video"
            playsinline autoplay loop muted preload="auto">
        </video>
        <div class="font-primary pt-20 pb-20 grid h-full w-full grid-cols-12 grid-rows-4">
            <div class="col-start-1 col-span-13 row-1 text-center">
                <h1 class="uppercase font-secondary tracking-tight text-nume">
                alex 
                <span class="-mr-[0.15em]">v</span>
                <span class="-mr-[0.15em]">ă</span>
                <span>tui</span>
                </h1>
            </div>
            <div class="text-3xl row-start-2 col-start-4">
                <div 
                    ref="kindOfDev"
                    class="cursor text-restrest"></div>
                <div class="italic text-rest font-medium">Developer</div>
            </div>
            <div class="flex flex-col text-3xl row-start-3 col-start-9 items-end">
                <div class="text-restrest">...based in</div>
                <div class="italic text-dan text-rest font-medium">Denmark</div>
            </div>
            <div class="text-xl pt-10 font-secondary row-start-4 text-center col-start-1 col-end-13">
                open to opportunities
            </div>
        </div>
        <div>

        </div>
        
    </header>
</template>

<style scoped>

</style>