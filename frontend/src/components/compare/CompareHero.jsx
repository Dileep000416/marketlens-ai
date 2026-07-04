import {
  Sparkles,
  Search,
  ArrowRightLeft,
  BrainCircuit,
  BarChart3,
  Trophy,
} from "lucide-react";

export default function CompareHero({
  company1,
  setCompany1,
  company2,
  setCompany2,
  compareCompanies,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-10
        md:p-16
        mb-14
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-28
          -left-28
          h-80
          w-80
          rounded-full
          bg-purple-600/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-purple-500/30
            bg-purple-500/10
            px-5
            py-2
            text-sm
            text-purple-300
          "
        >
          <Sparkles size={16} />

          AI Comparison Engine

        </div>

        {/* Heading */}

        <h1
          className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            leading-tight
          "
        >
          Compare

          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              to-pink-400
            "
          >
            {" "}Competitors
          </span>

        </h1>

        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            text-gray-400
            leading-9
          "
        >
          Compare companies side-by-side using AI-generated business
          intelligence, market activity, news volume, opportunities,
          risks and competitive analysis.
        </p>

        {/* Compare Inputs */}

        <div
          className="
            mt-12
            grid
            lg:grid-cols-[1fr_auto_1fr_auto]
            gap-5
            items-center
          "
        >

          {/* Company One */}

          <div className="relative">

            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              type="text"
              placeholder="First company"
              value={company1}
              onChange={(e) => setCompany1(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-5
                pl-14
                pr-6
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />

          </div>

          {/* VS */}

          <div
            className="
              hidden
              lg:flex
              h-14
              w-14
              rounded-full
              border
              border-purple-500/30
              bg-purple-500/10
              items-center
              justify-center
            "
          >

            <ArrowRightLeft
              className="text-purple-300"
              size={22}
            />

          </div>

          {/* Company Two */}

          <div className="relative">

            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              type="text"
              placeholder="Second company"
              value={company2}
              onChange={(e) => setCompany2(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-5
                pl-14
                pr-6
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />

          </div>

          {/* Compare Button */}

          <button
            onClick={() => compareCompanies()}
            className="
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              px-10
              py-5
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
            "
          >
            Compare
          </button>

        </div>

        {/* Features */}

        <div
          className="
            mt-14
            grid
            md:grid-cols-3
            gap-5
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <BrainCircuit
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">
              AI Insights
            </h3>

            <p className="mt-2 text-gray-400">
              Compare opportunities and risks using Groq AI.
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <BarChart3
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">
              Live Metrics
            </h3>

            <p className="mt-2 text-gray-400">
              Activity scores, news volume and source comparison.
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <Trophy
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">
              AI Winner
            </h3>

            <p className="mt-2 text-gray-400">
              Instantly identify the stronger market performer.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}