import { motion } from "framer-motion";
import { Swords, Trophy } from "lucide-react";

export default function MostComparedCard({
  comparisons = [],
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
        delay: 0.3,
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
            Most Compared
          </h2>

          <p className="mt-2 text-gray-400">
            Most popular competitor matchups.
          </p>

        </div>

        <Swords
          size={34}
          className="text-fuchsia-400"
        />

      </div>

      {comparisons.length === 0 ? (

        <div className="py-16 text-center text-gray-500">
          No comparison activity available.
        </div>

      ) : (

        <div className="space-y-5">

          {comparisons.map((item, index) => (

            <motion.div
              key={`${item.company_1}-${item.company_2}`}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      rounded-full
                      bg-fuchsia-600/20
                      p-3
                    "
                  >
                    {index === 0 ? (
                      <Trophy
                        size={20}
                        className="text-yellow-400"
                      />
                    ) : (
                      <Swords
                        size={20}
                        className="text-fuchsia-400"
                      />
                    )}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {item.company_1}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      VS
                    </p>

                    <h3 className="text-xl font-bold">
                      {item.company_2}
                    </h3>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-4xl font-black text-fuchsia-300">
                    {item.comparisons}
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    Comparisons
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </motion.div>
  );
}