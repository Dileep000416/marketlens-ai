import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";

export default function ConfidenceScoreCard({
  confidence,
}) {
  if (!confidence) return null;

  const {
    score,
    reason,
  } = confidence;

  const getConfidenceStyle = () => {
    if (score >= 90) {
      return {
        label: "Very High",
        color: "text-green-400",
        badge:
          "bg-green-500/10 text-green-300 border border-green-500/30",
        glow: "from-green-500 to-emerald-500",
        icon: BadgeCheck,
      };
    }

    if (score >= 80) {
      return {
        label: "High",
        color: "text-cyan-400",
        badge:
          "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
        glow: "from-cyan-500 to-blue-500",
        icon: ShieldCheck,
      };
    }

    if (score >= 70) {
      return {
        label: "Moderate",
        color: "text-yellow-400",
        badge:
          "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30",
        glow: "from-yellow-500 to-orange-500",
        icon: AlertTriangle,
      };
    }

    return {
      label: "Low",
      color: "text-red-400",
      badge:
        "bg-red-500/10 text-red-300 border border-red-500/30",
      glow: "from-red-500 to-rose-500",
      icon: ShieldAlert,
    };
  };

  const style = getConfidenceStyle();
  const StatusIcon = style.icon;

  const circumference = 565;
  const dashOffset =
    circumference - (circumference * score) / 100;

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
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-gradient-to-br
          ${style.glow}
          opacity-20
          blur-[120px]
        `}
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                rounded-2xl
                bg-purple-500/10
                p-4
              "
            >
              <Brain
                className="text-purple-400"
                size={28}
              />
            </div>

            <div>

              <h2 className="text-3xl font-black">

                AI Confidence

              </h2>

              <p className="mt-1 text-gray-400">

                Confidence in generated intelligence

              </p>

            </div>

          </div>

          <div
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              ${style.badge}
            `}
          >
            <StatusIcon
              size={16}
              className={style.color}
            />

            {style.label}

          </div>

        </div>

        {/* Gauge */}

        <div className="mt-12 flex justify-center">

          <div className="relative h-64 w-64">

            <svg
              width="260"
              height="260"
              className="-rotate-90"
            >

              <circle
                cx="130"
                cy="130"
                r="90"
                stroke="#262626"
                strokeWidth="16"
                fill="none"
              />

              <motion.circle
                cx="130"
                cy="130"
                r="90"
                fill="none"
                strokeWidth="16"
                strokeLinecap="round"
                stroke="url(#confidenceGradient)"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: circumference,
                }}
                animate={{
                  strokeDashoffset: dashOffset,
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
              />

              <defs>

                <linearGradient
                  id="confidenceGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#9333ea"
                  />

                  <stop
                    offset="100%"
                    stopColor="#ec4899"
                  />

                </linearGradient>

              </defs>

            </svg>

            {/* Center */}

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
              "
            >

              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="text-6xl font-black"
              >
                {score}%
              </motion.h1>

              <p className="mt-2 text-gray-400">

                Confidence

              </p>

            </div>

          </div>

        </div>

        {/* Insight */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-purple-500/20
            bg-purple-500/5
            p-6
          "
        >

          <p className="uppercase tracking-[0.3em] text-xs text-purple-300">

            Why this score?

          </p>

          <p className="mt-4 leading-8 text-gray-300">

            {reason}

          </p>

        </div>

      </div>

    </motion.div>
  );
}