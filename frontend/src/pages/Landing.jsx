import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import DashboardPreview from "../components/DashboardPreview";
import ComparePreview from "../components/ComparePreview";

export default function Landing() {
return ( <div className="relative min-h-screen bg-black text-white overflow-hidden">


  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/30 blur-[200px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6">

    <Navbar />

    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center text-center pt-24 pb-32">

      <div
        className="
        mb-8
        px-5
        py-2
        rounded-full
        border
        border-purple-500/30
        bg-white/5
        backdrop-blur-md
        text-sm
        text-purple-300
        "
      >
        AI-Powered Competitor Intelligence
      </div>

      <h1
        className="
        text-6xl
        md:text-8xl
        font-black
        leading-[0.95]
        tracking-tight
        max-w-6xl
        "
      >
        Stay Ahead of
        <br />

        <span
          className="
          bg-gradient-to-r
          from-white
          via-purple-300
          to-purple-600
          bg-clip-text
          text-transparent
          "
        >
          Every Competitor
        </span>
      </h1>

      <p
        className="
        mt-8
        max-w-3xl
        text-lg
        md:text-xl
        text-gray-400
        leading-relaxed
        "
      >
        Track competitor news, generate AI-powered business insights,
        compare market activity, and discover opportunities before
        your competitors do.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-12">

        <button
          className="
          px-8
          py-4
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-purple-500
          font-semibold
          hover:scale-105
          transition
          shadow-lg
          shadow-purple-500/30
          "
        >
          Launch Dashboard
        </button>

        <button
          className="
          px-8
          py-4
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          hover:bg-white/10
          transition
          "
        >
          View Demo
        </button>

      </div>

      <div
        className="
        grid
        grid-cols-3
        gap-8
        mt-24
        max-w-3xl
        w-full
        "
      >

        <div>
          <h3 className="text-4xl font-bold text-purple-400">
            50+
          </h3>
          <p className="text-gray-500 mt-2">
            Companies Tracked
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-purple-400">
            AI
          </h3>
          <p className="text-gray-500 mt-2">
            Insight Generation
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-purple-400">
            24/7
          </h3>
          <p className="text-gray-500 mt-2">
            News Monitoring
          </p>
        </div>

      </div>

    </section>

    {/* Features Section */}

    <section className="pb-32">

      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold mb-6">
          Everything You Need
        </h2>

        <p className="text-gray-400 text-lg">
          AI-powered tools to monitor, analyze,
          and compare competitors in real time.
        </p>

      </div>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >

        <FeatureCard
          icon="📰"
          title="News Tracking"
          description="
          Automatically fetch and archive
          competitor news from trusted
          global sources.
          "
        />

        <FeatureCard
          icon="🧠"
          title="AI Insights"
          description="
          Generate business-focused insights,
          opportunities, and risk analysis
          using AI.
          "
        />

        <FeatureCard
          icon="📊"
          title="Competitor Comparison"
          description="
          Compare market activity,
          news volume, and performance
          across competitors.
          "
        />

      </div>

    </section>

    {/* Dashboard Preview Section */}

    <section className="pb-32">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold mb-6">
          See Insights In Action
        </h2>

        <p className="text-gray-400 text-lg">
          Real-time competitor intelligence
          powered by AI.
        </p>

      </div>

      <DashboardPreview />

    </section>
    <section className="pb-32">

  <div className="text-center mb-16">

    <h2 className="text-5xl font-bold mb-6">
      Compare Competitors Instantly
    </h2>

    <p className="text-gray-400 text-lg">
      Visualize market activity and
      discover who is leading the conversation.
    </p>

  </div>

  <ComparePreview />

</section>

  </div>
</div>


);
}
