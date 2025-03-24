// src/utils/scrollAnimation.ts

export const initScrollAnimation = () => {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.fade-in-view');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the element is in view
        }
    );

    elements.forEach((el) => observer.observe(el));
};
