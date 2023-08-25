function bindScrollAnimationObserver() {
    const targets = document.querySelectorAll('.scroll-entry-animate');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px 0px 0px', // Only consider vertical margins
        threshold: 0.0 // Intersection threshold
      };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, options);

    targets.forEach(target => {
        observer.observe(target);
    });
}