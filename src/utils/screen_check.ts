import { ref, onMounted, onUnmounted } from "vue";

/* export const useCheckScreen = () => {
    const isMobile = ref((typeof window !== 'undefined') ? window.innerWidth < 1024 : false);
    return { isMobile }
} */

export const useCheckScreenListener = () => {
    const isMobile = ref((typeof window !== 'undefined') ? window.innerWidth < 1024 : false);
    onMounted(() => {
        const handleResize = () => {
            isMobile.value = window.innerWidth < 1024;
        };
        window.addEventListener('resize', handleResize);
    });
    return { isMobile };
};