export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-12
      mt-10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        "
      >
        <div>

          <h3 className="text-xl font-bold">
            MarketLens AI
          </h3>

          <p className="text-gray-500 mt-2">
            AI-Powered Competitor Intelligence Platform
          </p>

        </div>

        <p className="text-gray-500 mt-6 md:mt-0">
          © 2026 MarketLens AI. All rights reserved.
        </p>

      </div>
    </footer>
  )
}