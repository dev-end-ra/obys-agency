// LOCOMOTIVE FOR USING WITH GSAP
// LOCOSCROLL CODE
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// -------------------------------------------------------------------------- //

let all_h1 = document.querySelectorAll("#page2 h1");
console.log(all_h1);

Array.from(all_h1).forEach((elem, idx) => {
  let h1_content = elem.textContent;
  console.log(h1_content);
  let splitted_txt = h1_content.split("");
  let clutter = "";

  splitted_txt.forEach((elem, idx) => {
    clutter = clutter + `<span id="anim_letter">${elem}</span>`;
  });

  elem.innerHTML = clutter;

  gsap.to("#page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      scrub: 2,
      start: "top 50%",
      end: "top -10%",
    },
  });
});

// for single h1
// let h1 = document.querySelector("#first").textContent;
// let splitted_txt = h1.split("");
// let clutter = "";
// splitted_txt.forEach((elem, idx) => {
//   clutter = clutter + `<span id="anim_letter">${elem}</span>`;
// });
// document.querySelector("#first").innerHTML = clutter;

// gsap.to("#page2 h1 span", {
//     color: "#e3e3c4",
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: "#page2 h1 span",
//         scroller: "#main",
//         scrub: 2,
//         markers: true,
//         start: "top 50%",
//         end: "top 10%",
//     }
// })
