var crsr = document.querySelector("#curser");
var blurr = document.querySelector("#curser-blurr");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blurr.style.left = dets.x - 250+ "px"
    blurr.style.top = dets.y- 250+ "px"
});



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",    
        start: "top -50%",
        end: "top -80%",
        scrub: 1,
    }
});

gsap.from("#about-us", {
    y:40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        marker: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 1,
    }
});

gsap.from("#collan1", {
    x:-50,
    y:-50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#collan1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 1,
    }
});

gsap.from("#collan2", {
    x:-70,
    y:70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#collan1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 1,
    }
});

gsap.from("#page4 h1", {
    y:50,

    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
});


