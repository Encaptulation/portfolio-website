// Add scrolling animation (simple fade-in)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0px)";
      }
    });
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.8s";
    observer.observe(el);
  });
});
