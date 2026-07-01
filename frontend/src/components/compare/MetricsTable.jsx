import {
    Newspaper,
    Activity,
    Trophy
} from "lucide-react";

export default function MetricsTable({
    company1,
    company2,
    winner,
}) {

    const rows = [

        {
            icon: Newspaper,
            title: "Articles",
            left: company1.articles,
            right: company2.articles,
        },

        {
            icon: Activity,
            title: "Activity Score",
            left: company1.activity_score,
            right: company2.activity_score,
        },

        {
            icon: Trophy,
            title: "Sentiment",
            left:
                company1.intelligence.market_intelligence.sentiment.overall,

            right:
                company2.intelligence.market_intelligence.sentiment.overall,
        },

        {
            icon: Trophy,
            title: "Threat Level",
            left:
                company1.intelligence.market_intelligence.threat_radar.level,

            right:
                company2.intelligence.market_intelligence.threat_radar.level,
        },

        {
            icon: Trophy,
            title: "Confidence",

            left:
                company1.intelligence.market_intelligence.confidence.score + "%",

            right:
                company2.intelligence.market_intelligence.confidence.score + "%",
        },

    ];

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

            <h2 className="text-3xl font-bold mb-8">

                Analytics Comparison

            </h2>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-white/10">

                            <th className="text-left py-5 text-gray-500">

                                Metric

                            </th>

                            <th className="text-center py-5">

                                {company1.name}

                            </th>

                            <th className="text-center py-5">

                                {company2.name}

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {rows.map((row) => {

                            const Icon = row.icon;

                            return (

                                <tr
                                    key={row.title}
                                    className="border-b border-white/5 hover:bg-white/5 transition"
                                >

                                    <td className="py-6">

                                        <div className="flex items-center gap-3">

                                            <Icon
                                                className="text-purple-400"
                                                size={20}
                                            />

                                            {row.title}

                                        </div>

                                    </td>

                                    <td className="text-center text-xl font-bold">

                                        {row.left}

                                    </td>

                                    <td className="text-center text-xl font-bold">

                                        {row.right}

                                    </td>

                                </tr>

                            );

                        })}

                        <tr>

                            <td className="py-6">

                                <div className="flex items-center gap-3">

                                    <Trophy
                                        className="text-yellow-400"
                                        size={20}
                                    />

                                    Winner

                                </div>

                            </td>

                            <td className="text-center">

                                {winner === company1.name
                                    ? "🏆"
                                    : "-"}

                            </td>

                            <td className="text-center">

                                {winner === company2.name
                                    ? "🏆"
                                    : "-"}

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    );

}