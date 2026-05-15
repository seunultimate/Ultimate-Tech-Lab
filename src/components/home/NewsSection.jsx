import { useState, useEffect } from 'react'

function NewsSection() {

  const [activeTab, setActiveTab] = useState('crypto')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ✅ Your GNews API key
  // ⚠️ Move this to backend before deploying publicly
  const API_KEY = '34bff826779bdf570b2e2bf738d8bf59'

  // ✅ Tabs config — to add a new tab just add an object here
  const tabs = [
    { id: 'crypto', label: '💰 Crypto News', query: 'cryptocurrency bitcoin crypto trading' },
    { id: 'tech', label: '💻 Tech News', query: 'technology software programming AI' },
    { id: 'world', label: '🌍 World News', query: 'world news breaking' },
    { id: 'nigeria', label: '🇳🇬 Nigeria', query: 'Nigeria business technology' },
  ]

  // ✅ Fetch news from GNews API
  const fetchNews = async (query) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=6&apikey=${API_KEY}`
      )
      const data = await response.json()
      if (data.articles) {
        setNews(data.articles)
      } else {
        setError('No news found')
      }
    } catch (err) {
      setError('Failed to load news. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ✅ Fetch news when tab changes
  useEffect(() => {
    const currentTab = tabs.find(t => t.id === activeTab)
    if (currentTab) fetchNews(currentTab.query)
  }, [activeTab])

  // ✅ Format time ago
  const timeAgo = (dateString) => {
    const now = new Date()
    const published = new Date(dateString)
    const diffMs = now - published
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor(diffMs / (1000 * 60))
    if (diffHrs >= 24) return `${Math.floor(diffHrs / 24)}d ago`
    if (diffHrs >= 1) return `${diffHrs}h ago`
    return `${diffMins}m ago`
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            LIVE UPDATES
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Stay informed with real-time news on crypto, tech and world events.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400 text-sm">Loading latest news...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-10">
            <p className="text-red-400 text-sm mb-3">{error}</p>
            <button
              onClick={() => {
                const currentTab = tabs.find(t => t.id === activeTab)
                if (currentTab) fetchNews(currentTab.query)
              }}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Article Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // ✅ If image fails to load show fallback
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  {/* Fallback if no image */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-content:center text-4xl"
                    style={{ display: article.image ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {activeTab === 'crypto' ? '💰' : activeTab === 'tech' ? '💻' : activeTab === 'nigeria' ? '🇳🇬' : '🌍'}
                  </div>

                  {/* Source badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {article.source?.name || 'News'}
                    </span>
                  </div>

                  {/* Time badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white text-[10px] px-2.5 py-1 rounded-full">
                      {timeAgo(article.publishedAt)}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {article.source?.name}
                    </span>
                    <span className="text-blue-600 text-xs font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default NewsSection