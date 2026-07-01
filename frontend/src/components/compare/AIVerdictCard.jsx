import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function AIVerdictCard({
  comparison,
}) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-purple-500/20
      bg-gradient-to-br
      from-purple-500/10
      via-white/5
      to-pink-500/10
      backdrop-blur-xl
      p-8
      "
    >
      <div
        className="
        absolute
        -top-16
        -right-16
        h-64
        w-64
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center gap-3">

          <Brain
            className="text-purple-400"
            size={34}
          />

          <h2 className="text-3xl font-bold">
            AI Executive Verdict
          </h2>

        </div>

        {/* Executive Verdict */}

        <div className="mt-8">

          <h3 className="text-lg font-semibold text-purple-300 mb-3">
            Executive Summary
          </h3>

          <p className="text-gray-300 leading-8">
            {comparison.executive_verdict}
          </p>

        </div>

        {/* Strengths */}

        <div className="mt-10">

          <div className="flex items-center gap-2 mb-4">

            <CheckCircle2
              className="text-green-400"
              size={20}
            />

            <h3 className="font-semibold text-green-300">
              Competitive Strengths
            </h3>

          </div>

          <ul className="space-y-3">

            {comparison.strengths.company_1.map(
              (item, index) => (

                <li
                  key={index}
                  className="text-gray-300"
                >
                  • {item}
                </li>

              )
            )}

          </ul>

        </div>

        {/* Risks */}

        <div className="mt-10">

          <div className="flex items-center gap-2 mb-4">

            <AlertTriangle
              className="text-red-400"
              size={20}
            />

            <h3 className="font-semibold text-red-300">
              Strategic Risks
            </h3>

          </div>

          <ul className="space-y-3">

            {comparison.strategic_risks.map(
              (item, index) => (

                <li
                  key={index}
                  className="text-gray-300"
                >
                  • {item}
                </li>

              )
            )}

          </ul>

        </div>

        {/* Recommendation */}

        <div
          className="
          mt-10
          rounded-2xl
          border
          border-purple-500/20
          bg-purple-500/10
          p-6
          "
        >

          <div className="flex items-center gap-3">

            <Sparkles
              className="text-purple-400"
            />

            <h3 className="font-semibold">
              Business Recommendation
            </h3>

          </div>

          <p className="mt-4 text-gray-300 leading-8">
            {comparison.business_recommendation}
          </p>

        </div>

        {/* Confidence */}

        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          rounded-2xl
          bg-white/5
          p-5
          "
        >

          <div className="flex items-center gap-3">

            <ShieldCheck
              className="text-cyan-400"
            />

            <div>

              <h3 className="font-semibold">
                AI Confidence
              </h3>

              <p className="text-sm text-gray-400">
                {comparison.confidence.reason}
              </p>

            </div>

          </div>

          <span className="text-3xl font-black text-cyan-300">
            {comparison.confidence.score}%
          </span>

        </div>

      </div>
    </div>
  );
}