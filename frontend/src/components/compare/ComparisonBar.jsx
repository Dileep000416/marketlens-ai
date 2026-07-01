import { motion } from "framer-motion";

export default function ComparisonBar({
  company1,
  company2,
  comparison,
}) {

  const score1 =
comparison.market_momentum.company_1;

const score2 =
comparison.market_momentum.company_2;

const max =
Math.max(
score1,
score2,
1
);

  return (

    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >

      <h2 className="text-3xl font-bold mb-10">

        AI Performance Comparison

      </h2>

      {/* Company 1 */}

      <div className="mb-10">

        <div className="flex justify-between mb-3">

          <span className="font-semibold">
            {company1.name}
          </span>

          <span>
            {score1}%
          </span>

        </div>

        <div className="h-5 rounded-full bg-white/10 overflow-hidden">

          <motion.div

            initial={{ width: 0 }}

            animate={{
              width:
                `${(company1.activity_score / max) * 100}%`
            }}

            transition={{
              duration: 1
            }}

            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            "
          />

        </div>

      </div>

      {/* Company 2 */}

      <div>

        <div className="flex justify-between mb-3">

          <span className="font-semibold">
            {company2.name}
          </span>

          <span>
            {score2}%
          </span>

        </div>

        <div className="h-5 rounded-full bg-white/10 overflow-hidden">

          <motion.div

            initial={{ width: 0 }}

            animate={{
              width:
                `${(company2.activity_score / max) * 100}%`
            }}

            transition={{
              duration: 1
            }}

            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            "
          />

        </div>

      </div>

    </div>

  );

}