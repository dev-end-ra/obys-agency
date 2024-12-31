// GSAP BASICS
gsap.to("#box", {
    x: 1000,
    duration: 2,
    backgroundColor: "blue",
    rotate: 360,
})

gsap.to("#box", {
    y: 500,
    backgroundColor: "yellow",
    rotate: -360,
    duration: 2,
    delay: 2,
})

// GSAP TIMELINE
let tl = gsap.timeline();
tl.to("#box1", {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5
})

tl.to("#box2", {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5
})

tl.to("#box3", {
    x: 1200,
    duration: 2,
    rotate: 360,
    scale: 0.5
})