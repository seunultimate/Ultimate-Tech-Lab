function StatsSection() {

  // ✅ To update your numbers, just change the values here
  const stats = [
    { value: "500+", label: "Happy Clients", icon: "😊" },
    { value: "200+", label: "Projects Completed", icon: "🚀" },
    { value: "3+",   label: "Years Experience", icon: "📅" },
    { value: "99%",  label: "Client Satisfaction", icon: "⭐" },
  ]

  return (
    // ✅ Blue background — creates a strong visual break between sections
    <section className="py-10 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <span className="text-3xl mb-3">{stat.icon}</span>

              {/* Number */}
              {/* ✅ To change font size: text-5xl = bigger, text-3xl = smaller */}
              <p className="text-white text-4xl md:text-5xl font-black mb-2">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-blue-100 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StatsSection;