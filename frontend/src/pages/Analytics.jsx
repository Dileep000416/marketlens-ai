import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsHero from "../components/analytics/AnalyticsHero";
import AnalyticsLoading from "../components/analytics/AnalyticsLoading";
import PlatformStatsCard from "../components/analytics/PlatformStatsCard";
import TrendingCompaniesCard from "../components/analytics/TrendingCompaniesCard";
import MostComparedCard from "../components/analytics/MostComparedCard";
import RecentSearchesCard from "../components/analytics/RecentSearchesCard";
import ExecutiveSummaryCard from "../components/analytics/ExecutiveSummaryCard";

import { getAnalyticsDashboard } from "../services/api";

export default function Analytics() {

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // -------------------------------------------------------
  // Load Analytics
  // -------------------------------------------------------

  useEffect(() => {

    const loadAnalytics = async () => {

      try {

        setLoading(true);

        setError("");

        const response =
          await getAnalyticsDashboard();

        setAnalytics(response);

      } catch (err) {

        console.error(err);

        setError(
          "Unable to load analytics dashboard."
        );

      } finally {

        setLoading(false);

      }

    };

    loadAnalytics();

  }, []);

  return (

    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10 space-y-10">

        {/* Hero */}

        <AnalyticsHero />

        {/* Loading */}

        {loading && <AnalyticsLoading />}

        {/* Error */}

        {!loading && error && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              rounded-3xl
              border
              border-red-500/20
              bg-red-500/10
              p-8
              text-center
            "
          >

            <h2 className="text-2xl font-bold text-red-300">
              Analytics Unavailable
            </h2>

            <p className="mt-3 text-red-200">
              {error}
            </p>

          </motion.div>

        )}

        {/* Dashboard */}

        {!loading &&
          analytics && (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="space-y-10"
            >

              {/* KPI */}

              <PlatformStatsCard
                platform={analytics.platform}
              />

              {/* Grid */}

              <div className="grid gap-8 lg:grid-cols-2">

                <TrendingCompaniesCard
                  companies={
                    analytics.trending_companies
                  }
                />

                <MostComparedCard
                  comparisons={
                    analytics.most_compared
                  }
                />

              </div>

              {/* Recent */}

              <RecentSearchesCard
                searches={
                  analytics.recent_searches
                }
              />

              {/* Executive */}

              <ExecutiveSummaryCard
                summary={
                  analytics.executive_summary
                }
              />

            </motion.div>

          )}

      </div>

    </div>

  );

}