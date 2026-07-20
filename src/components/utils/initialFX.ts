import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  gsap.fromTo(
    ".landing-info h3, .landing-intro h1, .landing-intro h2",
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
    }
  );
}