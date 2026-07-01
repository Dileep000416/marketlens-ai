import {
  Building2,
  Briefcase,
  Trophy,
  FileText,
} from "lucide-react";

export default function CompanyOverviewCard({
  profile,
}) {
  if (!profile) return null;

  const Item = ({ icon: Icon, title, value }) => (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
    >
      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className="text-purple-400"
        />

        <p className="text-sm text-gray-400">
          {title}
        </p>

      </div>

      <h3
        className="
          mt-3
          text-lg
          font-semibold
        "
      >
        {value || "Unknown"}
      </h3>

    </div>
  );

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

      <h2
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Company Intelligence
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          gap-5
        "
      >

        <Item
          icon={Building2}
          title="Industry"
          value={profile.industry}
        />

        <Item
          icon={Briefcase}
          title="Business Focus"
          value={profile.business_focus}
        />

        <Item
          icon={Trophy}
          title="Market Position"
          value={profile.market_position}
        />

        <Item
          icon={FileText}
          title="Description"
          value={profile.description}
        />

      </div>

    </div>

  );
}