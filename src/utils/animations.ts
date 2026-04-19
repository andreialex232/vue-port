import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
type Axis = 'x' | 'y'


export const fadeIn = (el:string, axis: Axis, n:number = 30) => {
    const otherAxis = axis === 'x' ? 'y' : 'x';
    return gsap.fromTo(el, {
        [axis]: n,
        [otherAxis]: 0,
        opacity: 0
    }, 
    {
        [axis]: 0,
        [otherAxis]: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            markers: false,
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    })
}

export const fadeInSides = (data: any[], target: string) => {
    if(!data || !data.length) return;

    for(let i = 0; i < data.length; i++) {
        const n = (i % 2 === 0) ? -30 : 30;
        fadeIn(`${target}_${i}`, 'x', n)
    }
}
