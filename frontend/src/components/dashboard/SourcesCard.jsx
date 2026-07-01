import {
  Globe,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function SourcesCard({ sources = [] }) {
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

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-purple-500/10 p-3">
          <Globe
            className="text-purple-400"
            size={28}
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Verified Sources
          </p>

          <h2 className="text-2xl font-bold mt-1">
            News Intelligence
          </h2>
        </div>

      </div>

      {/* Count */}

      <div className="mt-8">

        <h1 className="text-5xl font-black">
          {sources.length}
        </h1>

        <p className="text-gray-400 mt-2">
          Trusted news providers
        </p>

      </div>

      {/* Badges */}

      <div className="mt-8 flex flex-wrap gap-3">

        {sources.map((source) => (

          <div
            key={source}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-4
              py-2
              text-sm
              text-purple-300
            "
          >

            <CheckCircle2 size={15} />

            {source}

          </div>

        ))}

      </div>

      {/* Footer */}

      <div
        className="
          mt-8
          border-t
          border-white/10
          pt-6
          flex
          items-center
          gap-3
          text-gray-400
        "
      >

        <ShieldCheck
          size={18}
          className="text-purple-400"
        />

        Verified through trusted news intelligence providers

      </div>

    </div>
  );
}