<script setup lang="ts">
    import { useProjects } from '@/composables/useProjects';
    import { ref, onMounted } from 'vue';
    const { projects } = useProjects();
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/src/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger)

    const hoveredMember = ref<number | null>(null);


onMounted(() => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: 1,
        // Ensure the end matches your project count
        end: () => `+=${projects.value.length * 100}%`,
        invalidateOnRefresh: true,
        
        // onToggle fires the moment you enter or leave the trigger area
        onToggle: (self) => {
          if (self.isActive) {
            // Instant show when active
            gsap.set(".progress-container", { opacity: 1, display: "block" });
          } else {
            // Instant hide when you scroll past the top or bottom
            gsap.set(".progress-container", { opacity: 0, display: "none" });
          }
        }
      }
    });

    const totalDuration = (projects.value.length - 1) * 1.2 + 0.2;

    // 1. Progress Bar Growth (Keep this in the timeline for scrubbing)
    tl.to(".progress-bar-inner", {
      scaleX: 1,
      ease: "none",
      duration: totalDuration
    }, 0);

    // 2. Panel Logic
    projects.value.slice(1).forEach((project, index) => {
      const currentPanel = `.panel-${index + 2}`;
      const previousPanel = `.panel-${index + 1}`;
      const startTime = index * 1.2;

      tl.to(previousPanel, {
        xPercent: -100,
        duration: 1,
        ease: "power2.inOut"
      }, startTime);

      tl.fromTo(currentPanel, 
        { xPercent: 100 }, 
        { xPercent: 0, duration: 1, ease: "power2.inOut" }, 
        startTime
      );
      
      tl.to({}, { duration: 0.2 }); 
    });
  });
});

    
            /* gsap.fromTo(".scroll", 
            {
              y: 30,
              opacity:0
            },
            {
              y: 0,
              opacity:1,
              duration: 0.5, 
                  ease: "power1.inOut",
                  scrollTrigger: {
                      markers: false,
                      trigger: `.scroll`, 
                      start: "top 70%",    
                      toggleActions: "play none none none",
                  
          }}); */




</script>

<template>
  <div class="projects_header lg:mt-10 xl:mt-0 flex justify-center items-center h-16 bg-secondary text-primary font-secondary">
      <h2 id="mobile-heading" class="text-primary font-secondary text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">What I've Been Building</h2>
  </div>

  <div class="scroll bg-secondary lg:h-dvh w-dvw relative lg:overflow-hidden">
    <section 
      v-for="(project, index) in projects" 
      :key="index"
      :class="[`panel-${index+1}`, 'mb-12 last:mb-0 relative lg:absolute top-0 w-full lg:h-dvh bg-secondary text-primary font-secondary pb-6 pr-6 pl-6 flex lg:items-center justify-center overflow-y-auto lg:overflow-hidden']"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 2xl:gap-x-16 items-start w-full max-w-7xl mx-auto">
        
        <article class="order-1 lg:col-start-1 lg:row-start-1 bg-secondary text-primary">
          <h3 class="text-2xl 2xl:text-4xl font-bold">{{ project.name }}</h3>
          <p class="text-md 2xl:text-lg mt-3 opacity-90">{{ project.description }}</p>
        </article>

        <div class="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex flex-col gap-10">
          <div class="relative w-full aspect-video flex items-center justify-center scale-105 2xl:scale-110 origin-top">
            <img loading="lazy" class="object-contain absolute w-full" src="../assets/svgs/tele.svg" alt="">
            <img loading="lazy" class="object-contain absolute w-[82%] -translate-y-[8%]" :src="project.image" :alt="project.name">
          </div>

          <div v-if="project.teamMembers" class="w-full">
            <div class="rounded-lg relative bg-primary p-4 text-secondary overflow-hidden shadow-lg">
              <p class="font-bold text-md 2xl:text-lg pb-3 text-center">Team members:</p>
              <ul class="flex flex-wrap justify-center gap-3">
                <a v-for="(member, idx) in project.teamMembers" :key="member.name" class="rounded-lg hover:rounded-lg social-btn-bg w-fit" :href="member.link" @mouseenter="hoveredMember = idx" @mouseleave="hoveredMember = null">
                  <li class="flex gap-2 items-center p-2 2xl:text-base text-sm">
                    {{ member.name }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="none" :stroke="hoveredMember === idx ? '#2F2F2F' : '#E8E8DE'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
                    </svg>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="order-3 lg:col-start-1 lg:row-start-2 mt-4 lg:mt-0">
          <p class="font-bold text-lg 2xl:text-xl pb-3">Technologies used:</p>
          <ul class="flex flex-col gap-2">
            <li v-for="tech in project.technologies" :key="tech.name" class="flex gap-2 items-center text-sm 2xl:text-base">
              <img loading="lazy" :src="tech.icon" :alt="tech.name" class="w-5 2xl:w-6"> 
              {{ tech.name }}
            </li>
          </ul>
        </div>

        <div class="order-4 lg:col-start-1 lg:row-start-3 lg:mt-0">
          <a class="font-medium btn w-fit flex gap-2 items-center" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">
            See Final Project:
            <img loading="lazy" :src="project.githubLink.icon" alt="GitHub" class="w-5 2xl:w-6">
          </a>
        </div>


      </div>
    </section>


    <div class="h-4 progress-container fixed bottom-0 left-0 w-full h-1.5 bg-primary/10 z-[60] pointer-events-none lg:block hidden">
      <div class="progress-bar-inner h-full bg-primary origin-left scale-x-0 w-full"></div>
    </div>



  </div>
</template>
