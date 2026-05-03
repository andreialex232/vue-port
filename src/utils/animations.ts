import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
type Axis = 'x' | 'y'

// Defer animation initialization to not block FCP
const deferAnimation = (callback: () => void, delay: number = 200) => {
    if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
            setTimeout(callback, delay);
        });
    }
};

export const fadeIn = (el:string, axis: Axis, n:number = 30) => {
    return new Promise<gsap.core.Tween>((resolve) => {
        deferAnimation(() => {
            const tween = gsap.fromTo(el, {
                [axis]: n,
                [axis === 'x' ? 'y' : 'x']: 0,
                opacity: 0
            }, 
            {
                [axis]: 0,
                [axis === 'x' ? 'y' : 'x']: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    markers: false,
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
            resolve(tween);
        });
    });
}

export const fadeInSides = (data: any[], target: string) => {
    if(!data || !data.length) return;

    deferAnimation(() => {
        for(let i = 0; i < data.length; i++) {
            const n = (i % 2 === 0) ? -30 : 30;
            fadeIn(`${target}_${i}`, 'x', n)
        }
    }, 300);
}

export const enterContactModalAnim = (el: Element, done: () => void) => {
    gsap.fromTo(el, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, onComplete: done }
    );
};

export const leaveContactModalAnim = (el: Element, done: () => void) => {
    gsap.to(el, 
        { opacity: 0, y: -20, duration: 0.4, onComplete: done });
    };
