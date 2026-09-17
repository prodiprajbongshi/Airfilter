import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);



  useGSAP(
    () => {
      const track = trackRef.current;
      const cards = cardsRef.current;

      if (!track || !cards.length) return;

      // --------------------------------
      // Horizontal Scroll
      // --------------------------------
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // --------------------------------
      // Card Entrance Animation
      // --------------------------------
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      return () => {
        horizontalTween.scrollTrigger?.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#111315] text-white"
    >
      <div
        ref={trackRef}
        className="
          flex
          h-screen
          w-max
          items-center
          gap-8
          px-6
          lg:gap-12
          lg:px-16
        "
      >
        {/* -------------------------------- */}
        {/* Intro */}
        {/* -------------------------------- */}

        <div
          className="
            flex
            w-[80vw]
            max-w-[700px]
            flex-shrink-0
            flex-col
            justify-center
            lg:w-[55vw]
          "
        >
          <span
            className="
              mb-6
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/40
            "
          >
            Inside the system
          </span>

          <h2
            className="
              text-[clamp(4rem,9vw,9rem)]
              font-semibold
              leading-[0.85]
              tracking-[-0.06em]
            "
          >
            Built
            <br />
            <span className="text-white/35">to perform.</span>
          </h2>

          <p
            className="
              mt-8
              max-w-md
              text-base
              leading-7
              text-white/45
              lg:text-lg
            "
          >
            Every component inside the purifier works together to deliver
            cleaner air with minimal noise and energy.
          </p>

          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30">
            <span className="h-px w-12 bg-white/20" />
            Scroll horizontally
          </div>
        </div>

        {/* -------------------------------- */}
        {/* Card 01 — Filter */}
        {/* -------------------------------- */}

        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="
            group
            relative
            flex
            h-[65vh]
            w-[75vw]
            max-w-[520px]
            flex-shrink-0
            flex-col
            justify-between
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#1b1e20]
            p-8
            transition-transform
            duration-500
            hover:scale-[0.98]
            sm:p-10
            lg:h-[70vh]
            lg:p-12
          "
        >
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Component 01
            </span>

            <span className="text-sm text-white/25">01</span>
          </div>

          <div>
            <div
              className="
                mb-10
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-transform
                duration-500
                group-hover:rotate-12
              "
            >
              <i className="ri-filter-3-line text-5xl text-white/60" />
            </div>

            <h3 className="text-5xl font-semibold tracking-[-0.05em] lg:text-7xl">
              Filter
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 lg:text-base">
              Multi-layer filtration captures dust, particles and airborne
              pollutants before clean air is released.
            </p>
          </div>

          <div className="h-px w-full bg-white/10" />
        </div>

        {/* -------------------------------- */}
        {/* Card 02 — Sensor */}
        {/* -------------------------------- */}

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="
            group
            relative
            flex
            h-[65vh]
            w-[75vw]
            max-w-[520px]
            flex-shrink-0
            flex-col
            justify-between
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#e8e9e7]
            p-8
            text-[#111315]
            transition-transform
            duration-500
            hover:scale-[0.98]
            sm:p-10
            lg:h-[70vh]
            lg:p-12
          "
        >
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
              Component 02
            </span>

            <span className="text-sm text-black/25">02</span>
          </div>

          <div>
            <div
              className="
                mb-10
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                transition-transform
                duration-500
                group-hover:scale-110
              "
            >
              <i className="ri-radar-line text-5xl text-black/50" />
            </div>

            <h3 className="text-5xl font-semibold tracking-[-0.05em] lg:text-7xl">
              Sensor
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-black/45 lg:text-base">
              Real-time air quality sensing continuously monitors particles and
              adjusts purification performance.
            </p>
          </div>

          <div className="h-px w-full bg-black/10" />
        </div>

        {/* -------------------------------- */}
        {/* Card 03 — Motor */}
        {/* -------------------------------- */}

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="
            group
            relative
            flex
            h-[65vh]
            w-[75vw]
            max-w-[520px]
            flex-shrink-0
            flex-col
            justify-between
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#1b1e20]
            p-8
            transition-transform
            duration-500
            hover:scale-[0.98]
            sm:p-10
            lg:h-[70vh]
            lg:p-12
          "
        >
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Component 03
            </span>

            <span className="text-sm text-white/25">03</span>
          </div>

          <div>
            <div
              className="
                mb-10
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-transform
                duration-[2000ms]
                group-hover:rotate-[360deg]
              "
            >
              <i className="ri-settings-5-line text-5xl text-white/60" />
            </div>

            <h3 className="text-5xl font-semibold tracking-[-0.05em] lg:text-7xl">
              Motor
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 lg:text-base">
              A high-efficiency motor creates powerful airflow while keeping
              operation smooth and quiet.
            </p>
          </div>

          <div className="h-px w-full bg-white/10" />
        </div>

        {/* -------------------------------- */}
        {/* Card 04 — App */}
        {/* -------------------------------- */}

        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="
            group
            relative
            flex
            h-[65vh]
            w-[75vw]
            max-w-[520px]
            flex-shrink-0
            flex-col
            justify-between
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#dfe1e4]
            p-8
            text-[#111315]
            transition-transform
            duration-500
            hover:scale-[0.98]
            sm:p-10
            lg:h-[70vh]
            lg:p-12
          "
        >
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
              Component 04
            </span>

            <span className="text-sm text-black/25">04</span>
          </div>

          <div>
            <div
              className="
                mb-10
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                transition-transform
                duration-500
                group-hover:-translate-y-2
              "
            >
              <i className="ri-smartphone-line text-5xl text-black/50" />
            </div>

            <h3 className="text-5xl font-semibold tracking-[-0.05em] lg:text-7xl">
              App
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-black/45 lg:text-base">
              Control your purifier, monitor air quality and manage settings
              directly from your smartphone.
            </p>
          </div>

          <div className="h-px w-full bg-black/10" />
        </div>

        {/* -------------------------------- */}
        {/* Ending Space */}
        {/* -------------------------------- */}

        <div className="w-[15vw] flex-shrink-0" />
      </div>
    </section>
  );
};

export default Product;
