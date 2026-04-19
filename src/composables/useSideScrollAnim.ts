import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useProjects } from "./useProjects";
const { projects } = useProjects();

export function useSideScroll(container: string, project: any) {
    let mm = gsap.matchMedia();

    const initAnimations = () => {
        mm.add("(min-width: 1024px)", () => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".scroll",
                    pin: true,
                    scrub: 1,
                    // Ensure the end matches your project count
                    end: () => `+=${projects.value.length * 100}%`,
                    invalidateOnRefresh: true,

                    // onToggle fires the moment you enter or leave the trigger area
                    onToggle: (self) => {
                        if (self.isActive) {
                            // Instant show when active
                            gsap.set(".progress-container", { opacity: 1, display: "block" });
                        } else {
                            // Instant hide when you scroll past the top or bottom
                            gsap.set(".progress-container", { opacity: 0, display: "none" });
                        }
                    }
                }
            });

            const totalDuration = (projects.value.length - 1) * 1.2 + 0.2;

            // 1. Progress Bar Growth (Keep this in the timeline for scrubbing)
            tl.to(".progress-bar-inner", {
                scaleX: 1,
                ease: "none",
                duration: totalDuration
            }, 0);

            // 2. Panel Logic
            projects.value.slice(1).forEach((project, index) => {
                const currentPanel = `.panel-${index + 2}`;
                const previousPanel = `.panel-${index + 1}`;
                const startTime = index * 1.2;

                tl.to(previousPanel, {
                    xPercent: -100,
                    duration: 1,
                    ease: "power2.inOut"
                }, startTime);

                tl.fromTo(currentPanel,
                    { xPercent: 100 },
                    { xPercent: 0, duration: 1, ease: "power2.inOut" },
                    startTime
                );

                tl.to({}, { duration: 0.2 });
            });
        });
    }
    const cleanup = () => {
            mm.revert();
        }

    return {initAnimations, cleanup}
}
