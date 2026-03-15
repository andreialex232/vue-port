<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Nav from './components/Nav.vue';
    import { onMounted, ref, watch } from 'vue';

    const isOpen = ref(false);
    const lang = ref(sessionStorage.getItem('lang') || 'english');

    // opens and closes lang menu
    const toggleLangMenu = () => {
        isOpen.value = !isOpen.value;
    }

    // changes chosen lang
    const langChange = (payload: string) => {
        lang.value = payload;
    }

    // calls langChange and toggleMenu
    const handleChangedLang = (payload: string) => {
        langChange(payload);
        toggleLangMenu();
    }

    // watches language and sets new preference to session storage
    watch(lang, (newValue) => {
        sessionStorage.setItem('lang', newValue);
    })
    
</script>

<template>
    <div class="grid relative text-secondary">
        <Nav 
            :toggleMenu="toggleLangMenu"
            :lang
            :is-open
            @changed-lang = handleChangedLang
            class="justify-end absolute right-0 z-100"></Nav>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>
