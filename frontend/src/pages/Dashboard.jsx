import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSearch from "../components/dashboard/HeroSearch";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import CompanyOverviewCard from "../components/dashboard/CompanyOverviewCard";
import ExecutiveSummaryCard from "../components/dashboard/ExecutiveSummaryCard";
import RecommendedCompetitorsCard from "../components/dashboard/RecommendedCompetitorsCard";

import StatsCards from "../components/dashboard/StatsCards";
import ActivityGauge from "../components/dashboard/ActivityGauge";
import LatestNewsCard from "../components/dashboard/LatestNewsCard";

import MarketSentimentCard from "../components/dashboard/MarketSentimentCard";
import ThreatRadarCard from "../components/dashboard/ThreatRadarCard";
import ConfidenceScoreCard from "../components/dashboard/ConfidenceScoreCard";

import AISummaryCard from "../components/dashboard/AISummaryCard";
import SourcesCard from "../components/dashboard/SourcesCard";

import LoadingSkeleton from "../components/dashboard/LoadingSkeleton";

import { getDashboard } from "../services/api";

export default function Dashboard() {

  const [company, setCompany] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDashboard = async () => {

    if (!company.trim()) return;

    try {

      setIsLoading(true);

      const result = await getDashboard(company);

      setData(result);

    } catch (error) {

      console.error(error);

    } finally {

      setIsLoading(false);

    }

  };

  return (

    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/20
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-fuchsia-500/10
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-indigo-500/10
          blur-[160px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">

        <HeroSearch
          company={company}
          setCompany={setCompany}
          fetchDashboard={fetchDashboard}
        />

        {isLoading && <LoadingSkeleton />}

        <AnimatePresence>

          {!isLoading && data && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >

              {/* Dashboard Header */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >

                <DashboardHeader
                  company={data.company}
                  totalArticles={data.total_articles}
                />

              </motion.div>

              {/* Company Overview */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
              >

                <CompanyOverviewCard
                  profile={data.company_profile}
                />

              </motion.div>

              {/* Executive Summary */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.10 }}
              >

                <ExecutiveSummaryCard
                  summary={data.executive_summary}
                />

              </motion.div>

              {/* AI Recommended Competitors */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.11 }}
              >

                <RecommendedCompetitorsCard
                  company={data.company}
                  recommendations={data.recommended_competitors}
                />

              </motion.div>

              {/* Stats */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >

                <StatsCards
                  data={data}
                />

              </motion.div>

              {/* Activity + Latest News */}

              <motion.div
                className="grid gap-8 lg:grid-cols-2"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >

                <ActivityGauge
                  score={data.activity_score}
                />

                <LatestNewsCard
                  article={data.latest_article}
                />

              </motion.div>

              {/* Executive Intelligence */}

              <motion.div
                className="grid gap-8 lg:grid-cols-2"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >

                <MarketSentimentCard
                  sentiment={
                    data.market_intelligence?.sentiment
                  }
                />

                <ThreatRadarCard
                  threatRadar={
                    data.market_intelligence?.threat_radar
                  }
                />

              </motion.div>

              {/* Confidence */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.20 }}
              >

                <ConfidenceScoreCard
                  confidence={
                    data.market_intelligence?.confidence
                  }
                />

              </motion.div>

              {/* AI Intelligence Report */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.23 }}
              >

                <AISummaryCard
                  summary={data.ai_summary}
                />

              </motion.div>

              {/* Sources */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >

                <SourcesCard
                  sources={data.sources}
                />

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </div>

  );

}