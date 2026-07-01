import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        MarketLens AI
      </Link>

      <div className="hidden md:flex gap-8 text-gray-400">

        <Link
          to="/"
          className="hover:text-white transition-colors"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-white transition-colors"
        >
          Dashboard
        </Link>

        <Link
          to="/compare"
          className="hover:text-white transition-colors"
        >
          Compare
        </Link>

      </div>

      <Link
        to="/dashboard"
        className="
          px-5
          py-2
          rounded-lg
          bg-white
          text-black
          font-medium
          transition-all
          hover:scale-105
        "
      >
        Launch App
      </Link>

    </nav>
  );
}