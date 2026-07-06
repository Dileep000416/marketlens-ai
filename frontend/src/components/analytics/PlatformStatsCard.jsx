import { motion } from "framer-motion";
import {
  Search,
  GitCompareArrows,
  MousePointerClick,
} from "lucide-react";

const CARD_CONFIG = [
  {
    key: "total_searches",
    title: "Total Searches",
    description: "Companies analyzed across the platform",
    icon: Search,
    color: "text-blue-400",
    glow: "from-blue-500/20 to-cyan-500/10",
  },
  {
    key: "total_comparisons",
    title: "Comparisons",
    description: "Competitive analyses performed",
    icon: GitCompareArrows,
    color: "text-purple-400",
    glow: "from-purple-500/20 to-fuchsia-500/10",
  },
  {
    key: "total_recommendation_clicks",
    title: "AI Recommendation Clicks",
    description: "AI suggestions opened by users",
    icon: MousePointerClick,
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-green-500/10",
  },
];

export default function PlatformStatsCard({
  platform,
}) {
  if (!platform) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {CARD_CONFIG.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.key}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.45,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-7
            "
          >
            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-br
                ${card.glow}
                opacity-60
              `}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">

                <div
                  className="
                    rounded-2xl
                    bg-white/10
                    p-4
                  "
                >
                  <Icon
                    size={28}
                    className={card.color}
                  />
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-emerald-300
                  "
                >
                  Live
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                "
              >
                {platform[card.key]}
              </h2>

              <h3
                className="
                  mt-3
                  text-xl
                  font-semibold
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                {card.description}
              </p>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}