gsap.registerPlugin(ScrollTrigger);

console.log("GSAP loaded:", typeof gsap);

gsap.from(".hero-text", {
  x: -250,
  opacity: 0,
  duration: 1.8,
  ease: "power3.out"
});

gsap.from(".hero-card", {
  x: 250,
  opacity: 0,
  duration: 1.8,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".hero .btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});

gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 1
  });
});

gsap.utils.toArray(".skills-grid .card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    scale: 0.7,
    opacity: 0,
    duration: 0.8
  });
});