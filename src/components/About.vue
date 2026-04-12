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

    <!-- MOBILE LAYOUT -->
     <div class="mt-10 mb-20">
        <div class="flex justify-center items-center h-16 bg-secondary text-primary font-secondary lg:hidden">
            <h3 class="text-primary font-secondary text-2xl font-bold mb-4">Core & Context</h3>
        </div>
        
        <div 
            :key="item.title"
            v-for="item in aboutText"
            class="font-secondary grid grid-cols-1 gap-4 p-4 lg:hidden">
            <div class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                <h3 class="text-xl font-bold ">{{ item.title }}</h3>
                <p class="text-md">{{ item.description }}</p>
            </div>
        </div>
    </div>




    <!-- Laptops and up layout -->
<section class="hidden lg:flex bg-secondary text-primary w-dvw pb-30 font-secondary">
    <!-- LEFT COLUMN - Text/Cards -->
    <div class="flex-1 flex flex-col justify-center items-center px-8">
        <div class="w-full max-w-2xl">
            <div class="flex justify-center items-center h-16 bg-secondary text-primary font-secondary mb-4">
                <h3 class="text-primary font-secondary text-2xl font-bold">Core & Context</h3>
            </div>
            
            <div 
                :key="item.title"
                v-for="item in aboutText"
                class="font-secondary grid grid-cols-1 gap-4 p-4">
                <div class="bg-secondary text-primary rounded-xl border border-primary p-6 shadow-sm transition-hover hover:shadow-md">
                    <h3 class="text-xl font-bold">{{ item.title }}</h3>
                    <p class="text-md">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- RIGHT COLUMN - Video Section -->
    <!-- <div class="flex-1 flex flex-col justify-center items-center">
        <div class="text-center">
            <div class="mr-75 uppercase text-rest font-semibold">do you</div>
            <div class="mr-25 text-restrest">prefer a</div>
            <div class="relative flex uppercase gap-3 text-rest font-semibold justify-center mt-4">
                <img class="bg-secondary z-100" src="../assets/svgs/video-player.svg" width="72px" alt="">
                <p ref="videoWord">video</p>
            </div>
            <div class="ml-75 text-restrest mt-2">instead?</div>
            <div class="mt-8">
                <button class="btn">Yes please</button>
            </div>
        </div>
    </div> -->

<!--     <div class="flex-1 flex flex-col justify-center items-center">
        <div class="text-center">
            <div class="lg:mr-40 2xl:mr-85 uppercase text-rest font-semibold">do you</div>
            <div class="lg:-mr-15 2xl:-mr-0 2xl:mr-25 text-restrest fit-content">prefer a</div>


            <div class="lg:-mr-20 relative flex uppercase gap-3 text-rest font-semibold justify-center mt-4">
                <img class="lg:w-[60px] xl:w-[72px] bg-secondary z-100" src="../assets/svgs/video-player.svg" width="" alt="">
                <p class="lg:text-5xl xl:text-rest" ref="videoWord">video</p>
            </div>


            <div class="ml-75 w-fit-content inline-block text-restrest mt-2">instead?</div>
            <div class="mt-8">
                <button class="btn">Yes please</button>
            </div>
        </div>
    </div> -->

    <div class="flex-1 flex flex-col justify-center items-center">
    <div class="text-center w-fit">
        
        <div class="uppercase text-rest font-semibold lg:-translate-x-16 2xl:-translate-x-32 w-fit">
            do you
        </div>

        <div class="text-restrest w-fit mx-auto">
            prefer a
        </div>

        <div class="relative flex uppercase gap-3 text-rest font-semibold justify-center mt-4">
            <img class="lg:w-[60px] xl:w-[72px] bg-secondary z-100" src="../assets/svgs/video-player.svg" width="" alt="">
            <p class="lg:text-5xl xl:text-rest" ref="videoWord">video</p>
        </div>

        <div class="text-restrest mt-2 lg:translate-x-16 2xl:translate-x-32 w-fit ml-auto">
            instead?
        </div>

        <div class="mt-8">
            <button class="btn">Yes please</button>
        </div>
        
    </div>
</div>
</section>
</template>

<style scoped>

</style>