import { Sparkles, CalendarClock } from "lucide-react";

export default function DashboardHeader({
  company,
  totalArticles,
}) {

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      mb-10
      "
    >

      {/* Purple Glow */}

      <div
        className="
        absolute
        -top-24
        right-0
        h-60
        w-60
        rounded-full
        bg-purple-600/20
        blur-[120px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center gap-3">

          <Sparkles
            className="text-purple-400"
            size={32}
          />

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-purple-300
            text-sm
            "
          >
            MarketLens AI
          </p>

        </div>

        <h1
          className="
          text-5xl
          font-black
          mt-5
          "
        >
          {company} Intelligence Dashboard
        </h1>

        <p
          className="
          text-gray-400
          mt-4
          max-w-3xl
          leading-8
          "
        >
          AI-powered competitor intelligence platform providing
          business trends, opportunities, risks and market activity
          from real-time news analysis.
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-8
          mt-8
          text-gray-400
          "
        >

          <div className="flex items-center gap-2">

            <CalendarClock
              size={18}
            />

            Updated {currentTime}

          </div>

          <div>

            {totalArticles} Articles Analysed

          </div>

        </div>

      </div>

    </div>
  );
}