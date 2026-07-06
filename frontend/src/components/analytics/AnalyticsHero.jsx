import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

export default function AnalyticsHero() {
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
        duration: 0.6,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-10
      "
    >
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <BarChart3
              size={34}
              className="text-purple-400"
            />

            <span
              className="
                rounded-full
                bg-purple-500/20
                px-4
                py-2
                text-sm
                font-semibold
                text-purple-300
              "
            >
              Executive Analytics
            </span>

          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              tracking-tight
            "
          >
            MarketLens AI
            <br />
            Analytics Dashboard
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Gain a complete executive overview of platform usage,
            competitor popularity, comparison trends and AI adoption
            across MarketLens AI.
          </p>

        </div>

        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            bg-purple-600/20
            backdrop-blur-xl
          "
        >
          <TrendingUp
            size={56}
            className="text-purple-400"
          />
        </motion.div>

      </div>
    </motion.div>
  );
}