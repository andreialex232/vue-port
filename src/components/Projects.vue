<script setup lang="ts">
    import { useProjects } from '@/composables/useProjects';
    import { ref, onMounted } from 'vue';
    const { projects } = useProjects();
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/src/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger)

    const hoveredMember = ref<number | null>(null);


    onMounted(() => {
        /* gsap.set(".panel-2, .panel-3", {
            x: 3000
        }) */
        
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll",
                pin: true,
                scrub: 1,
                markers: true,
                // Calculate distance: (Number of moving panels) * 100vh
                end: () => `+=${(projects.value.length + 1) * window.innerHeight} + 1000`, // Adding extra space to ensure the last panel has time to animate in
                invalidateOnRefresh: true, // Re-calculates if window is resized
            }
        });

        /* projects.value.slice(1).forEach((project, index) => {
            const target = `.panel-${index + 2}`;
            
            tl.fromTo(target, {
                x: 3000, 
                
            }, {
                x: 0,
                duration: 1,
                ease: "none"
            })

        }) */

        projects.value.slice(1).forEach((project, index) => {
        const currentPanel = `.panel-${index + 2}`;
        const previousPanel = `.panel-${index + 1}`;
        
        // We define a 'startTime'. 
        // If index is 0, start at 0. If index is 1, start at 2.
        const startTime = index * 1.2; // 1.2 is the total time for both exit and entry (1 for exit + 1 for entry, with some overlap)

        // 1. Move the PREVIOUS panel out
        tl.to(previousPanel, {
            xPercent: -100,
            duration: 1, // Only takes half the "slot"
            ease: "power2.inOut" // Smoother start/stop
        }, startTime);

        // 2. Move the CURRENT panel in
        tl.fromTo(currentPanel, 
            { xPercent: 100 }, 
            { 
                xPercent: 0, 
                duration: 1, 
                ease: "power2.inOut" 
            }, 
            startTime // Starts at the exact same time as the exit above
        );
        tl.to({}, { duration: 0.2 }); // A tiny pause before unpinning
        // The timeline now "rests" for 1 duration unit before the next loop starts
    });





});
    
</script>

<template>
    <div class="scroll h-dvh w-dvw relative overflow-hidden">
    <section :class="`panel-${index+1}`" v-for="(project, index) in projects" class="absolute top-0 pt-20 h-dvh  pb-20 bg-secondary text-primary font-secondary grid grid-cols-12" :key="index">
        <div 
            
            class="z-10 col-start-2 col-end-5">

            <!-- project title and description -->
            <h3 class="font-secondary font-bold text-3xl">
                {{ project.name }}
            </h3>
            <p class="text-xl font-secondary mt-2">{{ project.description }}</p>


            <!-- tech used -->
            <div class="mt-10">
                <p class="font-secondary font-bold text-lg pb-2">Technologies used:</p>
                <ul class="flex flex-col gap-1.5 justify-center">
                    <li class="flex gap-2" v-for="tech in project.technologies" :key="tech.name"> {{ tech.name }}
                        <img width="24px" :src="tech.icon" alt="">
                    </li>
                </ul>
            </div>


            <!-- team members -->
            <div v-if="project.teamMembers" class="relative mt-10 bg-primary  p-4 text-secondary">
                <div class="absolute top-0 right-0 bg-secondary w-1 h-[300px] rotate-35"></div>
                <div class="absolute top-20 right-10 bg-secondary w-1 h-[300px] rotate-35"></div>
                <!-- <div class="absolute -top-10 right-10 bg-secondary w-1 h-[100px] rotate-35"></div>
                <div class="absolute -top-10 right-15 bg-secondary w-1 h-[100px] rotate-35"></div> -->
                <p class="font-secondary font-bold text-lg pb-4">Team members:</p>
                <ul class="flex flex-col justify-center">
                    <a  class="social-btn-bg w-fit" :key="member.name" v-for="(member, index) in project.teamMembers" :href="member.link" @mouseenter="hoveredMember = index" @mouseleave="hoveredMember = null">
                        <li class="flex p-2 gap-2">{{ member.name }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                                <path fill="none" :stroke="hoveredMember === index ? '#2F2F2F' : '#E8E8DE'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
                            </svg>
                        </li>
                    </a>
                </ul>
            </div>


            <!-- link -->
            <div class="mt-10">
                <a class="social-btn w-fit flex gap-2 items-center font-secondary font-bold text-lg" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">Project Link:
                    <img :src="project.githubLink.icon" alt="GitHub" width="24px">
                </a>
            </div>
        </div>



        <div class="relative col-start-5 col-end-13 w-full h-full">
                <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55.5%] w-full h-full" src="../assets/svgs/tele.svg" alt="">
                <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65.5%] w-4/5" src="../assets/images/Screenshot 2026-02-21 140438 1.png" alt="">
        </div>
    </section>
    </div>
</template>



<style lang="scss" scoped>

</style>