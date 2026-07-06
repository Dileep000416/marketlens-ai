import { motion } from "framer-motion";

export default function AnalyticsLoading() {
  return (
    <div className="space-y-8 mt-10">

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        {[1, 2, 3].map((item) => (

          <motion.div
            key={item}
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              delay: item * 0.15,
            }}
            className="
              h-40
              rounded-3xl
              border
              border-white/10
              bg-white/5
            "
          />

        ))}

      </div>

      {/* Analytics Cards */}

      <div className="grid gap-8 lg:grid-cols-2">

        {[1, 2].map((item) => (

          <motion.div
            key={item}
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              delay: item * 0.2,
            }}
            className="
              h-80
              rounded-3xl
              border
              border-white/10
              bg-white/5
            "
          />

        ))}

      </div>

      {/* Bottom Section */}

      <motion.div
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
        }}
        className="
          h-64
          rounded-3xl
          border
          border-white/10
          bg-white/5
        "
      />

    </div>
  );
}