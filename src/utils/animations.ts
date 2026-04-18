import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
type Axis = 'x' | 'y'


export const fadeIn = (el:string, axis: Axis) => {
    const otherAxis = axis === 'x' ? 'y' : 'x';
    const startingNumber = 30;
    return gsap.fromTo(el, {
        [axis]: startingNumber,
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
            start: "top 80%",
            toggleActions: "play none none none"
        }
    })
}
