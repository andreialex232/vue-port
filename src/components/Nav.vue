<script lang="ts" setup>
    import gsap from 'gsap';
    import { ref } from 'vue';
    /* const isOpen = ref(false); */
    const navElement = ref<HTMLElement | null> (null)

    defineExpose({
        navElement
    })
    
    const props = defineProps({
        isOpen: Boolean,
        lang: String,
        toggleMenu: {
            type: Function, 
            default: () => { console.error("nav component props error") }
        }
    })

    const swe = 'swedish';
    const dan = 'danish';
    const en = 'english'
    /* const toggleLangMenu = () => {
        isOpen.value = !isOpen.value;
        console.log(isOpen.value)
    } */

    /* const selectedLang = (language: string) => {
        lang.value = language;
        isOpen.value = false;
    } */
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
</script>

<template>
    <nav 
        aria-label="Language selection"
        class="flex font-secondary pt-5 pr-8 pb-2 bg-transparent justify-end">
        <ul role="none">
            <li
                role="none"
                :class="isOpen ? 'bg-secondary text-primary' : ''"
                class="rounded-t-lg relative cursor-pointer flex text-center justify-center align-center place-items-center btn-secondary">
                
                <button
                    type="button"
                    id="lang-switcher-btn"
                    :aria-expanded="isOpen"
                    aria-haspopup="listbox"
                    aria-controls="lang-listbox"
                    ref="navElement"
                    class="cursor-pointer flex text-center justify-center align-center place-items-center gap-2 px-4 py-2 "
                    @click="toggleMenu()">
                    <span class="capitalize">Language:</span>
                    
                    <img v-if="lang === 'english'" src="../assets/svgs/united-kingdom.svg" width="24" height="24" alt="English selected">
                    <img v-if="lang === 'swedish'" src="../assets/svgs/sweden.svg" width="24" height="24" alt="Svenska selected">
                    <img v-if="lang === 'danish'" src="../assets/svgs/denmark.svg" width="24" height="24" alt="Dansk selected">
                    
                    <svg
                        aria-hidden="true"
                        :class="isOpen ? 'rotate-90' : ''"
                        class="transition-all -rotate-90" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z" />
                    </svg>
                </button>
                
                <Transition 
                    @enter="dropdownEnter"
                    @leave="dropdownLeave"
                    name="fade">
                    <ul 
                        id="lang-listbox"
                        role="listbox"
                        aria-labelledby="lang-switcher-btn"
                        :class="isOpen ? 'bg-secondary text-primary' : ''"
                        class="cursor-pointer rounded-b-lg absolute flex flex-col justify-start align-start text-start right-0 top-10 w-full -mt-2 pt-2"
                        v-if="isOpen">
                        
                        <li role="none">
                            <button
                                type="button"
                                role="option"
                                :aria-selected="lang === 'swedish'"
                                @click="$emit('changed-lang', swe)"
                                class="cursor-pointer block w-full flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                                <span class="capitalize">{{ swe }}</span>
                                <img preload aria-hidden="true" src="../assets/svgs/sweden.svg" width="24" height="24" alt="">
                            </button>
                        </li>

                        <li role="none">
                            <button
                                type="button"
                                role="option"
                                :aria-selected="lang === 'danish'"
                                @click="$emit('changed-lang', dan)"
                                class="cursor-pointer block w-full flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                                <span class="capitalize">{{ dan }}</span>
                                <img preload aria-hidden="true" src="../assets/svgs/denmark.svg" width="24" height="24" alt="">
                            </button>
                        </li>

                        <li role="none">
                            <button
                                type="button"
                                role="option"
                                :aria-selected="lang === 'english'"
                                @click="$emit('changed-lang', en)"
                                class="cursor-pointer block w-full flex gap-2 justify-start align-start text-start px-4 py-1 btn-tertiary pt-2 pb-2">
                                <span class="capitalize">{{ en }}</span>
                                <img preload aria-hidden="true" src="../assets/svgs/united-kingdom.svg" width="24" height="24" alt="">
                            </button>
                        </li>
                    </ul>
                </Transition>
            </li>
        </ul>
    </nav>
</template>


<style scoped>

</style>