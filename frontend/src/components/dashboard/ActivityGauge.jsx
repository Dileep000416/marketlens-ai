import {
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";

export default function ActivityGauge({ score }) {
  let status = "";
  let statusColor = "";
  let badgeColor = "";
  let StatusIcon = Activity;

  if (score >= 75) {
    status = "High Activity";
    statusColor = "text-green-400";
    badgeColor = "bg-green-500/10 text-green-300";
    StatusIcon = TrendingUp;
  } else if (score >= 45) {
    status = "Moderate Activity";
    statusColor = "text-yellow-400";
    badgeColor = "bg-yellow-500/10 text-yellow-300";
    StatusIcon = Minus;
  } else {
    status = "Low Activity";
    statusColor = "text-red-400";
    badgeColor = "bg-red-500/10 text-red-300";
    StatusIcon = TrendingDown;
  }

  const circumference = 565;
  const dashOffset = circumference - (circumference * score) / 100;

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
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      "
    >

      {/* Purple Glow */}

      <div
        className="
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-gradient-to-br
          from-purple-500
          to-fuchsia-500
          opacity-20
          blur-[100px]
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[0.3em] text-gray-500 text-sm">

              Market Health

            </p>

            <h2 className="mt-3 text-3xl font-black">

              Activity Index

            </h2>

          </div>

          <div
            className="
              rounded-2xl
              bg-purple-500/10
              p-4
            "
          >
            <Activity
              className="text-purple-400"
              size={30}
            />
          </div>

        </div>

        {/* Gauge */}

        <div className="mt-12 flex justify-center">

          <div className="relative h-60 w-60">

            <svg
              className="-rotate-90"
              width="240"
              height="240"
            >

              <circle
                cx="120"
                cy="120"
                r="90"
                stroke="#262626"
                strokeWidth="16"
                fill="none"
              />

              <motion.circle
                cx="120"
                cy="120"
                r="90"
                stroke="url(#activityGradient)"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
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
                  id="activityGradient"
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

            {/* Score */}

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

              <h1 className="text-6xl font-black">

                <AnimatedCounter
                  value={score}
                />

              </h1>

              <p className="mt-2 text-gray-500">

                out of 100

              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-400">

              Current Status

            </p>

            <div
              className={`mt-3 flex items-center gap-2 font-semibold ${statusColor}`}
            >

              <StatusIcon size={18} />

              {status}

            </div>

          </div>

          <div
            className={`
              rounded-full
              px-5
              py-2
              text-sm
              font-medium
              ${badgeColor}
            `}
          >

            Live Analysis

          </div>

        </div>

      </div>

    </motion.div>
  );
}