import { motion } from "framer-motion";
import {
  ShieldAlert,
  TriangleAlert,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function ThreatRadarCard({
  threatRadar,
}) {
  if (!threatRadar) return null;

  const {
    level,
    summary,
    top_threats,
  } = threatRadar;

  const getThreatStyle = () => {
    switch (level?.toLowerCase()) {
      case "high":
        return {
          icon: TriangleAlert,
          badge:
            "bg-red-500/10 text-red-300 border border-red-500/30",
          iconColor: "text-red-400",
          glow: "from-red-500 to-rose-500",
        };

      case "medium":
        return {
          icon: AlertTriangle,
          badge:
            "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30",
          iconColor: "text-yellow-400",
          glow: "from-yellow-500 to-orange-500",
        };

      default:
        return {
          icon: ShieldCheck,
          badge:
            "bg-green-500/10 text-green-300 border border-green-500/30",
          iconColor: "text-green-400",
          glow: "from-green-500 to-emerald-500",
        };
    }
  };

  const style = getThreatStyle();
  const StatusIcon = style.icon;

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

      {/* Dynamic Glow */}

      <div
        className={`
          absolute
          -top-16
          -right-16
          h-56
          w-56
          rounded-full
          bg-gradient-to-br
          ${style.glow}
          opacity-20
          blur-[110px]
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
              <ShieldAlert
                size={28}
                className="text-purple-400"
              />
            </div>

            <div>

              <h2 className="text-3xl font-black">

                Threat Radar

              </h2>

              <p className="mt-1 text-gray-400">

                AI-detected business risks

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
              className={style.iconColor}
            />

            {level} Risk

          </div>

        </div>

        {/* Executive Summary */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-6
          "
        >

          <p className="uppercase tracking-[0.25em] text-xs text-gray-500">

            Executive Assessment

          </p>

          <p className="mt-4 leading-8 text-gray-300">

            {summary}

          </p>

        </div>

        {/* Threat List */}

        <div className="mt-10">

          <h3 className="text-xl font-bold">

            Top Business Threats

          </h3>

          <div className="mt-6 space-y-4">

            {top_threats?.map((threat, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:border-red-500/30
                  hover:bg-red-500/5
                "
              >

                <div className="flex items-center gap-3">

                  <TriangleAlert
                    size={18}
                    className={style.iconColor}
                  />

                  <span className="text-gray-200">

                    {threat}

                  </span>

                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-500"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
}