import { motion } from "framer-motion";
import {
  TrendingUp,
  Minus,
  TrendingDown,
  HeartHandshake,
} from "lucide-react";

export default function MarketSentimentCard({
  sentiment,
}) {
  if (!sentiment) return null;

  const {
    overall,
    positive,
    neutral,
    negative,
    reason,
  } = sentiment;

  const getOverallStyle = () => {
    switch (overall?.toLowerCase()) {
      case "positive":
        return {
          icon: TrendingUp,
          badge:
            "bg-green-500/10 text-green-300 border border-green-500/30",
          iconColor: "text-green-400",
        };

      case "negative":
        return {
          icon: TrendingDown,
          badge:
            "bg-red-500/10 text-red-300 border border-red-500/30",
          iconColor: "text-red-400",
        };

      default:
        return {
          icon: Minus,
          badge:
            "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30",
          iconColor: "text-yellow-400",
        };
    }
  };

  const overallStyle = getOverallStyle();
  const OverallIcon = overallStyle.icon;

  const ProgressBar = ({
    title,
    value,
    color,
  }) => (
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <p className="text-gray-300 font-medium">
          {title}
        </p>

        <span className="font-bold">
          {value}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-white/5 overflow-hidden">

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${color}`}
        />

      </div>

    </div>
  );

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

      {/* Purple Glow */}

      <div
        className="
          absolute
          -top-16
          -right-16
          h-56
          w-56
          rounded-full
          bg-gradient-to-br
          from-purple-500
          to-fuchsia-500
          opacity-20
          blur-[110px]
        "
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

              <HeartHandshake
                size={28}
                className="text-purple-400"
              />

            </div>

            <div>

              <h2 className="text-3xl font-black">

                Market Sentiment

              </h2>

              <p className="mt-1 text-gray-400">

                AI-powered market perception

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
              ${overallStyle.badge}
            `}
          >

            <OverallIcon
              size={16}
              className={overallStyle.iconColor}
            />

            {overall}

          </div>

        </div>

        {/* Progress Bars */}

        <div className="mt-10 space-y-8">

          <ProgressBar
            title="Positive"
            value={positive}
            color="bg-green-500"
          />

          <ProgressBar
            title="Neutral"
            value={neutral}
            color="bg-yellow-400"
          />

          <ProgressBar
            title="Negative"
            value={negative}
            color="bg-red-500"
          />

        </div>

        {/* Insight */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-purple-500/20
            bg-purple-500/5
            p-5
          "
        >

          <p className="text-sm uppercase tracking-widest text-purple-300">

            AI Insight

          </p>

          <p className="mt-3 text-gray-300 leading-8">

            {reason}

          </p>

        </div>

      </div>

    </motion.div>

  );
}