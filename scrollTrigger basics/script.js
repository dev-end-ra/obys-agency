// gsap.from("#page1 #circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 720,
// });

// gsap.from("#page2 #circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 720,
//   // scrollTrigger: "#page2 #circle",  // simple method

//   scrollTrigger: {                     // 2nd method
//     trigger: "#page2 #circle",
//     scroller: "body",
//     start: "top 60%",
//     scrub: 2,         // animates with scrolling percentage
//   },
// });

// PIN PROPERTY
gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",     // whenever we use pin property always trigger the parent
    scroller: "body",
    pin: true,
    scrub: 2,
    markers: true,
    start: "top 0",
    end: "top -100%"
  },
});
