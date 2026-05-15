import { Link } from 'react-router-dom'

function ServicesSection() {

  // ✅ To add a new service, just add a new object here
  const services = [
    {
      id: 1,
      icon: "🖥️",
      title: "Web Development",
      description: "From landing pages to complex web applications. We build fast, scalable and modern websites.",
      // ✅ To add/remove features, edit this array
      features: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Solutions",
        "API Development",
      ],
      color: "blue",
      link: "/services/web-development",
    },
    {
      id: 2,
      icon: "💰",
      title: "Crypto Services",
      description: "Secure crypto trading, P2P transactions, best rates and mentorship for beginners.",
      features: [
        "Buy & Sell Crypto",
        "P2P Trading",
        "Best Market Rates",
        "Mentorship & Training",
        "Check current market prices",
      ],
      color: "green",
      link: "/services/crypto",
    },
    {
      id: 3,
      icon: "🛒",
      title: "Shopping Assistance",
      description: "Shop from any store worldwide, we handle the order and deliver to any location in Nigeria.",
      features: [
        "Jumia Orders",
        "Local Online Storees Shopping",
        "International Shopping",
        "Doorstep Delivery",
        "Package Tracking",
      ],
      color: "orange",
      link: "/services/shopping",
    },
  ]

  // ✅ To change trust badges, edit this array
  const trustBadges = [
    { icon: "🔒", title: "Secure Transactions", desc: "Your safety is our priority" },
    { icon: "⚡", title: "Fast Delivery", desc: "Quick and reliable service" },
    { icon: "🕐", title: "24/7 Support", desc: "We are always here" },
    { icon: "⭐", title: "Satisfaction Guaranteed", desc: "We deliver quality always" },
  ]

  // ✅ Color styles for each service card
  // To change a card color, update the matching color name
  const colorStyles = {
    blue: {
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      iconText: "text-blue-600",
      checkBg: "bg-blue-600",
      linkText: "text-blue-600 hover:text-blue-700",
      hover: "hover:border-blue-200",
    },
    green: {
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
      iconText: "text-emerald-600",
      checkBg: "bg-emerald-600",
      linkText: "text-emerald-600 hover:text-emerald-700",
      hover: "hover:border-emerald-200",
    },
    orange: {
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
      iconText: "text-orange-600",
      checkBg: "bg-orange-600",
      linkText: "text-orange-600 hover:text-orange-700",
      hover: "hover:border-orange-200",
    },
  }

  return (
    // ✅ White background starts here
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* ✅ Small label above heading — change text here */}
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            We provide the best digital solutions tailored to your needs.
          </p>
        </div>

        {/* Service Cards */}
        {/* ✅ grid-cols-3 = 3 cards side by side on desktop */}
        {/* On mobile it stacks to 1 column automatically */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const style = colorStyles[service.color]
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${style.hover}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${style.iconBg} border ${style.iconBorder}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                {/* ✅ Each feature has a colored checkmark */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0 ${style.checkBg}`}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                {/* ✅ Arrow moves right on hover — nice micro interaction */}
                <Link
                  to={service.link}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3 ${style.linkText}`}
                >
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        {/* ✅ These 4 badges sit below the service cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className="text-gray-800 text-sm font-semibold">{badge.title}</p>
                <p className="text-gray-400 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection