import { Link } from 'react-router-dom'

function Values() {

  const values = [
    { icon: '💎', title: 'Excellence', color: 'bg-blue-50 border-blue-100', desc: 'We deliver nothing short of the best in every project, trade and order we handle.' },
    { icon: '🔒', title: 'Integrity', color: 'bg-green-50 border-green-100', desc: 'We are honest, transparent and trustworthy in all our dealings with clients.' },
    { icon: '⚡', title: 'Innovation', color: 'bg-yellow-50 border-yellow-100', desc: 'We always use the latest technology and approaches to solve problems creatively.' },
    { icon: '🤝', title: 'Partnership', color: 'bg-purple-50 border-purple-100', desc: 'We treat every client as a long-term partner, not just a one-time transaction.' },
    { icon: '🌍', title: 'Global Mindset', color: 'bg-orange-50 border-orange-100', desc: 'Built in Nigeria but designed to serve clients and businesses worldwide.' },
    { icon: '📈', title: 'Growth', color: 'bg-pink-50 border-pink-100', desc: 'We are committed to growing with our clients and continuously improving our services.' },
  ]

  const updates = [
    {
      date: 'May 2026',
      type: 'Feature',
      color: 'bg-blue-100 text-blue-700',
      title: 'UTL AI Chatbot Launched',
      desc: 'We launched our AI-powered chatbot to help clients get instant answers about our services.',
    },
    {
      date: 'April 2026',
      type: 'Service',
      color: 'bg-green-100 text-green-700',
      title: 'UTL Shop Marketplace Launched',
      desc: 'Our shopping marketplace went live — now sellers can list products and customers can order from multiple stores.',
    },
    {
      date: 'March 2026',
      type: 'Milestone',
      color: 'bg-purple-100 text-purple-700',
      title: '500+ Happy Clients',
      desc: 'We hit a major milestone of 500 satisfied clients across web development, crypto and shopping services.',
    },
    {
      date: 'February 2026',
      type: 'Feature',
      color: 'bg-orange-100 text-orange-700',
      title: 'Live Market Tracker Added',
      desc: 'Real-time crypto prices and currency rates now available directly on our website.',
    },
    {
      date: 'January 2026',
      type: 'Service',
      color: 'bg-pink-100 text-pink-700',
      title: 'Crypto Mentorship Program',
      desc: 'Launched our structured crypto mentorship program helping beginners become confident traders.',
    },
    {
      date: 'December 2025',
      type: 'Milestone',
      color: 'bg-yellow-100 text-yellow-700',
      title: 'Ultimate Tech Lab Rebranded',
      desc: 'Officially rebranded from a freelance service to Ultimate Tech Lab — a full digital solutions platform.',
    },
  ]

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="bg-[#0a0f2c] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link to="/about" className="hover:text-white">About</Link>
            <span>›</span>
            <span className="text-blue-400">Values & Updates</span>
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">VALUES & UPDATES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              What We Stand For &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Latest Updates
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Our core values guide everything we do. Stay updated with the latest news and milestones from Ultimate Tech Lab.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">OUR VALUES</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-500 max-w-md mx-auto">The principles that guide every decision we make at Ultimate Tech Lab.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title}
                className={`group border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${value.color}`}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">LATEST NEWS</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Updates & Milestones</h2>
            <p className="text-gray-500 max-w-md mx-auto">Stay up to date with everything happening at Ultimate Tech Lab.</p>
          </div>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all flex gap-5">
                <div className="flex-shrink-0 w-16 text-center">
                  <p className="text-blue-600 text-xs font-bold">{update.date}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${update.color}`}>
                      {update.type}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold mb-1">{update.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{update.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4">
          <Link to="/about"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors">
            ← Back to About
          </Link>
          <Link to="/about/vision"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
            Our Vision →
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Values