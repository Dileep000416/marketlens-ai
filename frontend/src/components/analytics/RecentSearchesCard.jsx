import { motion } from "framer-motion";
import { Clock3, Search, History } from "lucide-react";

export default function RecentSearchesCard({
  searches = [],
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
        delay: 0.4,
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
            Recent Search Activity
          </h2>

          <p className="mt-2 text-gray-400">
            Latest companies explored across MarketLens AI.
          </p>

        </div>

        <History
          size={34}
          className="text-indigo-400"
        />

      </div>

      {searches.length === 0 ? (

        <div className="py-16 text-center text-gray-500">
          No recent searches available.
        </div>

      ) : (

        <div className="space-y-5">

          {searches.map((item, index) => (

            <motion.div
              key={`${item.company}-${index}`}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.07,
              }}
              whileHover={{
                x: 6,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-5
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    rounded-2xl
                    bg-indigo-500/20
                    p-3
                  "
                >
                  <Search
                    size={22}
                    className="text-indigo-400"
                  />
                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    {item.company}
                  </h3>

                  <p className="text-sm text-gray-400">
                    Dashboard Search
                  </p>

                </div>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-400
                "
              >
                <Clock3 size={16} />

                <span>
                  {new Date(
                    item.searched_at
                  ).toLocaleString()}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </motion.div>
  );
}