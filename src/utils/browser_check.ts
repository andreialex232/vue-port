import { ref } from "vue";

export const useUserAgent = () => {
    const ua = navigator.userAgent.toLocaleLowerCase();
    const isSafari = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android') && !ua.includes('edg')

    return { isSafari }
}


