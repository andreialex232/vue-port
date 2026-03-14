<script lang="ts" setup>
    import video from "@/assets/videos/ninety-dark.mp4";
</script>

<template>
    <header class="tracking-tighter relative h-dvh w-dvw">
        <video 
            class="absolute -z-10 w-full h-full object-cover pointer-events-none" 
            :src="video"
            playsinline autoplay loop muted>
        </video>
        <div class="font-primary pt-20 pb-20 grid h-full w-full grid-cols-12 grid-rows-4">
            <div class="col-start-1 col-span-13 row-1 text-center">
                <h1 class="uppercase font-secondary tracking-tight text-nume">
                alex 
                <span class="-mr-[0.10em]">v</span>
                <span class="-mr-[0.10em]">ă</span>
                <span>tui</span>
                </h1>
            </div>
            <div class="text-3xl row-start-2 col-start-4">
                <div class="text-restrest italic">Creative</div>
                <div class="italic text-rest font-medium">Developer</div>
            </div>
            <div class="flex flex-col text-3xl row-start-3 col-start-9 items-end">
                <div class="text-restrest italic">...based in</div>
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