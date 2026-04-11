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



});
    
</script>

<template>  
    <div class="scroll bg-secondary lg:h-dvh w-dvw relative lg:overflow-hidden">  

    <section 
        :class="[`panel-${index+1}`, 'relative lg:absolute top-0 w-full lg:h-dvh bg-secondary text-primary font-secondary']" 
        v-for="(project, index) in projects" 
        :key="index"
    >  
        <!-- mobile layout -->
        <div class="flex flex-col md:hidden px-6 py-10 gap-8">
            <div class="text-start">
                <h3 class="text-5xl font-secondary font-bold md:text-7xl">{{ project.name }}</h3>
                <p class="text-md md:text-lg font-secondary mt-2">{{ project.description }}</p>
            </div>

            <div class="flex flex-col gap-6">
                <div>
                    <p class="font-secondary font-bold text-lg pb-2">Technologies used:</p>
                    <ul class="flex flex-col gap-2">
                        <li class="text-md flex gap-2 items-center" v-for="tech in project.technologies" :key="tech.name">
                            <img width="20px" :src="tech.icon" alt=""> {{ tech.name }}
                        </li>
                    </ul>
                </div>

                <a class="social-btn w-fit flex gap-2 items-center font-secondary font-bold text-lg" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">
                    Project Link:
                    <img :src="project.githubLink.icon" alt="GitHub" width="20px">
                </a>
            </div>

            <div class="-my-[20%] xxs:-my-[10%] xs:my-[5%] relative w-full h-64 flex items-center justify-center">
                <img class="object-contain absolute w-5/5 sm:w-4/5" src="../assets/svgs/tele.svg" alt="">
                <img class="object-contain absolute w-[80%] -translate-y-[8%] sm:w-[64%]" src="../assets/images/Screenshot 2026-02-21 140438 1.png" alt="">
            </div>

            <div v-if="project.teamMembers" class="bg-primary p-4 text-secondary">
                <p class="font-secondary font-bold text-lg pb-2 text-center">Team members:</p>
                <ul class="flex flex-wrap justify-center gap-4">
                    <a class="social-btn-bg w-fit" :key="member.name" v-for="(member, idx) in project.teamMembers" :href="member.link">
                        <li class="flex gap-2 items-center p-2 text-sm">{{ member.name }}</li>
                    </a>
                </ul>
            </div>
        </div>


        <!-- laptop/desktop layout -->
        <div class="hidden md:flex 2xl:hidden flex-col h-full px-12 py-8">  
            <div class="w-full text-center mb-6">
                <h3 class="font-secondary font-bold md:text-4xl lg:text-5xl xl:text-4xl">{{ project.name }}</h3>
            </div>

            <div class="flex flex-1 gap-10 items-center">
                <div class="flex-1 flex flex-col gap-6">
                    <p class="text-xl font-secondary">{{ project.description }}</p>
                    
                    <div>
                        <p class="font-secondary font-bold text-lg pb-2">Technologies used:</p>
                        <ul class="flex flex-col gap-2">
                            <li class="flex gap-2 items-center" v-for="tech in project.technologies" :key="tech.name">
                                <img width="24px" :src="tech.icon" alt="">
                                {{ tech.name }}
                            </li>
                        </ul>
                    </div>

                    <a class="mb-6 social-btn w-fit flex gap-2 items-center font-secondary font-bold text-lg" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">
                        Project Link:
                        <img :src="project.githubLink.icon" alt="GitHub" width="24px">
                    </a>
                </div>

                <div class="flex-1 flex items-end pb-12">  
                    <div class="relative w-full h-64">  
                        <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:-translate-y-1/2 md:w-5/5 2xl:w-4/5 lg:w-5/5" src="../assets/svgs/tele.svg" alt="">  
                        <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] 2xl:-translate-y-1/2 md:w-[78%] 2xl:w-[64%] lg:w-[80%]" src="../assets/images/Screenshot 2026-02-21 140438 1.png" alt="">  
                    </div>  
                </div>  
            </div>

            <div v-if="project.teamMembers" class="relative flex justify-center mt-auto mb-4">  
                <div class="bg-primary p-4 text-secondary w-full max-w-2xl relative overflow-hidden">  
                    <div class="absolute top-0 right-0 bg-secondary w-1 h-[150px] rotate-35"></div>  
                    <div class="absolute top-10 right-6 bg-secondary w-1 h-[150px] rotate-35"></div>  
                    <p class="font-secondary font-bold text-lg pb-2 text-center">Team members:</p>  
                    <ul class="flex flex-wrap justify-center gap-4">  
                        <a class="social-btn-bg w-fit" :key="member.name" v-for="(member, idx) in project.teamMembers" :href="member.link" @mouseenter="hoveredMember = idx" @mouseleave="hoveredMember = null">  
                            <li class="flex gap-2 items-center p-2 text-sm">{{ member.name }}  
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">  
                                    <path fill="none" :stroke="hoveredMember === idx ? '#2F2F2F' : '#E8E8DE'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />  
                                </svg>  
                            </li>  
                        </a>  
                    </ul>  
                </div>  
            </div>  
        </div>  



        <!-- the true desktop layout (2xl and above) -->
        <div class="hidden 2xl:grid grid-cols-12 h-full">  
            <div class="col-start-2 col-end-5 flex flex-col justify-center z-10">  
                <div class="flex flex-col gap-8">  
                    <div>
                        <h3 class="font-secondary font-bold text-6xl">  
                            {{ project.name }}  
                        </h3>  
                        <p class="text-xl font-secondary mt-2">{{ project.description }}</p>
                    </div>  

                    <div>  
                        <p class="font-secondary font-bold text-lg pb-2">Technologies used:</p>  
                        <ul class="flex flex-col gap-1.5">  
                            <li class="flex gap-2 items-center" v-for="tech in project.technologies" :key="tech.name"> 
                                <img width="24px" :src="tech.icon" alt=""> {{ tech.name }}  
                            </li>  
                        </ul>  
                    </div>  

                    <div>  
                        <a class="social-btn w-fit flex gap-2 items-center font-secondary font-bold text-lg" :href="project.githubLink.link" target="_blank" rel="noopener noreferrer">
                            Project Link:  
                            <img :src="project.githubLink.icon" alt="GitHub" width="24px">  
                        </a>  
                    </div>  

                    <div v-if="project.teamMembers" class="relative bg-primary p-4 text-secondary">  
                        <div class="absolute top-0 right-0 bg-secondary w-1 h-[300px] rotate-35"></div>  
                        <div class="absolute top-20 right-10 bg-secondary w-1 h-[300px] rotate-35"></div>  
                        <p class="font-secondary font-bold text-lg pb-4">Team members:</p>  
                        <ul class="flex flex-col gap-2">  
                            <a class="social-btn-bg w-fit" :key="member.name" v-for="(member, idx) in project.teamMembers" :href="member.link" @mouseenter="hoveredMember = idx" @mouseleave="hoveredMember = null">  
                                <li class="flex gap-2 items-center p-2">{{ member.name }}  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">  
                                        <path fill="none" :stroke="hoveredMember === idx ? '#2F2F2F' : '#E8E8DE'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />  
                                    </svg>  
                                </li>  
                            </a>  
                        </ul>  
                    </div>  
                </div>  
            </div>  

            <div class="col-start-6 col-end-13 flex items-end pb-20">  
                <div class="relative w-full h-4/5">  
                    <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55.5%] 2xl:w-4/5 lg:w-full" src="../assets/svgs/tele.svg" alt="">  
                    <img class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[64.5%] 2xl:w-[64%] lg:w-full" src="../assets/images/Screenshot 2026-02-21 140438 1.png" alt="">  
                </div>  
            </div>  
        </div>  

    </section>  
    </div>  
</template>



<style scoped>
</style>