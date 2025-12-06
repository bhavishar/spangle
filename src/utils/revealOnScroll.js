export default function initRevealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight - 120;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < triggerPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
}
