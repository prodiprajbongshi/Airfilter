import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const HeroRef = useRef(null);
  const HeroImageWrapper = useRef(null);
  const HeroImage = useRef(null);

  const HeroContent = useRef(null);
  const HeroLabel = useRef(null);
  const HeroTitle = useRef(null);
  const HeroDescription = useRef(null);
  const HeroButton = useRef(null);
  const HeroSpec = useRef(null);
  const HeroGlow = useRef(null);
  const HeroOverlay = useRef(null);

  useGSAP(
    () => {
      // ========================================
      // HERO INTRO ANIMATION
      // ========================================

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        HeroImageWrapper.current,
        {
          opacity: 0,
          x: -150,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
        },
      )

        // Glow 
        .fromTo(
          HeroGlow.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          "-=1",
        )

        // Label
        .fromTo(
          HeroLabel.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.8",
        )

        // Heading
        .fromTo(
          HeroTitle.current,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.5",
        )

        // Description
        .fromTo(
          HeroDescription.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6",
        )

        // Button
        .fromTo(
          HeroButton.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5",
        )

        // Specification
        .fromTo(
          HeroSpec.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scurb: 1,
          },
          "-=0.4",
        );

      // ========================================
      // PRODUCT FLOATING ANIMATION
      // ========================================

      gsap.to(HeroImage.current, {
        y: -12,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ========================================
      // GLOW ANIMATION
      // ========================================

      gsap.to(HeroGlow.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ========================================
      // BACKGROUND OVERLAY
      // ========================================

      gsap.to(HeroOverlay.current, {
        opacity: 0.35,

        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
        },
      });


      gsap.fromTo(
        HeroImageWrapper.current,
        {
          x: 0,
          y: 0,
          scale: 1,
        },
        {
          x: 1100,
          y: 950,
         
          ease: "none",

          scrollTrigger: {
            trigger: HeroRef.current,
            start: "top top",
            end: "+=700",
            scrub: 1.2,
          },
        },
      );

      // ========================================
      // CONTENT SCROLL ANIMATION
      // ========================================

      gsap.to(HeroContent.current, {
        x: 80,
        opacity: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      });

      // ========================================
      // SPECIFICATION SCROLL ANIMATION
      // ========================================

      gsap.to(HeroSpec.current, {
        y: 50,
        opacity: 0,

        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=400",
          scrub: 1,
        },
      });
    },
    {
      scope: HeroRef,
    },
  );

  return (
    <main className="overflow-x-hidden">
      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section
        ref={HeroRef}
        className="
          relative
          z-10
          h-screen
          overflow-visible
          bg-[#6b7280]
        "
      >
        {/* ========================================
            DARK OVERLAY
        ======================================== */}

        <div
          ref={HeroOverlay}
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-black
            opacity-0
          "
        />

        {/* ========================================
            PRODUCT GLOW
        ======================================== */}

        <div
          ref={HeroGlow}
          className="
            pointer-events-none
            absolute
            bottom-[5%]
            left-[8%]
            z-0
            h-[450px]
            w-[400px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        {/* ========================================
            HERO IMAGE
        ======================================== */}

        <div
          ref={HeroImageWrapper}
          className="absolute bottom-0 left-0 z-20 w-[38%] lg:w-[40%]"
        >
          <img
            ref={HeroImage}
            src="./images/HeroImage.png"
            className="block w-full"
            alt="Airfilter"
          />
        </div>

        {/* ========================================
            HERO CONTENT
        ======================================== */}

        <div
          ref={HeroContent}
          className="
            absolute
            right-0
            top-1/2
            z-30
            w-[75%]
            -translate-y-1/2
            pl-32
            pr-10
            text-white
            lg:pl-64
          "
        >
          {/* ========================================
              LABEL
          ======================================== */}

          <div ref={HeroLabel} className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              Dreo Air Care
            </span>
          </div>

          {/* ========================================
              TITLE
          ======================================== */}

          <h1
            ref={HeroTitle}
            className="
              mb-6
              text-7xl
              font-bold
              leading-none
              tracking-tight
              sm:text-8xl
              lg:text-9xl
            "
          >
            Air Purifiers
          </h1>

          {/* ========================================
              DESCRIPTION
          ======================================== */}

          <p
            ref={HeroDescription}
            className="
              mb-8
              max-w-xl
              text-base
              font-light
              leading-7
              tracking-wide
              text-white/65
              lg:text-lg
            "
          >
            Dreo Air Purifiers for Home Large Room, H13 True HEPA Filter Removes
            Up to 99.985% of Particles Dust Smoke Pollen Pet Hair, PM2.5
            Monitor, Auto Mode, Smart WiFi Voice Control, Works with
            Alexa/Google.
          </p>

          {/* ========================================
              BUTTON
          ======================================== */}

          <button
            ref={HeroButton}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              tracking-wide
              text-black
              transition-all
              duration-500
              hover:bg-black
              hover:text-white
            "
          >
            <span>Learn More</span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <i
                className="
                  ri-arrow-right-line
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </button>
        </div>

        {/* ========================================
            PRODUCT SPECIFICATION
        ======================================== */}

        <div
          ref={HeroSpec}
          className="
            absolute
            bottom-10
            left-10
            z-30
            hidden
            md:block
          "
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Pure Air Technology
          </p>

          <div className="mt-3 flex items-center gap-4">
            <span className="text-3xl font-semibold text-white">99.985%</span>

            <span
              className="
                max-w-[140px]
                text-xs
                leading-4
                text-white/50
              "
            >
              Particle filtration efficiency
            </span>
          </div>
        </div>

        {/* ========================================
            SCROLL INDICATOR
        ======================================== */}

        <div
          className="
            absolute
            bottom-10
            right-10
            z-30
            hidden
            items-center
            gap-3
            text-white/40
            md:flex
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll
          </span>

          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* ========================================
          SECOND SECTION
      ======================================== */}

      <section
        className="
          relative
          z-0
          flex
          h-screen
          items-center
          justify-center
          bg-green-400
        "
      >
        <h2 className="text-6xl font-bold text-black">Second Section</h2>
      </section>
    </main>
  );
}

export default App;
