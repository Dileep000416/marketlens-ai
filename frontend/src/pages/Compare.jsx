import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

import CompareHero from "../components/compare/CompareHero";
import CompanyCard from "../components/compare/CompanyCard";
import ComparisonBar from "../components/compare/ComparisonBar";
import WinnerCard from "../components/compare/WinnerCard";
import MetricsTable from "../components/compare/MetricsTable";
import AIVerdictCard from "../components/compare/AIVerdictCard";
import CompareLoading from "../components/compare/CompareLoading";
import CompareEmptyState from "../components/compare/CompareEmptyState";

import { compareCompanies } from "../services/api";

export default function Compare() {

  const [searchParams] = useSearchParams();

  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");

  const [comparisonData, setComparisonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // -------------------------------------------------------
  // Compare Handler
  // -------------------------------------------------------

  const handleCompare = useCallback(
    async (
      firstCompany = company1,
      secondCompany = company2
    ) => {

      if (
        !firstCompany.trim() ||
        !secondCompany.trim()
      ) {
        return;
      }

      try {

        setError("");

        setComparisonData(null);

        setIsLoading(true);

        const result = await compareCompanies(
          firstCompany,
          secondCompany
        );

        setComparisonData(result);

      } catch (err) {

        console.error(err);

        setComparisonData(null);

        setError(
          "Unable to compare these companies. Please verify the company names and try again."
        );

      } finally {

        setIsLoading(false);

      }

    },
    [company1, company2]
  );

  // -------------------------------------------------------
  // Auto Compare From Dashboard
  // -------------------------------------------------------

  useEffect(() => {

    const firstCompany =
      searchParams.get("company1");

    const secondCompany =
      searchParams.get("company2");

    if (
      !firstCompany ||
      !secondCompany
    ) {
      return;
    }

    setCompany1(firstCompany);

    setCompany2(secondCompany);

    handleCompare(
      firstCompany,
      secondCompany
    );

  }, [searchParams, handleCompare]);

  return (

    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">

        {/* Hero */}

        <CompareHero
          company1={company1}
          setCompany1={setCompany1}
          company2={company2}
          setCompany2={setCompany2}
          compareCompanies={handleCompare}
        />

        {/* Loading */}

        {isLoading && <CompareLoading />}

        {/* Empty */}

        {!isLoading &&
          !comparisonData &&
          !error && (
            <CompareEmptyState />
          )}

        {/* Error */}

        {!isLoading &&
          error && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                mt-10
                rounded-3xl
                border
                border-red-500/20
                bg-red-500/10
                backdrop-blur-xl
                p-8
                text-center
              "
            >

              <h2 className="text-2xl font-bold text-red-300">
                Comparison Failed
              </h2>

              <p className="mt-4 text-red-200">
                {error}
              </p>

            </motion.div>

          )}

        <AnimatePresence>

          {!isLoading &&
            comparisonData && (

              <div className="space-y-10 mt-14">
                                {/* Company Cards */}

                <motion.div
                  className="grid lg:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1,
                  }}
                >

                  <CompanyCard
                    company={comparisonData.company_1}
                    accent="purple"
                  />

                  <CompanyCard
                    company={comparisonData.company_2}
                    accent="blue"
                  />

                </motion.div>

                {/* Comparison */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2,
                  }}
                >

                  <ComparisonBar
                    company1={comparisonData.company_1}
                    company2={comparisonData.company_2}
                    comparison={comparisonData.comparison}
                  />

                </motion.div>

                {/* Winner */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.3,
                  }}
                >

                  <WinnerCard
                    winner={comparisonData.comparison.winner}
                    company1={comparisonData.company_1}
                    company2={comparisonData.company_2}
                    comparison={comparisonData.comparison}
                  />

                </motion.div>

                {/* Metrics */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.4,
                  }}
                >

                  <MetricsTable
                    company1={comparisonData.company_1}
                    company2={comparisonData.company_2}
                    winner={comparisonData.comparison.winner}
                  />

                </motion.div>

                {/* AI Verdict */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.5,
                  }}
                >

                  <AIVerdictCard
                    comparison={comparisonData.comparison}
                  />

                </motion.div>

              </div>

            )}

        </AnimatePresence>

      </div>

    </div>

  );

}