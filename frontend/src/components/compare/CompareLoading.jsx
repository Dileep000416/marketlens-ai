import { motion } from "framer-motion";

export default function CompareLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 mt-12"
    >
      {/* Company Cards */}

      <div className="grid lg:grid-cols-2 gap-8">

        {[1, 2].map((item) => (
          <div
            key={item}
            className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              p-8
              animate-pulse
            "
          >
            <div className="h-8 w-48 rounded bg-white/10 mb-8" />

            <div className="grid grid-cols-2 gap-5">

              <div className="h-32 rounded-2xl bg-white/10" />

              <div className="h-32 rounded-2xl bg-white/10" />

            </div>

          </div>
        ))}

      </div>

      {/* Comparison */}

      <div
        className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-8
          animate-pulse
        "
      >
        <div className="h-8 w-64 rounded bg-white/10 mb-8" />

        <div className="space-y-6">

          <div className="h-5 rounded-full bg-white/10" />

          <div className="h-5 rounded-full bg-white/10" />

        </div>

      </div>

      {/* Winner */}

      <div
        className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-8
          animate-pulse
        "
      >
        <div className="h-8 w-40 rounded bg-white/10 mb-8" />

        <div className="grid md:grid-cols-3 gap-5">

          <div className="h-28 rounded-2xl bg-white/10" />

          <div className="h-28 rounded-2xl bg-white/10" />

          <div className="h-28 rounded-2xl bg-white/10" />

        </div>

      </div>

      {/* Table */}

      <div
        className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-8
          animate-pulse
        "
      >
        <div className="h-8 w-56 rounded bg-white/10 mb-8" />

        <div className="space-y-5">

          <div className="h-10 rounded bg-white/10" />
          <div className="h-10 rounded bg-white/10" />
          <div className="h-10 rounded bg-white/10" />

        </div>

      </div>

    </motion.div>
  );
}