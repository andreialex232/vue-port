<script lang="ts" setup>
    import { onMounted } from "vue";
    import { useOtherProjects } from "@/composables/useOtherProjects";
    import { fadeInSides, fadeIn } from "@/utils/animations";
    const { otherProjects } = useOtherProjects();

    onMounted(() => {
    fadeInSides(otherProjects.value.posters, '.poster')
    fadeIn('.wp', 'y');
    fadeIn('.anim', 'y');
});
</script>

<template>
    <!-- /// Desktop and larger screens layout posters -->
<div class="posters hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 px-8 md:px-16 xl:px-24 font-secondary">
    <article 
        v-for="(poster, index) in otherProjects.posters" 
        :key="poster.id"
        :class="`poster_${index}`"
        class="bg-secondary text-primary flex flex-row items-center gap-6 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg xl:h-[480px] lg:h-[500px] overflow-hidden"
    >
        <div class="flex-1 flex flex-col justify-between h-full py-2">
            <div>
                <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">{{ $t(`otherProjects.posters[${index}].name`)}}</h3>
                <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold">{{ $t(`otherProjects.posters[${index}].subheading`) }}</h4>
                <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-4 text-balance">{{ $t(`otherProjects.posters[${index}].description`) }}</p>
            </div>
            
            <div class="flex gap-2 justify-start items-center">
                <div class="flex flex-col gap-2">
                    <p class="font-bold text-lg">{{ $t('otherProjects.labels.techUsed') }}</p>
                    <div class="flex gap-2">
                        <img loading="lazy" :src="poster.technology.icon" :alt="poster.technology.name" class="w-5 2xl:w-6" />
                        <p class="text-base lg:text-md">{{ poster.technology.name }}</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="flex-shrink-0">
            <img 
                loading="lazy"
                :src="poster.img" 
                :alt="poster.name" 
                class="w-full sm:h-[400px] lg:h-[250px] xl:h-[300px] 2xl:h-[410px] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
            >
        </div>
    </article>
</div>

<!-- /// Mobile screens layout posters -->
<div class="posters sm:hidden grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 px-8 md:px-16 xl:px-24 font-secondary">
    <article 
        v-for="(poster, index) in otherProjects.posters" 
        :key="poster.id"
        class="bg-secondary text-primary flex flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-lg h-[800px] overflow-hidden"
    >
        <div class="flex-1 flex flex-col justify-between h-full py-2">
            
            <div>
                <h3 class="text-2xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">{{ $t(`otherProjects.posters[${index}].name`)}}</h3>
                <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold">{{ $t(`otherProjects.posters[${index}].subheading`)}}</h4>
            </div>

            <div class="my-4">
                <img 
                    loading="lazy"
                    :src="poster.img" 
                    :alt="poster.name" 
                    class="w-full h-[340px] sm:h-[300px] md:h-[250px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                >
            </div>

            <p class="text-sm md:text-base lg:text-base 2xl:text-lg text-balance">
                {{ $t(`otherProjects.posters[${index}].description`) }}
            </p>

            <div class="flex gap-2 justify-start items-center">
                <div class="flex flex-col gap-2">
                    <p class="font-bold text-lg">{{ $t('otherProjects.labels.techUsed') }}</p>
                    <div class="flex gap-2">
                        <img loading="lazy" :src="poster.technology.icon" :alt="poster.technology.name" class="w-5 2xl:w-6" />
                        <p class="text-sm lg:text-md">{{ poster.technology.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</div>





<!-- // Animations section -->
<div class="anim p-4 px-8 md:px-16 lg:px-24 font-secondary">
    <div class="max-w-full lg:max-w-[75%] mx-auto flex flex-col gap-6 lg:gap-10">
        <article 
            v-for="(anim, index) in otherProjects.animations" 
            :key="anim.id"
            class="bg-secondary text-primary flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 transition-shadow duration-300 shadow-md hover:shadow-lg rounded-xl lg:rounded-none overflow-hidden min-h-fit lg:h-[500px] xl:h-[480px]"
        >
            <div class="flex-1 flex flex-col justify-between h-full py-2 order-1 lg:order-1">
                <div>
                    <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        {{ $t(`otherProjects.animations[${index}].name`) }}
                    </h3>

                    <div class="w-full mt-4 block lg:hidden">
                        <video
                            loading="lazy" muted autoplay loop playsinline
                            :src="anim.sourceMobile" 
                            class="w-full h-auto object-cover"
                        ></video>
                    </div>
                    
                    <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-4 text-balance leading-relaxed">
                        {{ $t(`otherProjects.animations[${index}].description`) }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mt-6 lg:mt-0">
                    <p class="font-bold text-lg">{{ $t('otherProjects.labels.techUsed') }}</p>
                    <div class="flex flex-wrap lg:flex-col gap-3 lg:gap-2">
                        <div v-for="tech in anim.technology" :key="tech.name" class="flex gap-3 justify-start items-center">
                            <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-6 h-6" />
                            <p class="sm:text-base text-sm lg:text-md">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block flex-shrink-0 w-full lg:w-1/2 order-2">
                <video
                    loading="lazy" muted autoplay loop playsinline
                    :src="anim.sourceDesktop" 
                    :alt="anim.name" 
                    class="w-full h-auto lg:h-[380px] object-contain transition-transform duration-300"
                ></video>
            </div>
        </article>
    </div>
</div>


<!-- wordpress -->
<div class="wp p-4 px-8 md:px-16 lg:px-24 font-secondary">
    <div class="max-w-full lg:max-w-[75%] mx-auto flex flex-col gap-6">
        <article 
            v-for="(wp, index) in otherProjects.wordpress" 
            :key="wp.id"
            class="bg-secondary text-primary flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 transition-shadow duration-300 shadow-md hover:shadow-lg rounded-xl lg:rounded-none overflow-hidden min-h-fit lg:h-[500px] xl:h-[480px]"
        >
            <div class="flex-1 flex flex-col justify-between h-full py-2 order-2 lg:order-1 w-full">
                <div>
                    <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        {{ $t(`otherProjects.wordpress[${index}].name`) }}
                    </h3>

                    <div class="w-full mt-4 block lg:hidden">
                        <img
                            loading="lazy"
                            :src="wp.img"
                            :alt="wp.name" 
                            class="w-full h-auto object-cover rounded-lg shadow-2xl transition-transform duration-300"
                        />
                    </div>
                    
                    <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-4 text-balance">
                        {{ $t(`otherProjects.wordpress[${index}].description`) }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mt-6 lg:mt-0">
                    <p class="font-bold text-lg">{{ $t('otherProjects.labels.techUsed') }}</p>
                    <div class="flex flex-wrap lg:flex-col gap-3 lg:gap-2">
                        <div 
                            v-for="tech in wp.technology" 
                            :key="tech.name" 
                            class="flex gap-3 justify-start items-center"
                        >
                            <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-6 h-6" />
                            <p class="sm:text-base text-sm lg:text-md">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block flex-shrink-0 w-full lg:w-1/2 order-1 lg:order-2">
                <img
                    loading="lazy"
                    :src="wp.img"
                    :alt="wp.name" 
                    class="w-full h-48 md:h-64 lg:h-full object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                />
            </div>
        </article>
    </div>
</div>


    

</template>

<style scoped>

</style>