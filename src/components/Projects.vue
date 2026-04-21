<script setup lang="ts">
    import { useProjects } from '@/composables/useProjects';
    import { fadeIn } from '@/utils/animations';
    import { ref, onMounted, onUnmounted, watch } from 'vue';
    import { useSideScroll } from '@/composables/useSideScrollAnim';
    import { useI18n } from 'vue-i18n';
    import { useCheckScreen } from '@/utils/screen_check';

    const { isMobile } = useCheckScreen();
    const { locale } = useI18n()
    const { projects } = useProjects();
    const { initAnimations, cleanup } = useSideScroll('.scroll', projects);
    const hoveredMember = ref<number | null>(null);
    
    const startAnimation = () => {
      initAnimations();
      for(let i = 1; i < projects.value.length+ 1; i ++) {
        fadeIn(`.panel-${i}`, 'y')
      }
    }
    onMounted(() => {
      /* checkScreen(); */
      startAnimation();
    });
    onUnmounted(() => {
      cleanup();
    })
    watch(locale, () => {
      cleanup();
      startAnimation();
    })




</script>

<template>
  <div class="projects_header lg:mt-10 xl:mt-0 flex justify-center items-center h-16 bg-secondary text-primary font-secondary">
      <h2 id="mobile-heading" class="pb-6 sm:pb-0 text-primary font-secondary text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">{{ $t('projects.heading') }}</h2>
  </div>

  <div class="scroll bg-secondary lg:h-dvh w-dvw relative lg:overflow-hidden">
    <section 
      v-for="(project, index) in projects" 
      :key="index"
      :class="[`panel-${index+1}`, 'mb-12 last:mb-0 relative lg:absolute top-0 w-full lg:h-dvh bg-secondary text-primary font-secondary pb-6 pr-6 pl-6 flex lg:items-center justify-center overflow-y-auto lg:overflow-hidden']"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 2xl:gap-x-16 items-start w-full max-w-7xl mx-auto">
        
        <article class="order-1 lg:col-start-1 lg:row-start-1 bg-secondary text-primary">
          <h3 class="text-2xl 2xl:text-4xl font-bold">{{ $t(`projects.list.${index}.name`) }}</h3>
          <p class="text-md 2xl:text-lg mt-3 opacity-90">{{ $t(`projects.list.${index}.description`) }}</p>
        </article>

        <div class="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex flex-col gap-10">
          <div class="relative w-full aspect-video flex items-center justify-center scale-105 2xl:scale-110 origin-top">
            <img loading="lazy" class="object-cover absolute w-[full]" src="../assets/svgs/tele.svg" alt="">
            <img loading="lazy" class="object-cover absolute w-[82%] -translate-y-[8%]" :src="isMobile ? project.imageMobile : project.image" :alt="project.name">
          </div>

          <div v-if="project.teamMembers" class="w-full">
            <div class="rounded-lg relative bg-primary p-4 text-secondary overflow-hidden shadow-lg">
              <p class="font-bold text-md 2xl:text-lg pb-3 text-center">{{ $t('projects.labels.teamMembers') }}</p>
              <ul class="flex flex-wrap justify-center gap-3">
                <a v-for="(member, index) in project.teamMembers" :key="member.name" class="rounded-lg hover:rounded-lg social-btn-bg w-fit" :href="member.link" @mouseenter="hoveredMember = index" @mouseleave="hoveredMember = null">
                  <li class="flex gap-2 items-center p-2 2xl:text-base text-sm">
                    {{ member.name }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="none" :stroke="hoveredMember === index ? '#2F2F2F' : '#E8E8DE'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
                    </svg>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="order-3 lg:col-start-1 lg:row-start-2 mt-4 lg:mt-0">
          <p class="font-bold text-lg 2xl:text-xl pb-3">{{ $t('projects.labels.techUsed') }}</p>
          <ul class="flex flex-col gap-2">
            <li v-for="tech in project.technologies" :key="tech.name" class="flex gap-2 items-center text-sm 2xl:text-base">
              <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-5 2xl:w-6"> 
              {{ tech.name }}
            </li>
          </ul>
        </div>

        <div class="order-4 lg:col-start-1 lg:row-start-3 lg:mt-0">
          <a class="font-medium btn w-fit flex gap-2 items-center" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">
            {{ $t('projects.labels.seeFinal') }}
            <img loading="lazy" :src="project.githubLink.icon" alt="GitHub" class="w-5 2xl:w-6">
          </a>
        </div>


      </div>
    </section>


    <div class="progress-container fixed bottom-0 left-0 w-full h-3 bg-primary/10 z-[60] pointer-events-none lg:hidden hidden opacity-0">
      <div class="progress-bar-inner h-full bg-primary origin-left scale-x-0 w-full"></div>
    </div>



  </div>
</template>
