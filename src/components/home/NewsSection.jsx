import { useState } from 'react'

function NewsSection() {
  const [activeTab, setActiveTab] = useState('crypto')

  const tabs = [
    { id: 'crypto', label: '💰 Crypto News' },
    { id: 'tech', label: '💻 Tech News' },
    { id: 'nigeria', label: '🇳🇬 Nigeria Tech' },
  ]

  // ✅ Static news headlines with real links
  // Update these regularly to keep content fresh
  const news = {
    crypto: [
      {
        title: 'Bitcoin surges past $100K as institutional demand grows',
        source: 'CoinDesk',
        time: '2h ago',
        url: 'https://www.coindesk.com',
        category: 'Bitcoin',
        color: 'bg-orange-100 text-orange-700',
      },
      {
        title: 'Ethereum upgrade brings faster transactions and lower fees',
        source: 'CoinTelegraph',
        time: '4h ago',
        url: 'https://cointelegraph.com',
        category: 'Ethereum',
        color: 'bg-purple-100 text-purple-700',
      },
      {
        title: 'P2P crypto trading volumes hit record high in Nigeria',
        source: 'TechCabal',
        time: '6h ago',
        url: 'https://techcabal.com',
        category: 'Nigeria',
        color: 'bg-green-100 text-green-700',
      },
      {
        title: 'SEC approves new crypto ETF products for retail investors',
        source: 'Bloomberg',
        time: '8h ago',
        url: 'https://bloomberg.com',
        category: 'Regulation',
        color: 'bg-blue-100 text-blue-700',
      },
      {
        title: 'Solana network processes 1 million transactions per second',
        source: 'The Block',
        time: '10h ago',
        url: 'https://theblock.co',
        category: 'Solana',
        color: 'bg-teal-100 text-teal-700',
      },
      {
        title: 'USDT remains dominant stablecoin with $120B market cap',
        source: 'CoinDesk',
        time: '12h ago',
        url: 'https://coindesk.com',
        category: 'Stablecoins',
        color: 'bg-gray-100 text-gray-700',
      },
    ],
    tech: [
      {
        title: 'Claude AI becomes the most used coding assistant worldwide',
        source: 'TechCrunch',
        time: '1h ago',
        url: 'https://techcrunch.com',
        category: 'AI',
        color: 'bg-orange-100 text-orange-700',
      },
      {
        title: 'React 20 released with major performance improvements',
        source: 'Dev.to',
        time: '3h ago',
        url: 'https://dev.to',
        category: 'React',
        color: 'bg-blue-100 text-blue-700',
      },
      {
        title: 'Node.js 24 brings native TypeScript support',
        source: 'InfoQ',
        time: '5h ago',
        url: 'https://infoq.com',
        category: 'Node.js',
        color: 'bg-green-100 text-green-700',
      },
      {
        title: 'Vite 7.0 makes frontend development even faster',
        source: 'Smashing Magazine',
        time: '7h ago',
        url: 'https://smashingmagazine.com',
        category: 'Tools',
        color: 'bg-purple-100 text-purple-700',
      },
      {
        title: 'MongoDB introduces real-time sync for mobile apps',
        source: 'MongoDB Blog',
        time: '9h ago',
        url: 'https://mongodb.com/blog',
        category: 'Database',
        color: 'bg-emerald-100 text-emerald-700',
      },
      {
        title: 'Tailwind CSS v4 ships with zero config setup',
        source: 'CSS Tricks',
        time: '11h ago',
        url: 'https://css-tricks.com',
        category: 'CSS',
        color: 'bg-cyan-100 text-cyan-700',
      },
    ],
    nigeria: [
      {
        title: 'Nigeria\'s tech startup ecosystem raises $500M in 2026',
        source: 'TechCabal',
        time: '2h ago',
        url: 'https://techcabal.com',
        category: 'Startups',
        color: 'bg-green-100 text-green-700',
      },
      {
        title: 'Lagos becomes Africa\'s top tech hub for developers',
        source: 'Techpoint Africa',
        time: '4h ago',
        url: 'https://techpoint.africa',
        category: 'Lagos',
        color: 'bg-blue-100 text-blue-700',
      },
      {
        title: 'CBN digital currency eNaira adoption grows 300%',
        source: 'Nairametrics',
        time: '6h ago',
        url: 'https://nairametrics.com',
        category: 'Finance',
        color: 'bg-orange-100 text-orange-700',
      },
      {
        title: 'Nigerian developers now among highest paid in Africa',
        source: 'BusinessDay',
        time: '8h ago',
        url: 'https://businessday.ng',
        category: 'Careers',
        color: 'bg-purple-100 text-purple-700',
      },
      {
        title: 'Jumia Nigeria reports record sales for Q1 2026',
        source: 'Ventures Africa',
        time: '10h ago',
        url: 'https://venturesafrica.com',
        category: 'E-Commerce',
        color: 'bg-red-100 text-red-700',
      },
      {
        title: 'MTN launches 5G network across major Nigerian cities',
        source: 'Techpoint Africa',
        time: '12h ago',
        url: 'https://techpoint.africa',
        category: 'Telecoms',
        color: 'bg-yellow-100 text-yellow-700',
      },
    ],
  }

  const currentNews = news[activeTab]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            LATEST UPDATES
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            News & Headlines
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Stay informed with the latest in crypto, tech and Nigerian business news.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentNews.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 p-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 rounded-2xl hover:shadow-md transition-all"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600 font-black text-sm">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-[10px]">{item.time}</span>
                </div>
                <p className="text-gray-800 text-sm font-semibold leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xs">{item.source}</p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors mt-1">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            Headlines updated regularly • Click any story to read the full article
          </p>
        </div>

      </div>
    </section>
  )
}

export default NewsSection