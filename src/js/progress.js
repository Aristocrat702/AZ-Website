export function initScrollProgress() {

    const bar = document.getElementById("scrollProgress");

    if (!bar) return;

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;

        bar.style.width = progress + "%";

    });

}