import { motion } from "framer-motion";
import { TrendingUp, Trophy } from "lucide-react";

export default function TrendingCompaniesCard({
  companies = [],
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Trending Companies
          </h2>

          <p className="mt-2 text-gray-400">
            Most searched companies on the platform.
          </p>

        </div>

        <TrendingUp
          size={34}
          className="text-purple-400"
        />

      </div>

      {companies.length === 0 ? (

        <div
          className="
            py-16
            text-center
            text-gray-500
          "
        >
          No search activity available.
        </div>

      ) : (

        <div className="space-y-6">

          {companies.map((company, index) => {

            const percentage =
              companies[0].searches > 0
                ? (company.searches /
                    companies[0].searches) *
                  100
                : 0;

            return (

              <motion.div
                key={company.company}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  p-5
                "
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-purple-600/20
                        font-bold
                        text-purple-300
                      "
                    >
                      {index === 0 ? (
                        <Trophy
                          size={18}
                          className="text-yellow-400"
                        />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        {company.company}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {company.searches} Searches
                      </p>

                    </div>

                  </div>

                  <span
                    className="
                      rounded-full
                      bg-purple-600/20
                      px-3
                      py-1
                      text-sm
                      font-semibold
                      text-purple-300
                    "
                  >
                    #{index + 1}
                  </span>

                </div>

                <div
                  className="
                    mt-5
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${percentage}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-fuchsia-500
                    "
                  />
                </div>

              </motion.div>

            );

          })}

        </div>

      )}

    </motion.div>
  );
}