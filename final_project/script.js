let tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.25,
});

tl.from("#line1-timer", {
  opacity: 0,
  onStart: () => {
    let timer = document.querySelector("#line1-timer h5");
    let counter = 0;
    let interval = setInterval(() => {
      timer.innerHTML = `${counter}`;
      if (counter === 100) clearInterval(interval);
      counter++;
    }, 25);
  },
});

tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3.4,
});

tl.from("#page1", {
  y: 1600,
  opacity: 0,
  delay: 0.2,
  duration: 0.5,
  ease: "power4",
});

tl.to("#loader", {
  display: "none",
});
