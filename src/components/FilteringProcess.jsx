import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FilteringProcess = () => {
  const FilterSectionRef = useRef(null);

  const FilterFlowRef = useRef(null);
  const FilterCardsRef = useRef([]);

  const AirParticlesRef = useRef([]);
  const AirflowLineRef = useRef(null);
  const FilterProgressRef = useRef(null);

  useGSAP(() => {
    // ========================================
    // SECTION 5 — FILTER EXPERIENCE
    // ========================================

    const filterCards = FilterCardsRef.current;

    gsap.set(filterCards, {
      opacity: 0,
      scale: 0.88,
      y: 80,
    });

    gsap.set(filterCards[0], {
      opacity: 1,
      scale: 1,
      y: 0,
    });

    // ========================================
    // PINNED FILTER EXPERIENCE
    // ========================================

    const filterMasterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: FilterFlowRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // ========================================
    // CARD 01 → CARD 02
    // ========================================

    filterMasterTimeline
      .to(filterCards[0], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[1],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 02 → CARD 03
    // ========================================

    filterMasterTimeline
      .to(filterCards[1], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[2],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 03 → CARD 04
    // ========================================

    filterMasterTimeline
      .to(filterCards[2], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[3],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 04 → CARD 05
    // ========================================

    filterMasterTimeline
      .to(filterCards[3], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[4],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );
  });

  return (
    <section
      ref={FilterSectionRef}
      className="
    relative
    overflow-hidden
    bg-[#111315]
    px-6
    pt-28
    pb-8
    text-[#111315]
    lg:px-16
  "
    >
      {/* =====================================
      FILTER FLOW — PINNED EXPERIENCE
  ===================================== */}

      <div
        ref={FilterFlowRef}
        className="
      relative
      mt-16
      h-[380vh]
    "
      >
        {/* =====================================
        PINNED MAIN BOX
    ===================================== */}

        <div
          className="
        sticky
        top-0
        flex
        h-screen
        items-center
        justify-center
      "
        >
          <div
            className="
          relative
          h-[82vh]
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-black/10
          bg-[#6b7280]
        "
          >
            {/* =====================================
            BACKGROUND DECORATION
        ===================================== */}

            <div
              className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-125
            w-125
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-black/2.5
            blur-[100px]
          "
            />

            {/* =====================================
            TOP HEADER
        ===================================== */}

            <div
              className="
            absolute
            left-6
            right-6
            top-6
            z-30
            flex
            items-center
            justify-between
            lg:left-10
            lg:right-10
            lg:top-8
          "
            >
              <span
                className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-black/40
            "
              >
                Air purification process
              </span>

              <span
                ref={FilterProgressRef}
                className="
              text-xs
              font-medium
              tracking-[0.2em]
              text-black/40
            "
              >
                01 / 05
              </span>
            </div>

            {/* =====================================
            AIRFLOW PATH
        ===================================== */}

            <div
              className="
            absolute
            bottom-10
            left-1/2
            top-20
            w-px
            -translate-x-1/2
            bg-black/10
          "
            />

            <div
              ref={AirflowLineRef}
              className="
            absolute
            bottom-10
            left-1/2
            top-20
            w-[2px]
            origin-top
            -translate-x-1/2
            scale-y-0
            bg-black/40
          "
            />

            {/* =====================================
            AIR PARTICLES
        ===================================== */}

            <span
              ref={(el) => (AirParticlesRef.current[0] = el)}
              className="
            absolute
            left-1/2
            top-[23%]
            z-20
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-black/40
          "
            />

            <span
              ref={(el) => (AirParticlesRef.current[1] = el)}
              className="
            absolute
            left-[48%]
            top-[27%]
            z-20
            h-2
            w-2
            rounded-full
            bg-black/30
          "
            />

            <span
              ref={(el) => (AirParticlesRef.current[2] = el)}
              className="
            absolute
            left-[53%]
            top-[30%]
            z-20
            h-2.5
            w-2.5
            rounded-full
            bg-black/25
          "
            />

            <span
              ref={(el) => (AirParticlesRef.current[3] = el)}
              className="
            absolute
            left-[46%]
            top-[34%]
            z-20
            h-1.5
            w-1.5
            rounded-full
            bg-black/35
          "
            />

            {/* =====================================
            FILTER CARDS CONTAINER
            ===================================== */}

            <div
              className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            px-5
            sm:px-8
            lg:px-14
          "
            >
              {/* =================================
              CARD 01 — DIRTY AIR
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[0] = el)}
                className="
              absolute
              w-full
              max-w-4xl
              rounded-4xl
              border
              border-black/10
              bg-[#111315]
              text-white
              p-8
              opacity-0
              sm:p-10
              lg:p-14
            "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/80
                "
                  >
                    Incoming Air
                  </span>

                  <span className="text-sm text-white/80">01</span>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <i
                    className="
                  ri-cloud-windy-line
                  text-5xl
                  text-white/80
                  sm:text-6xl
                  lg:text-7xl
                "
                  />

                  <h3
                    className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-8xl
                "
                  >
                    Dirty Air
                  </h3>

                  <p
                    className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                  text-white/60
                  lg:text-lg
                "
                  >
                    Dust, smoke, pollen and airborne particles enter the
                    purification system.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 02 — PRE FILTER
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[1] = el)}
                className="
              absolute
              w-full
              max-w-4xl
              rounded-[2rem]
              border
              border-black/10
              bg-white
              p-8
              opacity-0
              sm:p-10
              lg:p-14
            "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-black/35
                "
                  >
                    Filtration Stage 01
                  </span>

                  <span className="text-sm text-black/30">02</span>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <i
                    className="
                  ri-filter-line
                  text-5xl
                  text-black/50
                  sm:text-6xl
                  lg:text-7xl
                "
                  />

                  <h3
                    className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-8xl
                "
                  >
                    Pre Filter
                  </h3>

                  <p
                    className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                  text-black/45
                  lg:text-lg
                "
                  >
                    The first layer captures larger dust, hair and visible
                    airborne particles.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 03 — HEPA H14
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[2] = el)}
                className="
              absolute
              w-full
              max-w-4xl
              rounded-[2rem]
              border
              border-white/10
             bg-[#111315]
              p-8
              opacity-0
              sm:p-10
              lg:p-14
            "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/80
                "
                  >
                    Filtration Stage 02
                  </span>

                  <span className="text-sm text-white/80">03</span>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <i
                    className="
                  ri-shield-check-line
                  text-5xl
                text-white/80
                  sm:text-6xl
                  lg:text-7xl
                "
                  />

                  <h3
                    className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white/80
                  sm:text-6xl
                  lg:text-8xl
                "
                  >
                    HEPA H14
                  </h3>

                  <p
                    className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                 text-white/60
                  lg:text-lg
                "
                  >
                    Fine airborne particles move through the high-efficiency
                    HEPA filtration layer.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 04 — CARBON FILTER
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[3] = el)}
                className="
              absolute
              w-full
              max-w-4xl
              rounded-[2rem]
              border
              border-black/10
              bg-white
              p-8
              opacity-0
              sm:p-10
              lg:p-14
            "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-black/35
                "
                  >
                    Filtration Stage 03
                  </span>

                  <span className="text-sm text-black/30">04</span>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <i
                    className="
                  ri-bubble-chart-line
                  text-5xl
                  text-black/50
                  sm:text-6xl
                  lg:text-7xl
                "
                  />

                  <h3
                    className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-8xl
                "
                  >
                    Carbon Filter
                  </h3>

                  <p
                    className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                  text-black/45
                  lg:text-lg
                "
                  >
                    Activated carbon helps reduce unwanted odors and gaseous
                    pollutants.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 05 — CLEAN AIR
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[4] = el)}
                className="
              absolute
              w-full
              max-w-4xl
              rounded-[2rem]
              bg-[#111315]
              p-8
              text-white
              opacity-0
              sm:p-10
              lg:p-14
            "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/35
                "
                  >
                    Purified Air
                  </span>

                  <span className="text-sm text-white/30">05</span>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                  <i
                    className="
                  ri-leaf-line
                  text-5xl
                  text-white/60
                  sm:text-6xl
                  lg:text-7xl
                "
                  />

                  <h3
                    className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-8xl
                "
                  >
                    Clean Air
                  </h3>

                  <p
                    className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                  text-white/40
                  lg:text-lg
                "
                  >
                    Cleaner air leaves the system and returns to your living
                    space.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
            BOTTOM INFORMATION
        ===================================== */}

            <div
              className="
            absolute
            bottom-5
            left-6
            right-6
            z-30
            flex
            items-center
            justify-between
            lg:left-10
            lg:right-10
          "
            >
              <span
                className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-black/30
            "
              >
                Multi-layer purification
              </span>

              <span
                className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-black/30
            "
              >
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilteringProcess;
