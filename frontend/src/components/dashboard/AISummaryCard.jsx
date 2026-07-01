import {
  Sparkles,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import InsightSection from "./InsightSection";

export default function AISummaryCard({ summary }) {

  if (!summary) return null;

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
        duration: 0.45,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-purple-500/20
        bg-white/[0.04]
        backdrop-blur-xl
        p-10
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -top-24
          right-0
          h-72
          w-72
          rounded-full
          bg-gradient-to-br
          from-purple-500
          to-fuchsia-500
          opacity-20
          blur-[120px]
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

              <BrainCircuit
                className="text-purple-400"
                size={32}
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">

                AI Intelligence Report

              </h2>

              <p className="mt-2 text-gray-400">

                Generated using Groq AI • Executive Business Intelligence

              </p>

            </div>

          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-green-500/10
              px-4
              py-2
              text-green-300
              text-sm
            "
          >

            <ShieldCheck size={16} />

            Verified

          </div>

        </div>

        {/* Sections */}

        <div className="mt-12 space-y-12">

          <InsightSection
            title="Main Trends"
            icon="📈"
            items={summary.main_trends}
          />

          <InsightSection
            title="Opportunities"
            icon="💡"
            items={summary.opportunities}
          />

          <InsightSection
            title="Risks"
            icon="⚠️"
            items={summary.risks}
          />

        </div>

      </div>

    </motion.div>

  );

}