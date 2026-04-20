<script lang="ts" setup>
    import { stack } from '@/composables/useTechstack';
    import { onMounted } from 'vue';
    const { techStack } = stack()

    onMounted(() => {
        console.log(techStack.value.known)
    })
</script>
<template>
    <div class="px-4 md:px-16 xl:px-24 mt-20 lg:mt-80 mb-6">
        <h2 class="text-primary font-secondary pb-6 sm:pb-0 text-primary font-secondary text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center">{{ $t('techPath.mainHeading') }}</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 px-8 md:px-16 xl:px-24 font-secondary">
        
        <article class="bg-secondary text-primary flex flex-col justify-between p-6 shadow-md transition-shadow duration-300 hover:shadow-lg h-full overflow-hidden">
            <div class="flex-1 flex flex-col py-2">
                
                <div class="mb-6">
                    <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold">{{ $t('techPath.knownHeading') }}</h3>
                    <!-- <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold mt-2 opacity-80"></h4> -->
                </div>

                <div class="flex-1 flex flex-col justify-start">
                    <div class="flex flex-wrap gap-4 mt-2">
                        <div 
                            v-for="tech in techStack.known" 
                            :key="tech.id" 
                            class="flex gap-3 justify-start items-center"
                        >
                            <img loading="lazy" :src="tech.source" :alt="tech.text" class="w-5 2xl:w-6" />
                            <p class="text-sm md:text-base lg:text-base">{{ tech.text }}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </article>

        <article class="bg-secondary text-primary flex flex-col justify-between p-6 shadow-md transition-shadow duration-300 hover:shadow-lg h-full overflow-hidden">
            <div class="flex-1 flex flex-col py-2">
                
                <div class="mb-6">
                    <h3 class="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold">{{ $t('techPath.learningHeading') }}</h3>
                    <!-- <h4 class="text-md md:text-xl lg:text-lg 2xl:text-xl font-semibold mt-2 opacity-80">Currently exploring and studying</h4> -->
                </div>

                <div class="flex-1 flex flex-col justify-start">
                    <div class="flex flex-wrap gap-4 mt-2">
                        <div 
                            v-for="tech in techStack.familiar" 
                            :key="tech.id" 
                            class="flex gap-3 justify-start items-center"
                        >
                            <img loading="lazy" :src="tech.source" :alt="tech.text" class="w-5 2xl:w-6" />
                            <p class="text-sm md:text-base lg:text-base">{{ tech.text }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </article>

    </div>
</template>
