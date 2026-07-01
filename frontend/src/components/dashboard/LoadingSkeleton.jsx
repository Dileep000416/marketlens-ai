export default function LoadingSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      {/* Header */}

      <div className="h-48 rounded-3xl bg-white/5" />

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="h-44 rounded-3xl bg-white/5" />

        <div className="h-44 rounded-3xl bg-white/5" />

        <div className="h-44 rounded-3xl bg-white/5" />

      </div>

      {/* Analytics */}

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="h-[420px] rounded-3xl bg-white/5" />

        <div className="h-[420px] rounded-3xl bg-white/5" />

      </div>

      {/* AI Report */}

      <div className="h-[650px] rounded-3xl bg-white/5" />

      {/* Sources */}

      <div className="h-[260px] rounded-3xl bg-white/5" />

    </div>
  );
}