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
                <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">{{ poster.name }}</h3>
                <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold">{{ poster.subheading }}</h4>
                <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-4 text-balance">{{ poster.description }}</p>
            </div>
            
            <div class="flex gap-2 justify-start items-center">
                <div class="flex flex-col gap-2">
                    <p class="font-bold text-lg">Technology used:</p>
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
                class="w-full sm:h-[400px] lg:h-[250px] xl:h-[300px] 2xl:h-[410px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
        </div>
    </article>
</div>

<!-- /// Mobile screens layout posters -->
<div class="posters sm:hidden grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 px-8 md:px-16 xl:px-24 font-secondary">
    <article 
        v-for="poster in otherProjects.posters" 
        :key="poster.id"
        class="bg-secondary text-primary flex flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-lg h-[800px] overflow-hidden"
    >
        <div class="flex-1 flex flex-col justify-between h-full py-2">
            
            <div>
                <h3 class="text-2xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">{{ poster.name }}</h3>
                <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold">{{ poster.subheading }}</h4>
            </div>

            <div class="my-4">
                <img 
                    loading="lazy"
                    :src="poster.img" 
                    :alt="poster.name" 
                    class="w-full h-[400px] md:h-[250px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                >
            </div>

            <p class="text-sm md:text-base lg:text-base 2xl:text-lg text-balance">
                {{ poster.description }}
            </p>

            <div class="flex gap-2 justify-start items-center">
                <div class="flex flex-col gap-2">
                    <p class="font-bold text-lg">Technology used:</p>
                    <div class="flex gap-2">
                        <img loading="lazy" :src="poster.technology.icon" :alt="poster.technology.name" class="w-5 2xl:w-6" />
                        <p class="text-sm lg:text-md">{{ poster.technology.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</div>





<!-- // Animations section - only for mobile screens -->

<div class="anim p-4 px-8 md:px-16 xl:px-24 font-secondary">
    <div class="max-w-full lg:max-w-[75%] mx-auto">
        <article 
            v-for="anim in otherProjects.animations" 
            :key="anim.id"
            class="bg-secondary text-primary flex flex-col lg:flex-row items-center gap-10 p-10 transition-shadow duration-300 shadow-md hover:shadow-lg lg:h-[500px] xl:h-[480px] overflow-hidden mb-10"
        >
            <div class="flex-1 flex flex-col justify-between h-full py-2 order-2 lg:order-1">
                <div>
                    <h3 class="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold">{{ anim.name }}</h3>
                    <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-4 text-balance">
                        {{ anim.description }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mt-6 lg:mt-0">
                    <p class="font-bold text-lg">Technology used:</p>
                    <div class="flex flex-wrap lg:flex-col gap-3 lg:gap-2">
                        <div v-for="tech in anim.technology" :key="tech.name" class="flex gap-3 justify-start items-center">
                            <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-6 h-6" />
                            <p class="text-base lg:text-md">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-shrink-0 w-full lg:w-1/2 order-1 lg:order-2">
                <video
                    loading="lazy" muted autoplay loop playsinline
                    :src="anim.source" 
                    :alt="anim.name" 
                    class="w-full h-auto lg:h-[380px] object-contain rounded-lg transition-transform duration-300"
                ></video>
            </div>
        </article>
    </div>
</div>



<!-- // Wordpress project desktops -->
<div class="wp hidden sm:block p-4 px-4 md:px-16 xl:px-24 font-secondary">
    <div class="max-w-full lg:max-w-[75%] mx-auto">
        <article 
            v-for="wp in otherProjects.wordpress" 
            :key="wp.id"
            class="bg-secondary text-primary flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 md:p-10 transition-shadow duration-300 shadow-md hover:shadow-lg min-h-fit xl:h-[480px] lg:h-[500px] overflow-hidden mb-8"
        >
            <div class="flex-1 flex flex-col justify-between h-full py-2 order-2 lg:order-1">
                <div>
                    <h3 class="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold">{{ wp.name }}</h3>
                    
                    <p class="text-sm md:text-base lg:text-base 2xl:text-lg mt-2 text-balance">
                        {{ wp.description }}
                    </p>
                </div>

                <div class="flex flex-col gap-2 mt-6 lg:mt-0">
                    <p class="font-bold text-lg">Technology used:</p>
                    <div class="flex flex-wrap gap-4 lg:flex-col lg:gap-2">
                        <div
                            v-for="tech in wp.technology" 
                            :key="tech.name"
                            class="flex gap-3 justify-start items-center">
                            <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-6 h-6" />
                            <p class="text-base lg:text-md">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-shrink-0 w-full lg:w-1/2 order-1 lg:order-2">
                <img
                    loading="lazy"
                    :src="wp.img"
                    :alt="wp.name" 
                    class="hover:scale-105 w-full h-48 md:h-64 lg:h-full object-cover rounded-lg shadow-2xl transition-transform duration-300"
                />
            </div>
        </article>
    </div>
</div>



<!-- wordpress project mobile -->
<div class="wp block sm:hidden p-4 font-secondary">
    <div class="flex flex-col gap-6">
        <article 
            v-for="wp in otherProjects.wordpress" 
            :key="wp.id"
            class="bg-secondary text-primary flex flex-col gap-6 rounded-xl p-6 transition-shadow duration-300 shadow-md hover:shadow-lg overflow-hidden"
        >
            <h3 class="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold">
                {{ wp.name }}
            </h3>

            <div class="w-full">
                <img
                    loading="lazy"
                    :src="wp.img"
                    :alt="wp.name" 
                    class="w-full h-auto object-cover rounded-lg shadow-2xl transition-transform duration-300"
                />
            </div>

            <p class="text-sm md:text-base lg:text-lg text-balance leading-relaxed">
                {{ wp.description }}
            </p>

            <div class="flex flex-col gap-2">
                <p class="font-bold text-lg">Technology used:</p>
                <div
                    v-for="tech in wp.technology" 
                    :key="tech.name"
                    class="flex gap-3 justify-start items-center"
                >
                    <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-6 h-6" />
                    <p class="text-base lg:text-md">{{ tech.name }}</p>
                </div>
            </div>
        </article>
    </div>
</div>


    

</template>

<style scoped>

</style>