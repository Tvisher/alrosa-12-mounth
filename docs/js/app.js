window.addEventListener('load', (e) => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 20, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 30, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    });
});

const triggerSection = document.querySelector('.section-page[data-page="1"]');
const toTopBtn = document.querySelector('#to-top-btn');

toTopBtn.onclick = (e) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

window.addEventListener('scroll', (e) => {
    const triggerPosition = triggerSection.getBoundingClientRect().top;
    triggerPosition < 0 ? toTopBtn.classList.add('show') : toTopBtn.classList.remove('show')

})