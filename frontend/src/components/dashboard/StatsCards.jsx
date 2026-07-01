import {
  Newspaper,
  Activity,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";

export default function StatsCards({ data }) {
  if (!data) return null;

  const cards = [
    {
      title: "Total Articles",
      value: data.total_articles,
      suffix: "",
      description: "Real-time news analyzed",
      icon: Newspaper,
      color: "purple",
    },
    {
      title: "Activity Score",
      value: data.activity_score,
      suffix: "%",
      description: "Current market activity",
      icon: Activity,
      color: "green",
    },
    {
      title: "News Sources",
      value: data.sources.length,
      suffix: "",
      description: "Trusted news providers",
      icon: Globe,
      color: "cyan",
    },
  ];

  const colors = {
    purple: {
      icon: "text-purple-400",
      bg: "bg-purple-500/10",
      glow: "from-purple-500 to-fuchsia-500",
      border: "group-hover:border-purple-500/40",
    },
    green: {
      icon: "text-green-400",
      bg: "bg-green-500/10",
      glow: "from-green-500 to-emerald-500",
      border: "group-hover:border-green-500/40",
    },
    cyan: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/10",
      glow: "from-cyan-500 to-blue-500",
      border: "group-hover:border-cyan-500/40",
    },
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {cards.map((card, index) => {

        const Icon = card.icon;
        const style = colors[card.color];

        return (

          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.45,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              ${style.border}
              bg-white/[0.04]
              backdrop-blur-xl
              p-7
              transition-all
              duration-500
            `}
          >

            {/* Glow */}

            <div
              className={`
                absolute
                -top-16
                -right-16
                h-48
                w-48
                rounded-full
                bg-gradient-to-br
                ${style.glow}
                opacity-20
                blur-[90px]
              `}
            />

            {/* Header */}

            <div className="relative z-10 flex items-start justify-between">

              <div
                className={`
                  rounded-2xl
                  p-3
                  ${style.bg}
                `}
              >

                <Icon
                  size={28}
                  className={style.icon}
                />

              </div>

              <ArrowUpRight
                size={18}
                className="
                  text-gray-500
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </div>

            {/* Value */}

            <div className="relative z-10 mt-8">

              <h2 className="text-5xl font-black tracking-tight">

                <AnimatedCounter
                  value={card.value}
                  suffix={card.suffix}
                />

              </h2>

              <p className="mt-4 text-xl font-semibold">

                {card.title}

              </p>

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