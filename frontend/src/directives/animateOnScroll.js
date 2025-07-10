const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

export default {
  mounted(el) {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  },
  beforeUnmount(el) {
    observer.unobserve(el);
  }
};
