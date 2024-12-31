gsap.to("#page2 h1", {
  transform: "translateX(-125%)",
  ease: "power3.linear",
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2",
    scrub: 3,
    pin: true,
    markers: true,

    start: "top 0",
    end: "top -100%",
  },
});
