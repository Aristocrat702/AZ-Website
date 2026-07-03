import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {

    const items = document.querySelectorAll("[data-reveal]");

    items.forEach((el) => {

        gsap.fromTo(el,
            {
                opacity: 0,
                y: 30,
                filter: "blur(8px)"
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            }
        );

    });

    // subtle section breathing
    gsap.utils.toArray("section").forEach((section) => {

        gsap.fromTo(section,
            {
                opacity: 0.6
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: true
                }
            }
        );

    });

}