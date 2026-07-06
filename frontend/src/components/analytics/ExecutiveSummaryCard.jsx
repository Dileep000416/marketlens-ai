import { motion } from "framer-motion";
import {
  Crown,
  BarChart3,
  Swords,
  MousePointerClick,
  Search,
} from "lucide-react";

export default function ExecutiveSummaryCard({
  summary,
}) {
  if (!summary) return null;

  const platform = summary.platform || {};
  const pair = summary.most_compared_pair;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      "
    >
      <div className="flex items-center gap-4 mb-8">

        <div
          className="
            rounded-2xl
            bg-yellow-500/20
            p-4
          "
        >
          <Crown
            size={30}
            className="text-yellow-400"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Executive Summary
          </h2>

          <p className="mt-2 text-gray-400">
            A quick executive overview of platform activity.
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-6
          "
        >

          <h3 className="text-xl font-semibold mb-6">
            Key Insights
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <BarChart3
                size={20}
                className="text-purple-400"
              />

              <span>
                Most Popular Company:
              </span>

              <strong className="ml-auto">
                {summary.most_popular_company ?? "—"}
              </strong>

            </div>

            <div className="flex items-center gap-3">

              <Swords
                size={20}
                className="text-fuchsia-400"
              />

              <span>
                Top Comparison:
              </span>

              <strong className="ml-auto text-right">
                {pair
                  ? `${pair.company_1} vs ${pair.company_2}`
                  : "—"}
              </strong>

            </div>

          </div>

        </div>

        {/* Right */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-6
          "
        >

          <h3 className="text-xl font-semibold mb-6">
            Platform Overview
          </h3>

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <Search
                  className="text-blue-400"
                  size={20}
                />

                <span>Total Searches</span>

              </div>

              <strong>
                {platform.total_searches}
              </strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <Swords
                  className="text-purple-400"
                  size={20}
                />

                <span>Total Comparisons</span>

              </div>

              <strong>
                {platform.total_comparisons}
              </strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <MousePointerClick
                  className="text-emerald-400"
                  size={20}
                />

                <span>AI Recommendation Clicks</span>

              </div>

              <strong>
                {
                  platform.total_recommendation_clicks
                }
              </strong>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}