import { useState, useEffect } from 'react'

function MarketTracker() {

  // ✅ State to store our fetched data
  const [cryptos, setCryptos] = useState([])
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [error, setError] = useState(null)

  // ✅ Fetch crypto prices from CoinGecko — completely free, no API key needed
  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana&order=market_cap_desc&sparkline=false'
      )
      const data = await response.json()
      setCryptos(data)
    } catch (err) {
      setError('Failed to load crypto data')
    }
  }

  // ✅ Fetch currency rates — free API
  const fetchCurrencyData = async () => {
    try {
      const response = await fetch(
        'https://api.exchangerate-api.com/v4/latest/USD'
      )
      const data = await response.json()

      // ✅ Extract only the currencies we need
      // To add more currencies, add them here
      const rates = data.rates
      const ngnRate = rates.NGN

      setCurrencies([
        { pair: 'USD/NGN', rate: ngnRate.toFixed(2), flag: '🇺🇸' },
        { pair: 'GBP/NGN', rate: (ngnRate / rates.GBP).toFixed(2), flag: '🇬🇧' },
        { pair: 'EUR/NGN', rate: (ngnRate / rates.EUR).toFixed(2), flag: '🇪🇺' },
        { pair: 'CAD/NGN', rate: (ngnRate / rates.CAD).toFixed(2), flag: '🇨🇦' },
      ])
    } catch (err) {
      setError('Failed to load currency data')
    }
  }

  // ✅ Fetch all data together
  const fetchAllData = async () => {
    setLoading(true)
    await Promise.all([fetchCryptoData(), fetchCurrencyData()])
    setLastUpdated(new Date().toLocaleTimeString())
    setLoading(false)
  }

  // ✅ useEffect runs when component first loads
  // Then auto refreshes every 60 seconds
  useEffect(() => {
    fetchAllData()
    const interval = setInterval(fetchAllData, 60000)

    // ✅ Cleanup — stops the timer when user leaves the page
    return () => clearInterval(interval)
  }, [])

  // ✅ Helper — formats large numbers nicely
  // e.g. 1234567 becomes $1.23M
  const formatMarketCap = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    return `$${num}`
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            LIVE DATA
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Mini Market Tracker
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Stay updated with real-time crypto and currency prices.
          </p>

          {/* Last updated + refresh button */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {lastUpdated && (
              <span className="text-gray-400 text-xs">
                Last updated: {lastUpdated}
              </span>
            )}
            {/* ✅ Manual refresh button */}
            <button
              onClick={fetchAllData}
              className="text-blue-600 text-xs font-semibold hover:text-blue-700 flex items-center gap-1"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400 text-sm">Fetching live market data...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-8">
            <p className="text-red-400 text-sm">{error}</p>
            <button
              onClick={fetchAllData}
              className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Data Loaded */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-8">

            {/* ── Crypto Prices ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* Card Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🪙</span>
                  <h3 className="text-gray-900 font-bold">Crypto Prices</h3>
                </div>
                {/* Live indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-500 text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Crypto List */}
              <div className="divide-y divide-gray-50">
                {cryptos.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    {/* Coin info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">
                          {coin.name}
                        </p>
                        <p className="text-gray-400 text-xs uppercase">
                          {coin.symbol}
                        </p>
                      </div>
                    </div>

                    {/* Price + change */}
                    <div className="text-right">
                      <p className="text-gray-900 text-sm font-bold">
                        ${coin.current_price.toLocaleString()}
                      </p>
                      {/* ✅ Green if positive, red if negative */}
                      <p className={`text-xs font-semibold ${
                        coin.price_change_percentage_24h >= 0
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}>
                        {coin.price_change_percentage_24h >= 0 ? '▲' : '▼'}{' '}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Currency Rates ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* Card Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💵</span>
                  <h3 className="text-gray-900 font-bold">Currency Rates</h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-500 text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Currency List */}
              <div className="divide-y divide-gray-50">
                {currencies.map((currency) => (
                  <div
                    key={currency.pair}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    {/* Flag + pair */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{currency.flag}</span>
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">
                          {currency.pair}
                        </p>
                        <p className="text-gray-400 text-xs">
                          Nigerian Naira
                        </p>
                      </div>
                    </div>

                    {/* Rate */}
                    <div className="text-right">
                      <p className="text-gray-900 text-sm font-bold">
                        ₦{Number(currency.rate).toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-xs">
                        per 1 unit
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
                <p className="text-blue-600 text-xs">
                  💡 Rates are indicative. Contact us for best P2P rates.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Link to full market page */}
        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            View Full Market Tracker →
          </a>
        </div>

      </div>
    </section>
  )
}

export default MarketTracker