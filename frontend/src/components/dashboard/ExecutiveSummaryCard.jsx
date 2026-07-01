import { Sparkles } from "lucide-react";

export default function ExecutiveSummaryCard({
  summary,
}) {
  if (!summary) return null;

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

      <div className="flex items-center gap-4">

        <Sparkles
          className="text-purple-400"
          size={30}
        />

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Executive Summary
        </h2>

      </div>

      <p
        className="
          mt-8
          text-lg
          leading-9
          text-gray-300
        "
      >
        {summary}
      </p>

    </div>

  );
}