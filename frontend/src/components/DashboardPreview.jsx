export default function DashboardPreview() {
  return (
    <div
      className="
      relative
      mt-20
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      shadow-2xl
      "
    >
      <div className="grid md:grid-cols-3 gap-6">

        {/* Activity Score */}
        <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
          <p className="text-gray-400 text-sm">
            Activity Score
          </p>

          <h3 className="text-5xl font-bold text-purple-400 mt-4">
            80
          </h3>

          <p className="text-green-400 mt-2">
            +12% this week
          </p>
        </div>

        {/* Total Articles */}
        <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
          <p className="text-gray-400 text-sm">
            Total Articles
          </p>

          <h3 className="text-5xl font-bold mt-4">
            42
          </h3>

          <p className="text-gray-500 mt-2">
            Last 30 days
          </p>
        </div>

        {/* Companies Tracked */}
        <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
          <p className="text-gray-400 text-sm">
            Competitors
          </p>

          <h3 className="text-5xl font-bold mt-4">
            8
          </h3>

          <p className="text-gray-500 mt-2">
            Active monitoring
          </p>
        </div>

      </div>

      {/* AI Insight Panel */}

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-white/10
        bg-black/30
        p-6
        "
      >
        <h3 className="text-xl font-semibold mb-4">
          AI Generated Insight
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Tesla continues expanding its autonomous
          vehicle ecosystem. Recent coverage indicates
          increased focus on Cybercab deployment and
          robotaxi services, while competitive pressure
          from Waymo remains a significant risk.
        </p>
      </div>

    </div>
  )
}