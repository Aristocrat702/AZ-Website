export function initCursor() {

    const cursor = document.querySelector(".cursor-glow");

    if (!cursor) return;

    window.addEventListener("mousemove", (e) => {

        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    });

}