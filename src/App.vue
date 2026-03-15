<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Nav from './components/Nav.vue';
</script>

<template>
    <div class="grid relative text-secondary">
        <Nav class="justify-end absolute right-0 z-100"></Nav>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>
