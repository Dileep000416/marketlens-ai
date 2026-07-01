export default function FeatureCard({
  title,
  description,
  icon
}) {
  return (
    <div
      className="
      p-8
      rounded-3xl
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      hover:border-purple-500/30
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}