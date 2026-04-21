<script setup lang="ts">
    import vue from "@/assets/svgs/vue.svg"
    import t from "@/assets/svgs/tailwind.svg"
</script>
<template>
    <footer class="pt-10 pb-10 grid grid-cols-12 bg-primary text-secondary font-secondary">
        <div class="col-start-2 col-end-12">
            <div class="flex flex-col gap-1">
                <p class="flex flex-wrap items-center gap-x-1">
                    Built with 
                    <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="hover:underline inline-flex items-center gap-1">
                        <img :src="vue" width="24" aria-hidden="true" alt="">Vue
                    </a> 
                    & 
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="hover:underline inline-flex items-center gap-1">
                        <img :src="t" width="24" aria-hidden="true" alt="">Tailwind
                    </a> 
                    <span>| 2nd Semester Multimedia Design</span>
                </p>
                
                <p class="capitalize">
                    <small>&copy; 2026 Alex Andrei Vătui. All rights reserved.</small>
                </p>
            </div>
        </div>
    </footer>
</template>