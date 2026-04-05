// src/utils/textRevealAnimation.js
import { gsap } from 'gsap';

/**
 * Creates a scroll-linked background position sweep for text gradients.
 * @param {string} id - The ID of the HTML element to animate (without the #)
 */
export function createTextReveal(id) {
    gsap.to(`#${id}`, {
        backgroundPosition: "0% 0%",
        ease: "none",
        scrollTrigger: {
            trigger: `#${id}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
        }
    });
}