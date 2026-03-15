<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Nav from './components/Nav.vue';
    import { ref } from 'vue';

    const isOpen = ref(false);
    const lang = ref('english');

    // opens and closes lang menu
    const toggleLangMenu = () => {
        isOpen.value = !isOpen.value;
    }

    // changes chosen lang
    const langChange = (payload: string) => {
        lang.value = payload;
    }

    // combines langChange and toggleMenu
    const handleChangedLang = (payload: string) => {
        langChange(payload);
        toggleLangMenu();
    }
    
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
