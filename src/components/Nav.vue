<script lang="ts" setup>
    import gsap from 'gsap';
    import { ref, onMounted } from 'vue';
    const isOpen = ref(false);
    const lang = ref("english");

    const toggleLangMenu = () => {
        isOpen.value = !isOpen.value;
        console.log(isOpen.value)
    }

    const selectedLang = (language: string) => {
        lang.value = language;
        isOpen.value = false;
    }
    const dropdownEnter = (el: Element, done: () => void) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: -10,
                duration: 0.25,
                scale: 0.95
            }, 
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.25,
                ease: 'expo.out',
                onComplete: () => { done() }
            })
        }

        const dropdownLeave = (el: Element, done: () => void) => {
            gsap.fromTo(el, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                scale: 1
            },
            {
                y: -5,
                scale: 0.95,
                opacity: 0,
                duration: 0.25,
                ease: 'expo.out',
                onComplete: () => { done() }
            })
        }

    onMounted(() => {
        
    })
</script>

<template>
    <nav class="flex font-secondary pt-5 pr-8 pb-2 bg-transparent">
        <ul>
            <li
                :class="isOpen ? 'bg-secondary text-primary' : ''"
                class="rounded-t-lg relative cursor-pointer flex text-center justify-center align-center place-items-center btn-secondary">
                <div 
                    class="flex text-center justify-center align-center place-items-center gap-2 px-4 py-2 "
                    @click="toggleLangMenu()">
                    <p>Language:</p>
                    <img v-if="lang === 'english'" src="../assets/svgs/united-kingdom.svg" width="24px" alt="">
                    <img v-if="lang === 'swedish'" src="../assets/svgs/sweden.svg" width="24px" alt="">
                    <img v-if="lang === 'danish'" src="../assets/svgs/denmark.svg" width="24px" alt="">
                    <svg 
                        :class="isOpen ? 'rotate-90' : ''"
                        class="transition-all -rotate-90" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <rect width="14" height="14" fill="none" />
                        <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z" />
                    </svg>
                </div>
                
                <Transition 
                    @enter="dropdownEnter"
                    @leave="dropdownLeave"
                    name="fade">
                    <ul 
                    :class="isOpen ? 'bg-secondary text-primary' : ''"
                    class="rounded-b-lg absolute flex flex-col justify-start align-start text-start right-0 top-10 w-full -mt-2 pt-2"
                    v-if="isOpen">
                        <li 
                            @click="selectedLang('swedish')"
                            class="flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                            <p>Swedish</p>
                            <img src="../assets/svgs/sweden.svg" width="24px" alt="">
                        </li>
                        <li 
                            @click="selectedLang('danish')"
                            class="flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                            <p>Danish</p>
                            <img src="../assets/svgs/denmark.svg" width="24px" alt="">
                            
                        </li>
                        <li 
                            @click="selectedLang('english')"
                            class="flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                            <p>English</p>
                            <img src="../assets/svgs/united-kingdom.svg" width="24px" alt="">
                        </li>
                    </ul>
                </Transition>
            </li>
        </ul>
    </nav>
</template>


<style scoped>

</style>