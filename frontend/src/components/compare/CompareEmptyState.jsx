import {
  Sparkles,
  ArrowRightLeft,
  BrainCircuit,
} from "lucide-react";

export default function CompareEmptyState() {
  return (
    <div
      className="
        mt-14
        rounded-3xl
        border
        border-dashed
        border-purple-500/30
        bg-white/[0.03]
        backdrop-blur-xl
        p-12
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-purple-500/10
        "
      >
        <ArrowRightLeft
          className="text-purple-400"
          size={40}
        />
      </div>

      <h2 className="mt-8 text-4xl font-black">
        Compare Competitors
      </h2>

      <p
        className="
          mt-5
          max-w-2xl
          mx-auto
          text-gray-400
          leading-8
        "
      >
        Enter two company names above to generate an
        AI-powered competitor comparison including
        activity score, news coverage, winner prediction,
        analytics and executive recommendations.
      </p>

      <div
        className="
          mt-12
          grid
          md:grid-cols-3
          gap-6
        "
      >

        <div
          className="
            rounded-2xl
            bg-white/5
            border
            border-white/10
            p-6
          "
        >
          <BrainCircuit
            className="text-purple-400 mx-auto mb-4"
            size={34}
          />

          <h3 className="font-semibold">
            AI Analysis
          </h3>

          <p className="text-gray-400 mt-2">
            Compare competitors using AI insights.
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/5
            border
            border-white/10
            p-6
          "
        >
          <Sparkles
            className="text-purple-400 mx-auto mb-4"
            size={34}
          />

          <h3 className="font-semibold">
            Executive Summary
          </h3>

          <p className="text-gray-400 mt-2">
            Understand which company leads the market.
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/5
            border
            border-white/10
            p-6
          "
        >
          <ArrowRightLeft
            className="text-purple-400 mx-auto mb-4"
            size={34}
          />

          <h3 className="font-semibold">
            Side-by-Side Comparison
          </h3>

          <p className="text-gray-400 mt-2">
            Compare metrics with beautiful visualizations.
          </p>
        </div>

      </div>
    </div>
  );
}