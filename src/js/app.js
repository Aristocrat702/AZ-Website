import { initLenis } from "./lenis.js";
import { initAnimations } from "./animations.js";

export function initApp() {

    const lenis = initLenis();
    initAnimations();

    // FIX: smooth anchor navigation (Lenis-friendly)
    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (e) => {
            e.preventDefault();

            const id = link.getAttribute("href");
            const target = document.querySelector(id);

            if (!target) return;

            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.2
            });

        });

    });

}