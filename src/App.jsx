import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const HeroRef = useRef(null);
  const HeroImage = useRef(null);

  useGSAP(
    () => {
      // ========================================
      // HERO BACKGROUND ANIMATION
      // ========================================

      gsap.fromTo(
        HeroRef.current,
        {
          backgroundColor: "#6b7280",
        },
        {
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          ease: "none",

          scrollTrigger: {
            trigger: HeroRef.current,
            start: "top top",
            end: "+=300",
            scrub: 1,
            markers : true,
          },
        },
      );

      // ========================================
      // HERO IMAGE ANIMATION
      // ========================================

      gsap.to(HeroImage.current, {
        scale: 1.2,
        y: 950,
        x: 1100,
        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=500",
          duration: 2,
          scrub: 1,
          //   markers: true,
        },
      });
    },
    {
      scope: HeroRef,
    },
  );

  return (
    <main>
      <section ref={HeroRef} className="relative h-screen   z-10">
        <img
          ref={HeroImage}
          src="./images/HeroImage.png"
          className="absolute bottom-0 left-0 w-[35%] z-20"
          alt="Airfilter"
        />
      </section>

      <section className="relative h-screen bg-green-400 z-0">
        <h2>Second Section</h2>
      </section>
    </main>
  );
}

export default App;
