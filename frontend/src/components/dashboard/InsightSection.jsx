import { CheckCircle2 } from "lucide-react";

export default function InsightSection({
  title,
  icon,
  items,
}) {
  return (
    <section className="space-y-5">

      {/* Section Header */}

      <div className="flex items-center gap-3">

        <span className="text-3xl">
          {icon}
        </span>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

      </div>

      {/* Divider */}

      <div className="h-px w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent" />

      {/* Insight List */}

      <div className="space-y-5">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              rounded-xl
              border
              border-white/5
              bg-white/[0.02]
              p-4
              transition-all
              duration-300
              hover:border-purple-500/40
              hover:bg-purple-500/5
            "
          >

            <CheckCircle2
              size={20}
              className="text-purple-400 mt-1 flex-shrink-0"
            />

            <p className="text-gray-300 leading-7">
              {item}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}