import {
  Newspaper,
  Activity,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";

export default function CompanyCard({
  company,
  accent = "purple",
}) {
  const isPurple = accent === "purple";

  const glow = isPurple
    ? "from-purple-500 to-fuchsia-500"
    : "from-cyan-500 to-blue-500";

  const border = isPurple
    ? "border-purple-500/20"
    : "border-cyan-500/20";

  const badge = isPurple
    ? "bg-purple-500/10 text-purple-300"
    : "bg-cyan-500/10 text-cyan-300";

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
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        ${border}
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      `}
    >
      {/* Glow */}
      <div
        className={`
          absolute
          -top-20
          -right-20
          h-52
          w-52
          rounded-full
          bg-gradient-to-br
          ${glow}
          opacity-20
          blur-[100px]
        `}
      />

      <div className="relative z-10">

        {/* Badge */}
        <div
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            ${badge}
          `}
        >
          <Building2 size={16} />
          Company Profile
        </div>

        {/* Company Name */}
        <div className="mt-6 flex items-center justify-between">

          <h2 className="text-4xl font-black tracking-tight">
            {company.name}
          </h2>

          <ArrowUpRight
            className="text-gray-500"
            size={24}
          />

        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-5 mt-10">

          {/* Articles */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <Newspaper
              className="text-purple-400 mb-4"
              size={28}
            />

            <p className="text-gray-400 text-sm">
              News Articles
            </p>

            <h3 className="text-4xl font-black mt-2">
              <AnimatedCounter value={company.articles} />
            </h3>

          </div>

          {/* Activity */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <Activity
              className="text-green-400 mb-4"
              size={28}
            />

            <p className="text-gray-400 text-sm">
              Activity Score
            </p>

            <h3 className="text-4xl font-black mt-2">
              <AnimatedCounter
                value={company.activity_score}
              />
            </h3>

          </div>

        </div>

        {/* Company Information */}

        <div className="mt-8 space-y-4">

          <div className="flex justify-between border-b border-white/10 pb-3">

            <span className="text-gray-400">
              Industry
            </span>

            <span className="font-medium">
              {company.intelligence.company_profile.industry}
            </span>

          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">

            <span className="text-gray-400">
              Market Position
            </span>

            <span className="font-medium">
              {company.intelligence.company_profile.market_position}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-400">
              Business Focus
            </span>

            <span className="font-medium text-right max-w-[220px]">
              {company.intelligence.company_profile.business_focus}
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}