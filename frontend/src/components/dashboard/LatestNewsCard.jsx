import {
  Newspaper,
  ArrowUpRight,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function LatestNewsCard({ article }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-purple-500/40
        hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]
      "
    >
      {/* Top Gradient */}

      <div
        className="
          absolute
          top-0
          left-0
          h-1
          w-full
          bg-gradient-to-r
          from-purple-500
          via-fuchsia-500
          to-transparent
        "
      />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-purple-500/10 p-3">

            <Newspaper
              size={28}
              className="text-purple-400"
            />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Latest Update
            </p>

            <h2 className="text-2xl font-bold mt-1">
              Latest Intelligence
            </h2>

          </div>

        </div>

        <ArrowUpRight
          size={20}
          className="
            text-gray-500
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />

      </div>

      {/* Article */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-6
        "
      >

        <p
          className="
            text-gray-200
            text-lg
            leading-9
          "
        >
          {article || "No recent news available."}
        </p>

      </div>

      {/* Footer */}

      <div
        className="
          mt-8
          flex
          flex-col
          gap-4
          text-sm
          text-gray-400
        "
      >

        <div className="flex items-center gap-3">

          <Clock3
            size={17}
            className="text-purple-400"
          />

          Updated moments ago

        </div>

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={17}
            className="text-purple-400"
          />

          Retrieved from trusted news intelligence

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          mt-8
          border-t
          border-white/10
          pt-6
          flex
          items-center
          justify-between
        "
      >

        <span className="text-gray-500">
          Executive Intelligence Brief
        </span>

        <button
          className="
            rounded-full
            bg-purple-500/10
            px-4
            py-2
            text-sm
            text-purple-300
            transition-all
            hover:bg-purple-500/20
          "
        >
          AI Verified
        </button>

      </div>

    </div>
  );
}