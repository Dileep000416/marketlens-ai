export default function ComparePreview() {
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
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-bold">
          Tesla vs Ford
        </h3>

        <span
          className="
          px-4
          py-2
          rounded-full
          bg-green-500/20
          text-green-400
          text-sm
          "
        >
          Tesla Leading
        </span>
      </div>

      {/* Tesla */}

      <div className="mb-8">

        <div className="flex justify-between mb-3">
          <span>Tesla</span>
          <span>80</span>
        </div>

        <div className="w-full h-4 rounded-full bg-white/10">
          <div
            className="
            h-4
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-purple-300
            w-[80%]
            "
          />
        </div>

      </div>

      {/* Ford */}

      <div>

        <div className="flex justify-between mb-3">
          <span>Ford</span>
          <span>40</span>
        </div>

        <div className="w-full h-4 rounded-full bg-white/10">
          <div
            className="
            h-4
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-cyan-300
            w-[40%]
            "
          />
        </div>

      </div>

    </div>
  );
}