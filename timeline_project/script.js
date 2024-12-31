let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.4,
  ease: "power3.linear",
  stagger: 0.05,
});

tl.from("#main h1", {
  x: -200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.4,
});

tl.from("#main img", {
  x: 100,
  rotate: 45,
  stagger: 0.2,
  opacity: 0,
  duration: 0.4,
});
