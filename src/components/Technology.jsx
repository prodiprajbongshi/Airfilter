import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {

const TechnologySectionRef = useRef(null);
const TechnologyLabelRef = useRef(null);
const TechnologyTitleRef = useRef(null);
const TechnologyDescriptionRef = useRef(null);
const TechnologyCardsRef = useRef([]);


useGSAP(() => {
    // ========================================
// SECTION 4 — TECHNOLOGY
// ========================================

const technologyTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: TechnologySectionRef.current,
    start: "top 25%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});


// Label
technologyTimeline.fromTo(
  TechnologyLabelRef.current,
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  }
);


// Main heading
technologyTimeline.fromTo(
  TechnologyTitleRef.current,
  {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "power4.out",
  },
  "-=0.3"
);


// Description
technologyTimeline.fromTo(
  TechnologyDescriptionRef.current,
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  "-=0.6"
);


// Technology cards
technologyTimeline.fromTo(
  TechnologyCardsRef.current,
  {
    opacity: 0,
    y: 80,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
  },
  "-=0.3"
);

})


  return (
    <section
  ref={TechnologySectionRef}
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#6b7280]
    px-6
    py-28
    text-white
    lg:px-16
  "
>
  {/* Background glow */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[700px]
      w-[700px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-white/[0.025]
      blur-[120px]
    "
  />

  {/* Background grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
      [background-size:80px_80px]
    "
  />

  {/* Side borders */}
  <div
    className="
      pointer-events-none
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
      pointer-events-none
      absolute
      right-6
      top-0
      h-full
      w-px
      bg-white/[0.08]
      lg:right-16
    "
  />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* --------------------------------
        TOP HEADER
    -------------------------------- */}
    <div
      ref={TechnologyLabelRef}
      className="
        mb-16
        flex
        items-center
        justify-between
        lg:mb-24
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
          Technology
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
        04
      </span>
    </div>


    {/* --------------------------------
        TITLE
    -------------------------------- */}
    <div className="max-w-5xl">

      <div
        ref={TechnologyTitleRef}
        className="overflow-hidden"
      >
        <h2
          className="
            text-[clamp(3.5rem,8vw,8.5rem)]
            font-semibold
            leading-[0.9]
            tracking-[-0.05em]
          "
        >
          Technology
          <br />

          <span className="text-white/35">
            that works
          </span>

          <br />

          quietly.
        </h2>
      </div>


      <div
        ref={TechnologyDescriptionRef}
        className="
          mt-12
          max-w-xl
          lg:ml-[25%]
        "
      >
        <p
          className="
            text-base
            font-light
            leading-7
            text-white/45
            lg:text-lg
          "
        >
          Advanced air purification technology designed to
          remove pollutants, monitor air quality, and keep your
          environment cleaner — without disrupting your life.
        </p>
      </div>
    </div>


    {/* --------------------------------
        TECHNOLOGY CARDS
    -------------------------------- */}
    <div
      className="
        mt-24
        grid
        grid-cols-1
        gap-px
        overflow-hidden
        border
        border-white/10
        bg-white/10
        md:grid-cols-2
      "
    >

      {/* CARD 01 */}
      <div
        ref={(el) => (TechnologyCardsRef.current[0] = el)}
        className="
          group
          relative
          min-h-[320px]
          overflow-hidden
          bg-[#111315]
          p-8
          transition-colors
          duration-500
          hover:bg-[#181b1e]
          lg:p-10
        "
      >

        {/* Number */}
        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            tracking-[0.25em]
            text-white/20
          "
        >
          01
        </span>

        {/* Icon */}
        <div
          className="
            mb-20
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-white/30
          "
        >
          <i className="ri-radar-line text-2xl text-white/70" />
        </div>

        {/* Content */}
        <div>
          <h3
            className="
              text-2xl
              font-medium
              tracking-tight
              lg:text-3xl
            "
          >
            360° Air Intake
          </h3>

          <p
            className="
              mt-4
              max-w-sm
              text-sm
              font-light
              leading-6
              text-white/40
            "
          >
            Pulls polluted air from every direction for
            efficient and consistent purification.
          </p>
        </div>

        {/* Arrow */}
        <div
          className="
            absolute
            bottom-8
            right-8
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:border-white/30
          "
        >
          <i className="ri-arrow-right-up-line text-white/50" />
        </div>
      </div>


      {/* CARD 02 */}
      <div
        ref={(el) => (TechnologyCardsRef.current[1] = el)}
        className="
          group
          relative
          min-h-[320px]
          overflow-hidden
          bg-[#111315]
          p-8
          transition-colors
          duration-500
          hover:bg-[#181b1e]
          lg:p-10
        "
      >

        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            tracking-[0.25em]
            text-white/20
          "
        >
          02
        </span>

        <div
          className="
            mb-20
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-white/30
          "
        >
          <i className="ri-filter-3-line text-2xl text-white/70" />
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-medium
              tracking-tight
              lg:text-3xl
            "
          >
            HEPA H14 Filter
          </h3>

          <p
            className="
              mt-4
              max-w-sm
              text-sm
              font-light
              leading-6
              text-white/40
            "
          >
            High-efficiency filtration captures microscopic
            airborne particles for cleaner indoor air.
          </p>
        </div>

        <div
          className="
            absolute
            bottom-8
            right-8
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:border-white/30
          "
        >
          <i className="ri-arrow-right-up-line text-white/50" />
        </div>
      </div>


      {/* CARD 03 */}
      <div
        ref={(el) => (TechnologyCardsRef.current[2] = el)}
        className="
          group
          relative
          min-h-[320px]
          overflow-hidden
          bg-[#111315]
          p-8
          transition-colors
          duration-500
          hover:bg-[#181b1e]
          lg:p-10
        "
      >

        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            tracking-[0.25em]
            text-white/20
          "
        >
          03
        </span>

        <div
          className="
            mb-20
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-white/30
          "
        >
          <i className="ri-moon-line text-2xl text-white/70" />
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-medium
              tracking-tight
              lg:text-3xl
            "
          >
            Silent Mode
          </h3>

          <p
            className="
              mt-4
              max-w-sm
              text-sm
              font-light
              leading-6
              text-white/40
            "
          >
            Quiet operation keeps your space comfortable while
            purification continues in the background.
          </p>
        </div>

        <div
          className="
            absolute
            bottom-8
            right-8
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:border-white/30
          "
        >
          <i className="ri-arrow-right-up-line text-white/50" />
        </div>
      </div>


      {/* CARD 04 */}
      <div
        ref={(el) => (TechnologyCardsRef.current[3] = el)}
        className="
          group
          relative
          min-h-[320px]
          overflow-hidden
          bg-[#111315]
          p-8
          transition-colors
          duration-500
          hover:bg-[#181b1e]
          lg:p-10
        "
      >

        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            tracking-[0.25em]
            text-white/20
          "
        >
          04
        </span>

        <div
          className="
            mb-20
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-white/30
          "
        >
          <i className="ri-pulse-line text-2xl text-white/70" />
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-medium
              tracking-tight
              lg:text-3xl
            "
          >
            Smart Air Monitoring
          </h3>

          <p
            className="
              mt-4
              max-w-sm
              text-sm
              font-light
              leading-6
              text-white/40
            "
          >
            Continuously monitors indoor air conditions and
            provides real-time feedback about air quality.
          </p>
        </div>

        <div
          className="
            absolute
            bottom-8
            right-8
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:border-white/30
          "
        >
          <i className="ri-arrow-right-up-line text-white/50" />
        </div>
      </div>

    </div>


    {/* --------------------------------
        BOTTOM
    -------------------------------- */}
    <div
      className="
        mt-8
        flex
        items-center
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
        Engineered for cleaner air
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
          Advanced Air Technology
        </span>
      </div>
    </div>

  </div>
</section>
  )
}

export default Technology
