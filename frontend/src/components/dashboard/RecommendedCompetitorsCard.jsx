import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RecommendedCompetitorsCard({
  company,
  recommendations,
}) {
  const navigate = useNavigate();

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  const handleCompare = (competitor) => {
    navigate(
      `/compare?company1=${encodeURIComponent(
        company
      )}&company2=${encodeURIComponent(competitor)}`
    );
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      "
    >
      <div className="flex items-center gap-4 mb-8">
        <Sparkles
          size={30}
          className="text-purple-400"
        />

        <div>
          <h2 className="text-3xl font-bold">
            AI Recommended Competitors
          </h2>

          <p className="text-gray-400 mt-1">
            Companies identified through AI-powered competitive
            intelligence analysis.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
              transition-all
              duration-300
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {item.reason}
                </p>
              </div>

              <TrendingUp
                className="text-purple-400"
                size={26}
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  AI Confidence
                </p>

                <span
                  className="
                    inline-block
                    mt-2
                    rounded-full
                    bg-purple-600/20
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-purple-300
                  "
                >
                  {item.confidence}%
                </span>
              </div>

              <button
                onClick={() =>
                  handleCompare(item.name)
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-purple-600
                  px-5
                  py-3
                  font-medium
                  transition
                  hover:bg-purple-500
                "
              >
                Compare

                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}