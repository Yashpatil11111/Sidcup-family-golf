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