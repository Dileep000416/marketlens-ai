import {
  Trophy,
  TrendingUp,
  ShieldCheck,
  Brain,
} from "lucide-react";

import AnimatedCounter from "../common/AnimatedCounter";

export default function WinnerCard({
  winner,
  company1,
  company2,
  comparison,
}) {
  const winnerData =
    winner === company1.name
      ? company1
      : company2;

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-yellow-500/20
      bg-gradient-to-br
      from-yellow-500/10
      via-white/5
      to-purple-500/10
      backdrop-blur-xl
      p-8
      "
    >
      <div
        className="
        absolute
        -top-16
        -right-16
        h-56
        w-56
        rounded-full
        bg-yellow-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center gap-3">

          <Trophy
            className="text-yellow-400"
            size={34}
          />

          <p className="uppercase tracking-[0.3em] text-sm text-yellow-300">
            AI Winner
          </p>

        </div>

        <h2 className="mt-5 text-5xl font-black">
          {winnerData.name}
        </h2>

        <p className="mt-5 text-gray-300 leading-8">
          {comparison.executive_verdict}
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="rounded-2xl bg-white/5 p-5">

            <TrendingUp
              className="text-green-400 mb-3"
            />

            <p className="text-sm text-gray-400">
              Activity Score
            </p>

            <h3 className="text-3xl font-black mt-2">

              <AnimatedCounter
                value={winnerData.activity_score}
              />

            </h3>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <ShieldCheck
              className="text-blue-400 mb-3"
            />

            <p className="text-sm text-gray-400">
              News Articles
            </p>

            <h3 className="text-3xl font-black mt-2">

              <AnimatedCounter
                value={winnerData.articles}
              />

            </h3>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <Brain
              className="text-purple-400 mb-3"
            />

            <p className="text-sm text-gray-400">
              AI Confidence
            </p>

            <h3 className="text-3xl font-black mt-2">

              {comparison.confidence.score}%

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}