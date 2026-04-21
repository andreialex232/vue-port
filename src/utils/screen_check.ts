import { ref } from "vue";

export const useCheckScreen = () => {
    const isMobile = ref(window.innerWidth < 1024);
    return { isMobile }
}