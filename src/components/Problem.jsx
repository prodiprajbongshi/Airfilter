import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const ProblemSectionRef = useRef(null);
  const ProblemLabelRef = useRef(null);
  const ProblemDescriptionRef = useRef(null);
  const ProblemBottomRef = useRef(null);
  const ProblemTitleRef = useRef(null);
  const ProblemTitleLines = useRef([]);

  useGSAP(() => {
    // ========================================
    // SECTION 2 — PROBLEM ANIMATION
    // ========================================

    const problemTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ProblemSectionRef.current,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Label
    problemTimeline.fromTo(
      ProblemLabelRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
    );

    // Large heading
    problemTimeline.fromTo(
      ProblemTitleLines.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.5,
        scrub: true,
      },
      "-=0.3",
    );

    // Description
    problemTimeline.fromTo(
      ProblemDescriptionRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.6",
    );

    // Bottom information
    problemTimeline.fromTo(
      ProblemBottomRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );
  });

  return (
    <section
      ref={ProblemSectionRef}
      className="
    relative
    flex
    min-h-screen
    items-center
    overflow-hidden
    bg-[#111315]
    px-6
    py-24
    text-white
    lg:px-16
  "
    >
      {/* ========================================
      BACKGROUND ELEMENTS
  ======================================== */}

      <div
        className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[600px]
      w-[600px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-white/[0.025]
      blur-[100px]
    "
      />

      {/* Decorative Lines */}

      <div
        className="
      absolute
      left-6
      top-0
      h-full
      w-px
      bg-white/[0.08]
      lg:left-16
    "
      />

      <div
        className="
      absolute
      right-6
      top-0
      h-full
      w-px
      bg-white/[0.08]
      lg:right-16
    "
      />

      {/* ========================================
      CONTENT
  ======================================== */}

      <div
        className="
      relative
      z-10
      mx-auto
      w-full
      max-w-7xl
    "
      >
        {/* Section Number */}

        <div
          ref={ProblemLabelRef}
          className="
        mb-16
        flex
        items-center
        justify-between
      "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />

            <span
              className="
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-white/40
          "
            >
              The Problem
            </span>
          </div>

          <span
            className="
          text-xs
          font-medium
          tracking-[0.3em]
          text-white/30
        "
          >
            02
          </span>
        </div>

        {/* ========================================
        LARGE TEXT
    ======================================== */}

        <div ref={ProblemTitleRef} className="max-w-6xl">
          <h2
            className="
      text-[clamp(3.5rem,8vw,8.5rem)]
      font-semibold
      leading-[0.9]
      tracking-[-0.05em]
    "
          >
            <span ref={(el) => (ProblemTitleLines.current[0] = el)}>
              The air you
            </span>

            <br />

            <span ref={(el) => (ProblemTitleLines.current[1] = el)}>
              <span className="text-white/35">breathe</span> isn't
            </span>

            <br />

            <span ref={(el) => (ProblemTitleLines.current[2] = el)}>
              always <span className="text-white/35">clean.</span>
            </span>
          </h2>
        </div>

        {/* ========================================
        SUPPORTING TEXT
    ======================================== */}

        <div
          ref={ProblemDescriptionRef}
          className="
        mt-16
        flex
        max-w-3xl
        flex-col
        gap-6
        lg:ml-[25%]
        lg:flex-row
        lg:items-start
      "
        >
          <span
            className="
          mt-2
          hidden
          h-px
          w-12
          shrink-0
          bg-white/30
          lg:block
        "
          />

          <p
            className="
          max-w-xl
          text-base
          font-light
          leading-7
          text-white/45
          lg:text-lg
        "
          >
            Dust, smoke, pollen and microscopic particles can remain hidden in
            the air around you. What you cannot see can still affect the quality
            of the environment you live in.
          </p>
        </div>

        {/* ========================================
        BOTTOM INFO
    ======================================== */}

        <div
          ref={ProblemBottomRef}
          className="
        mt-20
        flex
        items-end
        justify-between
        border-t
        border-white/10
        pt-6
      "
        >
          <span
            className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.3em]
          text-white/30
        "
          >
            Invisible particles
          </span>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/40" />

            <span
              className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-white/30
          "
            >
              Air Quality Matters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
