import { Sparkles, Search, BrainCircuit, Newspaper } from "lucide-react";

export default function HeroSearch({
  company,
  setCompany,
  fetchDashboard,
}) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 mb-14">

      {/* Background Glow */}

      <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">

          <Sparkles size={16} />

          AI Powered Platform

        </div>

        {/* Title */}

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

          MarketLens{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            AI
          </span>

        </h1>

        {/* Subtitle */}

        <p className="mt-8 max-w-3xl text-lg text-gray-400 leading-9">

          Analyze competitors using real-time news intelligence,
          AI-generated market trends, opportunities, risks and
          competitor activity reports powered by Groq AI.

        </p>

        {/* Search */}

        <div className="mt-12 flex flex-col md:flex-row gap-5">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search company (Tesla, Apple, Microsoft...)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-5
                pl-14
                pr-6
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />

          </div>

          <button
            onClick={fetchDashboard}
            className="
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              px-10
              py-5
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
            "
          >
            Analyze
          </button>

        </div>

        {/* Features */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <BrainCircuit
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">

              AI Insights

            </h3>

            <p className="mt-2 text-gray-400">

              Generate business intelligence using Groq AI.

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <Newspaper
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">

              Live News

            </h3>

            <p className="mt-2 text-gray-400">

              Fetch the latest competitor news in real time.

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <Sparkles
              className="text-purple-400 mb-4"
              size={34}
            />

            <h3 className="text-xl font-semibold">

              Smart Dashboard

            </h3>

            <p className="mt-2 text-gray-400">

              Visualize activity scores, trends and opportunities.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}